import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/info",
      name: "info",
      component: () => import("@/views/InfoView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/OrderView.vue"),
    },
  ],
});

router.beforeEach((_, from) => {
  if (!from.name || window.innerWidth >= 992) return;
  const toggler = document.getElementsByClassName("navbar-toggler")[0];
  if (!toggler.className.includes("collapsed")) toggler.click();
});

export default router;
