<template>
  <div>
    <h1>login</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <br />
    <span class="error">{{ error }}</span>
    <button @click="login">login</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthenticationService from "../services/AuthenticationService";

const email = ref("");
const password = ref("");
const error = ref("");

async function login() {
  try {
    await AuthenticationService.login({
      email: email.value,
      password: password.value,
    });
  } catch (err) {
    error.value = err.response.data.error;
  }
}
</script>
<style scoped>
.error {
  color: red;
}
</style>
