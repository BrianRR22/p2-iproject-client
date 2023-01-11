import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Talent from "../views/Talent.vue";
import Favorite from "../views/Favorite.vue";
import Detail from "../views/Detail.vue";
import Spotify from "../views/Spotify.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/talent",
      name: "talent",
      component: Talent,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: Favorite,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },
    {
      path: "/songs/:id",
      name: "songs",
      component: Spotify,
    },
  ],
});

export default router;
