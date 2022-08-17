<template>
  <div class="header dark ff-serif">
    <router-link class="logo fs-600" to="/">
      <span class="logo light">EdhCollection</span>
    </router-link>
  </div>
</template>
<script setup>
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
</style>
