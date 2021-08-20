<template>
  <div>
    <div class="select">
          <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
            <template #trigger="">
                <div
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3">
                    <p class="card-header-title">
                        Más opciones        
                    </p>
                   <div>
                     <p>

                     </p>
                   </div>
                </div>
            </template>

            <footer class="card-footer">
                <a class="card-footer-item" href="/admin/members" >Miembros</a>
                <a class="card-footer-item" href="/admin/workshopDays">Días</a>
            </footer>
        </b-collapse>
    </div>
     

    <sx-buefy-table :config="tableConfig">
      <template v-slot:name="{ row }">
        <div class="media">
          <div class="media-left">
            <p class="icon-image-rounded has-background-primary">
              {{ row.name.split(" ")[0].charAt(0) }}
            </p>
          </div>
          <div class="media-content">
            <p class="title is-6">
              <b-tooltip label="Perfil no disponible">
                <a class="has-text-link cursor-ban" tag = "router-link" :href="'/admin/workshops/details/' + row.id">{{ row.name }}</a>
              </b-tooltip>
            </p>
          </div>
        </div>
      </template>

      <template v-slot:description="{ row }">
        <div>
          <p>
            {{ row.description }}
          </p>
        </div>
      </template>
      <template v-slot:startDate="{ row }">
        <div>
          <p>
            {{ row.startDate.split("T")[0] }}
          </p>
        </div>
      </template>
      <template v-slot:endDate="{ row }">
        <div>
          <p>
            {{ row.endDate.split("T")[0] }}
          </p>
        </div>
      </template>
      
    </sx-buefy-table>
    
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { SxBuefyTableMixin } from "@/mixins";
import { BTableColumn } from "@/components/sx/sx-buefy-table/config";
import Helpers from "@/core/utils/helpers";
import { BTableColumnType, UserRole } from "@/core/utils/enums";
import { WorkShop } from "@/core/model/workshop.model";
@Component
export default class UserListComponent extends Mixins<
  SxBuefyTableMixin<WorkShop>
>(SxBuefyTableMixin) {
  created() {
    this.setTableConfig();
    this.formatColumns();
  }
  setTableConfig() {
    this.tableConfig.controller = "WorkShop";
    this.tableConfig.aggregatable = true;
    this.tableConfig.aggregating.title = "Listado de talleres";
  }
  formatColumns() {
    let name = new BTableColumn("name", "Nombre");
    name.sortable = false;
    name.customTemplate = true;

    let description = new BTableColumn("description", "Descripción");
    description.sortable = false;
    description.customTemplate = true;

    let startDate = new BTableColumn("startDate", "Fecha de inicio");
    startDate.sortable = false;
    startDate.customTemplate = true;

    let endDate = new BTableColumn("endDate", "Fecha de término");
    endDate.sortable = false;
    endDate.customTemplate = true;

    this.tableConfig.insertColumns(name, description, startDate, endDate);
  }
  addMember(id: number){
this.$router.push(`/admin/members/add/${id}`)
  }
}
</script>
<style>
 .addMemberButton{
  margin-left:86%; 
margin-bottom: 5px;
} 
.select{
  margin-bottom: 10px;
}
</style>