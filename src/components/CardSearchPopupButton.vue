<template>
  <div>
    <button @click="() => togglePopup('buttonTrigger')">Add card</button>
     <CardSearchPopup
    v-if="popupTrigger.buttonTrigger"
    :togglePopup="() => togglePopup('buttonTrigger')"
  >
    <h2>Search for a card</h2>
  </CardSearchPopup>
  </div>
</template>
<script setup>
import CardSearchPopup from "./CardSearchPopup.vue";
import { ref } from "vue";

const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped></style>
