<template lang="">
  <div>
    <input
      v-model="cardInput"
      type="text"
      placeholder="search for a card"
      v-on:keyup.enter="addCard"
    />
    <button @click="addCard">Add card</button>
  </div>
</template>

<script setup>
import { searchCard } from "../api/searchCard.mjs";
import { ref } from "vue";

defineProps(["cardName"]);
const emit = defineEmits(["update:cardName"]);

const cardInput = ref("");
async function addCard() {
  let result = await searchCard(cardInput.value);
  emit("update:cardName", result.card_name, result.price);
}
</script>

<style scoped></style>
