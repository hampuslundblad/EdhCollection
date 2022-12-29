<template>
  <div class="layout">
    <div class="register-container">
      <h1>Register</h1>
      <v-alert
        v-if="success"
        color="success"
        class="alert__success"
        text="You have been registered"
      />
      <v-alert v-if="apiError" color="error" class="error">{{ error }}</v-alert>

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

      <v-btn @click="register" color="primary">Register</v-btn>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthenticationService from "../services/AuthenticationService";
import { useUserStore } from "../stores/user";
let email = ref("");
let password = ref("");
let error = ref(
  "The password provided failed to match the following rules: 1. It must contain ONLY the following characters: lower case, upper case, numerics. 2. It must be at least 8 chracters in length and not greater than 32"
);
let success = ref(false);
const userStore = useUserStore();
let apiError = ref(false);

async function register() {
  try {
    const response = await AuthenticationService.register({
      email: email.value,
      password: password.value,
    });
    userStore.setUser(response.data.user);
    userStore.setToken(response.data.token);
    success.value = true;
    apiError.value = false;
    error.value = "";
    router.push("/login");
  } catch (err) {
    success.value = false;
    apiError.value = true;
    console.log(error.value);
  }
}
</script>
<style scoped>
@import "../assets/base.css";
.error {
  color: red;
}
.alert_success {
  margin: 0.5rem 1rem 0.5rem 0;
}
.register-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
}
</style>
