<template>
  <div class="layout">
    <div class="login-container">
      <h1 class="ff-serif">Login</h1>
      <v-alert v-if="apiError" class="error" type="error">{{ error }}</v-alert>

      <v-form>
        <v-text-field
          type="email"
          name="email"
          placeholder="email"
          v-model="email"
        />
        <br />
        <v-text-field
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
        />
      </v-form>
      <br />
      <v-btn class="button__login" color="primary" @click="login">Login</v-btn>
      <v-btn variant="outlined" color="secondary" @click="toRegister"
        >Register</v-btn
      >
    </div>
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
const apiError = ref(false);
const userStore = useUserStore();

function toRegister() {
  router.push("register");
}

async function login() {
  try {
    const response = await AuthenticationService.login({
      email: email.value,
      password: password.value,
    });
    console.log(response);
    userStore.setUser(response.data.user);
    userStore.setToken(response.data.token);
    router.push("/user");
  } catch (err) {
    console.log("ERROR", err);
    apiError.value = true;
    error.value = err.response.data.error;
  }
}
</script>
<style scoped>
@import "../assets/base.css";
.error {
  margin: 1rem 0 1rem 0;
}
.link {
  text-decoration: none;
}
.button__login {
  margin-bottom: 0.5rem;
}
.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
