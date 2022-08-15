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
import { ref } from "vue";
//import searchCard from "../services/searchCard";
import CardSerivce from "../services/CardService";

defineProps(["cardName"]);
const emit = defineEmits(["update:cardName"]);

const cardInput = ref("");
async function addCard() {
  let result = await CardSerivce.searchCard(cardInput.value);
  emit("update:cardName", result.card_name, result.price);
}
</script>

<style scoped></style>
