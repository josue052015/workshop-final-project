import { RouteConfig } from "vue-router";
const item = {
  path: "/admin/workshops",
  name:"Workshops",
  component: () => import("../views/base.vue"),
  children: [
    {
      path: "",
      component: () => import("../views/admin/workshops/workShopList.vue"),
    },
    {
      path: "add",
      component: () => import("../views/admin/workshops/addWorkshop.vue")
    },
    {
      path: "edit/:id",
      component: () => import("../views/admin/workshops/editWorkshop.vue")
    },
    {
      path: "details/:id",
      component: () => import("../views/admin/workshops/workshopDetails.vue")
    }
   /*  {
      path: "addMember",
      component: () => import("../views/admin/members/addMember.vue")
    }, */
     
  ],
} as RouteConfig;

export default item;