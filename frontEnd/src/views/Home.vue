<template>
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
                Creado por: {{ element.createdBy }}@emmanuel
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
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      elements: [],
    };
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