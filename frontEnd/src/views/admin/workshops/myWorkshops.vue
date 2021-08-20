<template>
  <div>
    <div class="home" >
      <div class="columns">
        <div v-for="workshop in workshops" :key="workshop.id" class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is 48x48"></figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ workshop.name }}</p>
                  <p class="title is-6">
                    Creado por: {{ workshop.createdBy }}@Pedro
                  </p>
                </div>
              </div>
              <div class="content">
                {{ workshop.description }}
                <br />
                <small>
                  <strong>
                    {{ workshop.startDate.split("T")[0] }} hasta
                    {{ workshop.endDate.split("T")[0] }}
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
  name: "MyWorkShops",
  data() {
    return {
      workshops: [],
    };
  },
  
  async created() {
    const response = await axios.get("https://localhost:44394/api/workshop");
    this.workshops = response.data
  },
};
</script>
