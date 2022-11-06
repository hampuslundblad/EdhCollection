<template>
  <div>
    <button @click="() => togglePopup('buttonTrigger')">
      {{ props.text }}
    </button>
    <CardSearchPopup
      v-if="popupTrigger.buttonTrigger"
      @onAddCard="addCard()"
      @onClose="() => togglePopup('buttonTrigger')"
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
const emit = defineEmits(["onAddCard"]);

const popupTrigger = ref({
  buttonTrigger: false,
});
const addCard = () => {
  console.log("add");
  togglePopup("buttonTrigger");
  emit("onAddCard");
};
const togglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped></style>
