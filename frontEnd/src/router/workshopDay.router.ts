import { RouteConfig } from "vue-router";
const item = {
  path: "/admin/workshopDays",
  name:"Days",
  component: () => import("../views/base.vue"),
  children: [
    {
      path: "",
      component: () => import("../views/admin/workshopDays/daysList.vue"),
    },
    {
      path: "add",
      component: () => import("../views/admin/workshopDays/addWorkShopDay.vue")
    },
    {
      path: "profile",
      component: () => import("@/views/admin/users/myUser.vue")
    },
    {
        path: "edit/:id",
        component: () => import("../views/admin/workshopDays/editDay.vue")
      }
     
  ],
} as RouteConfig;

export default item;