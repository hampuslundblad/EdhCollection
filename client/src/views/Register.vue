<template>
  <div class="layout">
    <div class="register-container">
      <h1>Register</h1>
      <div>
        <form autocomplete="off">
          <input
            type="email"
            name="email"
            placeholder="email"
            v-model="email"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
          />
          <br />
        </form>
      </div>
      <span class="error">{{ error }}</span>
      <button @click="register">Register</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthenticationService from "../services/AuthenticationService";
import { useUserStore } from "../stores/user";
const email = ref("");
const password = ref("");
const error = ref("");
const userStore = useUserStore();

async function register() {
  try {
    await AuthenticationService.register({
      email: email.value,
      password: password.value,
    });
    userStore.setUserAsLoggedIn(); //TODO, code hazard?
  } catch (err) {
    error.value = err.response.data.error;
  }
}
</script>
<style scoped>
@import "../assets/base.css";
.error {
  color: red;
}
.register-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
