import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../components/webpack.vue')
  },
  // echarts
  {
    path: "/echarts",
    name: "echarts",
    component: () => import("../components/echarts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;