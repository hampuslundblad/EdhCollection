<template>
  <main class="ff-sans-normal">
    <h1 class="">Hello {{ $route.params.id }}</h1>
    <hr class="divider" />
    <CardSearchPopupButton text="Add card to collection" />
    <CollectionTable title="Wanted" />
    <CollectionTable title="Have" />
  </main>
</template>
<script setup>
import { ref } from "vue";
import CollectionTable from "../components/CollectionTable.vue";
import CardSearchPopupButton from "../components/CardSearchButton.vue";

const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped>
@import "../assets/base.css";
</style>
