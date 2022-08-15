import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isUserLoggedIn: false,
    };
  },
  actions : {
    setUserAsLoggedIn(){
        this.isUserLoggedIn = true;
    }
  }
});
