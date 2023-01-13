import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/pages/Home.vue";
import About from "/src/pages/About.vue";
import Play from "/src/pages/Play.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/GeoTestVue",
    name: "Production",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;