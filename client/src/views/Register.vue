<template>
  <div class="layout">
    <div class="register-container">
      <h1>Register</h1>
      <div>
        <v-form autocomplete="off">
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
          <br />
        </v-form>
      </div>
      <span class="error">{{ error }}</span>
      <span class="success">{{ success }}</span>

      <v-btn @click="register" color="primary">Register</v-btn>
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
const success = ref("");
const userStore = useUserStore();
const apiError = ref(false);
async function register() {
  try {
    const response = await AuthenticationService.register({
      email: email.value,
      password: password.value,
    });
    userStore.setUser(response.data.user);
    userStore.setToken(response.data.token);
    success.value = "You've been registered!";
    error.value = "";
  } catch (err) {
    error.value = err.response.data.error;
    success.value = "";
    apiError.value = true;
  }
}
</script>
<style scoped>
@import "../assets/base.css";
.error {
  color: red;
}
.success {
  color: green;
}
.register-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
