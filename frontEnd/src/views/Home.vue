<template>
<div>
  <b-button size="is-small" @click="changeCardState()">{{card == true ? "cards": "Carousel"}}</b-button>
  <div v-if="card">
    <b-carousel>
      <b-carousel-item v-for="element in elements" :key="element.id">
        <section :class="`hero is-medium is-primary`">
          <div class="center">
            <h1 class="title is-90">Accedido recientemente</h1>
          </div>
          <div class="hero-body has-text-centered">
            <div class="media">
              <div class="media-content">
                <p class="title is-40">{{ element.name }}</p>
                <p class="title is-6">
                  Creado por: {{ element.createdBy }}@Pedro
                </p>
              </div>
            </div>
            <div class="content">
              {{ element.description }}
              <br />
              <small>
                <strong>
                  {{ element.startDate.split("T")[0] }} hasta
                  {{ element.endDate.split("T")[0] }}
                </strong>
              </small>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
  <div class="home" v-if="!card">
    <div class="columns">
      <div v-for="element in elements" :key="element.id" class="column">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is 48x48" ></figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{element.name}}</p>
                <p class="title is-6">Creado por: {{element.createdBy}}@Pedro</p>
              </div>
            </div>
            <div class="content">
              {{element.description}}
              <br/>
              <small>
                <strong>
                  {{element.startDate.split("T")[0]}} hasta {{element.endDate.split("T")[0]}}
                </strong>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      elements: [],
      card: true,
    };
  },
  methods: {
    changeCardState() {
      this.card =! this.card;
    },
  },
  async created() {
    const response = await axios.get("https://localhost:44394/api/workshop");
    this.elements = response.data.slice(this.elements.length - 3);
  },
};
</script>
<style>
.center {
  text-align: center;
  padding: 8px;
}
</style>