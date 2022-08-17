<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>
<script setup>
import Header from "./components/TheHeader.vue";
</script>
<style>
@import "./assets/base.css";
</style>
