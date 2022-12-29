<template>
  <div class="form__add-card">
    <h2>Search for a card</h2>
    <v-alert v-if="apiError" color="error">
      Something went wrong when adding your card, please try again
      later.</v-alert
    >
    <v-alert v-if="notFound" color="error">
      Sorry, we could not find a card with that name.</v-alert
    >
    <v-form>
      <p>Collection</p>
      <v-select
        :items="['Wanted', 'Have']"
        v-model="formValues.selectedCollection"
      >
      </v-select>
      <p>Card Name</p>
      <v-text-field v-model="formValues.cardName" placeholder="Card name" />
      <p>Quantity</p>
      <v-text-field v-model="formValues.quantity" placeholder="Quantity" />
      <p>Foil</p>
      <v-select :items="['Yes', 'No']" v-model="formValues.selectedFoil">
      </v-select>
    </v-form>
    <v-btn color="primary" class="button__add" @click="handleAddCard()"
      >Add card</v-btn
    >
    <v-btn color="error" class="button__close" @click="$emit('onClose')"
      >Close</v-btn
    >
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
const notFound = ref(false);
const apiError = ref(false);

const userStore = useUserStore();

const emits = defineEmits(["onAddCard", "onClose"]);

const handleAddCard = async () => {
  const cardInfo = await getCardInformation(formValues.value.cardName);
  if (cardInfo) {
    await addCardToDatatbase(cardInfo);
    emits("onAddCard");
    emits("onClose");
  }
};

const getCardInformation = async (cardName) => {
  const formInfo = getFormValues();
  const scryfallInfo = await getCardInformationScryfall(cardName);
  if (!scryfallInfo) {
    return undefined;
  }
  const cardInfo = { ...formInfo, ...scryfallInfo };

  return { ...formInfo, ...scryfallInfo };
};
const getCardInformationScryfall = async (cardName) => {
  try {
    const { priceEurFoil, priceEur, name, set, imageUri, status } =
      await ScryfallService.searchCard(cardName);
    if (status == 404) {
      notFound.value = true;
      return undefined;
    }
    console.log(set);
    return {
      priceEurFoil: priceEurFoil,
      priceEur: priceEur,
      name: name,
      set: set,
      imageUri: imageUri,
    };
  } catch (error) {
    if (error.response.status == 404) {
      notFound.value = true;
    } else {
      apiError.value = true;
    }
  }
  return undefined;
};
const getFormValues = () => {
  return {
    name: formValues.value.cardName,
    collectionName: formValues.value.selectedCollection.toLowerCase(),
    quantity: formValues.value.quantity,
    foil: formValues.value.selectedFoil,
  };
};

const addCardToDatatbase = async (cardInfo) => {
  let price;
  if (formValues.value.selectedFoil === "Yes") {
    price = cardInfo.priceEurFoil;
  } else {
    price = cardInfo.priceEur;
  }
  try {
    const response = await CollectionService.addCard({
      collectionName: cardInfo.collectionName,
      userId: userStore.user.id,
      card: {
        name: cardInfo.name,
        price: price,
        set: cardInfo.set,
        quantity: cardInfo.quantity,
        foil: cardInfo.foil,
        imageUrl: cardInfo.imageUri,
      },
    });
  } catch (error) {
    apiError.value = true;
  }
};
</script>
<style scoped>
.form__add-card {
  width: 40%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 32px;
}
.button__add {
  margin-bottom: 0.5rem;
}
</style>
