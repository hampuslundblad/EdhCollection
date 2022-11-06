<template>
  <div class="popup">
    <div class="popup-inner">
      <h2>Search for a card</h2>
      <form>
        <p>Collection</p>
        <select v-model="formValues.selectedCollection">
          <option disabled value="">Please select one</option>
          <option>Wanted</option>
          <option>Have</option>
        </select>
        <p>Card Name</p>
        <input v-model="formValues.cardName" placeholder="card name" />
        <p>Quantity</p>
        <input v-model="formValues.quantity" placeholder="quantity" />
        <p>Foil</p>
        <select v-model="formValues.selectedFoil">
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
import { ref } from "vue";
import ScryfallService from "../services/ScryfallService.ts";
import CollectionService from "../services/CollectionService.ts";
import { useUserStore } from "../stores/user";
const formValues = ref({
  cardName: "",
  quantity: "",
  selectedCollection: "Wanted",
  selectedFoil: "No",
});

const userStore = useUserStore();

const emits = defineEmits(["onButtonClick"]);

const handleAddCard = async () => {
  try {
    const response = await ScryfallService.searchCard(
      formValues.value.cardName
    );
    console.log(formValues.value.selectedCollection.toLowerCase());
    await CollectionService.addCard({
      collectionName: formValues.value.selectedCollection.toLowerCase(),
      userId: userStore.user.id,
      card: {
        name: response.name,
        price: response.priceEur,
        set: response.set,
        quantity: formValues.value.quantity,
        foil: formValues.value.selectedFoil,
        imageUrl: response.imageUri,
      },
    });
    emits("onButtonClick");
    handleClosePopup();
  } catch (err) {
    console.log(err);
  }
};
const handleClosePopup = () => {};
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
