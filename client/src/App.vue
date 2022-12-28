<template>
  <v-layout>
    <v-main>
      <Header></Header>

      <router-view />
    </v-main>
  </v-layout>
</template>
<script setup>
import Header from "./components/TheHeader.vue";
</script>
<style>
@import "./assets/base.css";
</style>
