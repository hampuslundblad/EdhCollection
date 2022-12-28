<template>
  <div class="layout">
    <h1 class="ff-serif fs-600">You have been logged out</h1>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthenticationService from "../services/AuthenticationService";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");
const userStore = useUserStore();
</script>
<style scoped>
@import "../assets/base.css";
.error {
  color: red;
}
.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
