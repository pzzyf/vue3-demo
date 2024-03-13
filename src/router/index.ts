import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/flex.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
