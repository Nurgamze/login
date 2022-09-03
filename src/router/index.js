import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/loginPage"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/registerPage"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/homePage"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
