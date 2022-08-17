import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isUserLoggedIn: false,
      token: null,
      user: null,
    };
  },
  actions: {
    setUserAsLoggedIn() {
      this.isUserLoggedIn = true;
    },
    setToken(token) {
      this.token = token;
      this.isUserLoggedIn = !!token;
    },
    setUser(user) {
      this.user = user;
      this.isUserLoggedIn = true;

    },
  },
});
