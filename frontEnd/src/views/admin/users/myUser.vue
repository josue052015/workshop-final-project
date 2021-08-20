<template>
  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
        <div class="card card-profile shadow">
          <div class="row justify-content-center">
            <div class="col-lg-3 order-lg-2">
              <div class="card-profile-image">
                <a href="#">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg"
                    class="rounded-circle"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
          >
            <div class="d-flex justify-content-between">
             
            </div>
          </div>
          <div class="card-body pt-0 pt-md-4">
            <div class="row">
              <div class="col">
                <div
                  class="
                    card-profile-stats
                    d-flex
                    justify-content-center
                    mt-md-5
                  "
                >
                  <div>
                    
                  </div>
                  <div>
                   
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div>
                  <h1 class="userText">@pe.rod.654</h1>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3>Pedro Rodriguez<span class="font-weight-light">: administrador</span></h3>
              <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>26/12/2001
              </div>
              <div class="h5 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Cédula -
                001-5748478-7
              </div>
              
              <hr class="my-4" />
            
            </div>
          </div>
        </div>
      </div>
    </div>
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
<style>
.container-fluid {
 width: 100%;
 margin-right: auto;
 margin-left: auto;
 padding-right: 15px;
 padding-left: 15px;
}
.row {
 display: flex;
 margin-right: -15px;
 margin-left: -15px;
 flex-wrap: wrap;
}
.col-4,
.col-8,
.col,
.col-md-10,
.col-md-12,
.col-lg-3,
.col-lg-4,
.col-lg-6,
.col-lg-7,
.col-xl-4,
.col-xl-6,
.col-xl-8 {
 position: relative;
 width: 100%;
 min-height: 1px;
 padding-right: 15px;
 padding-left: 15px;
}
.col {
 max-width: 100%;
 flex-basis: 0;
 flex-grow: 1;
}
.col-4 {
 max-width: 33.33333%;
 flex: 0 0 33.33333%;
}
.col-8 {
 max-width: 66.66667%;
 flex: 0 0 66.66667%;
}
card {
 position: relative;
 display: flex;
 flex-direction: column;
 min-width: 0;
 word-wrap: break-word;
 border: 1px solid rgba(0, 0, 0, .05);
 border-radius: .375rem;
 background-color: #fff;
 background-clip: border-box;
}
.card>hr {
 margin-right: 0;
 margin-left: 0;
}
.card-body {
 padding: 1.5rem;
 flex: 1 1 auto;
}
.card-header {
 margin-bottom: 0;
 padding: 1.25rem 1.5rem;
 border-bottom: 1px solid rgba(0, 0, 0, .05);
 background-color: #fff;
}
.card-header:first-child {
 border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;
}

card-profile-image {
 position: relative;
}
.card-profile-image img {
 position: absolute;
 left: 50%;
 max-width: 180px;
 transition: all .15s ease;
 transform: translate(-50%, -30%);
 border-radius: .375rem;
}
.card-profile-image img:hover {
 transform: translate(-50%, -33%);
}
.card-profile-stats {
 padding: 1rem 0;
}
.card-profile-stats>div {
 margin-right: 1rem;
 padding: .875rem;
 text-align: center;
}
.card-profile-stats>div:last-child {
 margin-right: 0;
}
.card-profile-stats>div .heading {
 font-size: 1.1rem;
 font-weight: bold;
 display: block;
}
.card-profile-stats>div .description {
 font-size: .875rem;
 color: #adb5bd;
}
h1,
h3,
h4,
h5,
h6,
.h1,
.h3,
.h4,
.h5,
.h6 {
 font-family: inherit;
 font-weight: 600;
 line-height: 1.5;
 margin-bottom: .5rem;
 color: #32325d;
}
.h3 {
 font-size: 1.0625rem;
}
.text-center{
  margin-top: 45px;
}
.userText{
  margin-top: 20px;
  font-size: 50px;
}
</style>