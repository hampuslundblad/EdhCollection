import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  actions : {
    setAsLoggedIn(){
        this.isLoggedIn = true;
    }
  }
});
