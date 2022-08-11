import { createRouter, createWebHistory } from "vue-router";
import UserPage from "../views/UserPage.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home" , component: Login },
    { path: "/register", name: "Register", component: Register },

    { path: "/user/:id", name: "User", component: UserPage },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
