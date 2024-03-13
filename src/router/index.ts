import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layout/index.vue";

const routes = [
  {
    path: "/aaa",
    component: Layout,
    children: [
      {
        path: "bbb",
        component: () => import("../views/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
