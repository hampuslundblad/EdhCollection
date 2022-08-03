<template lang="">
  <div>
    <input v-model="cardInput" type="text" placeholder="search for a card" />
    <button @click="addCard">Add card</button>
  </div>
</template>

<script setup>
import { searchCard } from "../api/searchCard.mjs";
import { ref } from "vue";
const cardInput = ref('')
function addCard() {
  //let result =  await searchCard(name)
  console.log(cardInput.value);
}
</script>

<style scoped></style>
