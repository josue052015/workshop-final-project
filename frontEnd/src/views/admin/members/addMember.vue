<template>
  <section>
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="navbar-item title is-2">Agregar miembro</span>
      </div>
    </nav>
    <div></div>
    <form @submit.prevent="validate">
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <template #trigger="props">
          <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">Datos del miembro</p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>

        <div class="card-content">
          <div class="content">
            <div class="columns is-multiline">
              <div class="column">
                <b-field
                  label="Workshop*"

                  :type="{ 'is-danger': errors.has('workShopId') }"
                  :message="errors.first('workShopId')"
              
                >
                  <b-select v-model="model.workShopId"
                   placeholder="Requerido"
                  data-vv-as="workShopId"
                  v-validate="'required'">
                    <option
                      v-for="workshop in workshops"
                      :value="workshop.id"
                      :key="workshop.id"
                    >
                      {{ workshop.name }}
                    </option>
                  </b-select>
                </b-field>
              </div>

              <div class="column">
                <b-field
                  label="User*"
                  
                  :type="{ 'is-danger': errors.has('userId') }"
                  :message="errors.first('userId')"
                 
                >
                  <b-select v-model="model.userId"
                   placeholder="Requerido"
                  data-vv-as="userId"
                  v-validate="'required'">
                    <option
                      v-for="user in users"
                      :value="user.id"
                      :key="user.id"
                    >
                      {{ user.userName }}
                    </option>
                  </b-select>
                </b-field>
              </div>

              <div class="column">
                <b-field
                  label="Rol*"
                  :type="{ 'is-danger': errors.has('gender') }"
                  :message="errors.first('gender')"
                 >
                  <b-radio
                    v-model="model.WorkShopMemberRole"
                    name="role"
                    data-vv-as="rol"
                    v-validate="'required'"
                    :native-value="0"
                  >
                    Estudiante
                  </b-radio>
                  <b-radio
                    v-model="model.WorkShopMemberRole"
                    name="role"
                    data-vv-as="rol"
                    v-validate="'required'"
                    :native-value="1"
                  >
                    Profesor
                  </b-radio>
                </b-field>
              </div>

            
            </div>
          </div>
        </div>
      </b-collapse>
      <br />

      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <p class="level-item">
            <b-button
              :disabled="(modelDoNotChange && !errors.any()) || saving"
              type="is-light"
              @click="clean"
              icon-right="eraser"
              >Reiniciar</b-button
            >
          </p>
          <p class="level-item">
            <b-button
              type="is-danger"
              :disabled="saving"
              @click="cancel"
              icon-right="cancel"
              >Cancelar</b-button
            >
          </p>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item">
            <b-button
              type="is-primary"
              native-type="submit"
              :disabled="errors.any()"
              :loading="saving"
              icon-right="content-save"
              >Guardar</b-button
            >
          </p>
        </div>
      </nav>
    </form>
  </section>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { BaseFormAddMixin } from "@/mixins";
import { WorkShopMember } from "@/core/model";
import axios from "axios";
@Component
export default class WorkShopAddComponent extends Mixins<
  BaseFormAddMixin<WorkShopMember>
>(BaseFormAddMixin) {
  workshops = [];
  users = [];

  async created() {
    const response = await axios.get("https://localhost:44394/api/workshop");
    this.workshops = response.data;
    const userResponse = await axios.get("https://localhost:44394/api/User");
    this.users = userResponse.data;
  }

  uploading = false;
  successUpload = false;
  errorUpload = false;
  imageUrl = require("@/assets/sx-logo.png");
  constructor() {
    super();
    this.controller = "WorkShopMember";
    this.model = new WorkShopMember();
  }
}
</script>
