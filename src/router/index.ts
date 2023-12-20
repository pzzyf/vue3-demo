import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/driver.vue"),
  },
  // echarts
  {
    path: "/echarts",
    name: "echarts",
    component: () => import("../components/echarts.vue"),
  },
  {
    path: "/uilib",
    name: "uilib",
    component: () => import("../components/uilib.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
