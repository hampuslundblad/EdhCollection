<template>
  <div class="layout">
    <div class="login-container">
      <h1 class="ff-serif">Login</h1>
      <form>
        <input type="email" name="email" placeholder="email" v-model="email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
        />
      </form>
      <br />
      <span class="error">{{ error }}</span>
      <button @click="login">Login</button>
    </div>
    <router-link to="Register"> <button>Register</button></router-link>
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

async function login() {
  try {
    const response = await AuthenticationService.login({
      email: email.value,
      password: password.value,
    });
    userStore.setUser(response.data.user);
    userStore.setToken(response.data.token);
    router.push("/user/ " + email.value);
  } catch (err) {
    console.log("ERROR", err);
    error.value = err.response.data.error;
  }
}
</script>
<style scoped>
@import "../assets/base.css";
.error {
  color: red;
}
.login-btn {
}
.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
