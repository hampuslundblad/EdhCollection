<template>
  <div class="header fs-600 dark ff-serif">
    <router-link class="logo" to="/">
      <span class="logo light">EdhCollection</span>
    </router-link>
  </div>
</template>
<script setup></script>
<style scoped>
@import "../assets/base.css";

.header {
  width: 100%;
  height: 3rem;
  background-color: black;
  padding: 0.5rem;
}
.logo {
  border: none;
  text-decoration: none;
}
</style>
