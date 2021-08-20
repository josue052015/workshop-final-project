import { RouteConfig } from "vue-router";
const item = {
  path: "/admin/members",
  name:"Members",
  component: () => import("../views/base.vue"),
  children: [ 
    {
      path: "",
      component: () => import("../views/admin/members/memberList.vue")
    }, 
    {
      path: "add",
      component: () => import("../views/admin/members/addMember.vue")
    }, 
    {
      path: "edit/:id",
      component: () => import("../views/admin/members/editMember.vue")
    }
  /*   {
      path: "edit/:id",
      component: () => import("../views/admin/workshops/editWorkshop.vue")
    } */
     
  ],
} as RouteConfig;

export default item;