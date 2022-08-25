<template>
  <div class="popup">
    <div class="popup-inner">
      <h2>Search for a card</h2>
      <form>
        <p>Collection</p>
        <select v-model="selectedCollection">
          <option disabled value="">Please select one</option>
          <option>Wanted</option>
          <option>Have</option>
        </select>
        <p>Card Name</p>
        <input v-model="cardName" placeholder="card name" />
        <p>Quantity</p>
        <input v-model="quantity" placeholder="quantity" />
        <p>Foil</p>
        <select v-model="selectedFoil">
          <option disabled value="">Please select one</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </form>
      <button class="popup-close" @click="handleAddCard()">Add card</button>
      <button class="popup-close" @click="handleClosePopup()">Close</button>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import BaseEmitButton from "./BaseEmitButton.vue";
import ScryfallService from "../services/ScryfallService.mjs";
import CollectionService from "../services/CollectionService.mjs";
import { useUserStore } from "../stores/user";
const cardName = ref("");
const quantity = ref("");
const selectedCollection = ref("Wanted");
const selectedFoil = ref("No");
const userStore = useUserStore();

const emits = defineEmits(["onButtonClick"]);
const handleAddCard = async () => {
  try {
    const response = await ScryfallService.searchCard(cardName);
    const responseCard = response.data.data[0];
    await CollectionService.addCard({
      collectionId: "1",
      userId: "1",
      card: {
        name: responseCard.name,
        price: "123",
        set: responseCard.set,
        quantity: quantity.value,
        foil: selectedFoil.value,
        imageUrl: responseCard.image_uris.normal,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
const handleClosePopup = () => {
  emits("onButtonClick");
};
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 32px;
}
</style>
