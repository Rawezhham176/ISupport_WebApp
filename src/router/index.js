import { createRouter, createWebHashHistory } from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Support from "../views/Support.vue";
import Blog from "../views/Blog.vue";
import Chat from "../views/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
