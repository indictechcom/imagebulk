import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Support from "../views/Support.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/support",
    component: Support,
    beforeEnter: (to, from, next) => { window.location.href = 'https://meta.wikimedia.org/wiki/Indic-TechCom/Tools/Imagebulk' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
