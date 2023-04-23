import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isUserLoggedIn: false,
      token: JSON.parse(localStorage.getItem("token")),
      user: JSON.parse(localStorage.getItem("user")),
      userName: "default user",
    };
  },
  actions: {
    setToken(token) {
      this.token = token;
      this.isUserLoggedIn = !!token;
      localStorage.setItem("token", JSON.stringify(token));
    },
    setUser(user) {
      this.user = user;
      this.isUserLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});
