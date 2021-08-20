

<template>
  <div>
    <ul v-for="workshopDay in workshopDays" :key="workshopDay.id">
      <li > {{workshopDay.id}}</li>
    </ul>
  </div>
</template>
<script >

export default {
    name : "WorkShopDetails",
    data(){
        return{
            users : [],
            workshopDays : [],
            workshopMembers : [],
            userList : [],
            roleList : []
        }
    },
    async created() {
  const result = await this.WorkShopDayService.getFilteredDays(parseInt(this.$route.params.id));
  this.workshopDays = result.data;
  },
}
</script>

