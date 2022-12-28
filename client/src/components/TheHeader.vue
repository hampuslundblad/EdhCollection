<template>
  <div class="header dark ff-serif">
    <router-link class="logo fs-600" to="/">
      <span class="logo light">EdhCollection</span>
    </router-link>
    <router-link
      class="fs-400 logout light ff-serif"
      to="/logout"
      v-if="userStore.isUserLoggedIn"
    >
      <span>Logout</span>
    </router-link>
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
<style scoped>
@import "../assets/base.css";

.header {
  width: 100%;
  height: 3rem;
  background-color: black;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  border: none;
  text-decoration: none;
}
.logout {
  text-decoration: none;
}
</style>
