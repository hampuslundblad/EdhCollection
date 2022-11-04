import { createRouter, createWebHistory } from "vue-router";
import Collection from "../views/Collection.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { useUserStore } from "../stores/user";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },

    { path: "/user", name: "Collection", component: Collection },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
