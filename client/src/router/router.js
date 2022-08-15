import { createRouter, createWebHistory } from "vue-router";
import UserPage from "../views/UserPageView.vue";
import NotFound from "../views/NotFoundView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import { useUserStore } from "../stores/user";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },

    { path: "/user/:id", name: "User", component: UserPage },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  if (
    // make sure the user is authenticated
    !userStore.isUserLoggedIn &&
    // Avoid an infinite redirect
    to.name !== "Login"
  ) {
    // redirect the user to the login page
    return { name: "Login" };
  }
});
