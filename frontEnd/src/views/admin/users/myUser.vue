<template>
  <div>
    <img src="" alt="">
  </div>
</template>
<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default class myUser extends Vue {
  userData = [];
file = [];
  async created() {
    const response = await axios.get("https://localhost:44394/api/user/2");
    this.userData = response.data;
  }
}
</script>
