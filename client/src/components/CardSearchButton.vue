<template>
  <div>
    <button @click="() => togglePopup('buttonTrigger')">
      {{ props.text }}
    </button>
    <CardSearchPopup
      v-if="popupTrigger.buttonTrigger"
      @onButtonClick="togglePopup('buttonTrigger')"
    >
    </CardSearchPopup>
  </div>
</template>
<script setup>
import CardSearchPopup from "./CardSearchButtonPopup.vue";
import { ref } from "vue";

const props = defineProps({
  text: String,
});
const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped></style>
