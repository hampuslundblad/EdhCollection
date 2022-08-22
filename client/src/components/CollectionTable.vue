<template>
  <div>
    <h1>{{props.title}}</h1>
    <table id="card">
      <tr>
        <th>Card Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Set</th>
        <th>Foil</th>
      </tr>
      <tr v-for="card in userCollection" :key="card" data-test="cardTable">
        <td>{{ card.name }}</td>
        <td>{{ card.quantity }}</td>
        <td>{{ card.price }}</td>
        <td>{{ card.foil }}</td>
        <td>{{ card.set }}</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import CollectionService from "../services/CollectionService.mjs";
import { useUserStore } from "../stores/user.js";

const props = defineProps({
  title: String
})

const userStore = useUserStore();
const userCollection = ref();
const error = ref();
onMounted(async () => {
  const query = { userId: userStore.user };
  try {
    const response = await CollectionService.getAllCollections(query);
    const collectionJSON = JSON.parse(response.data.userCollections);
    userCollection.value = collectionJSON[0].Cards;
  } catch (err) {
    error.value = err;
    console.log(error.value);
  }
});

const addNewRow = (cardName, price) => {
  invoice_data.value.push({
    card_name: cardName,
    quantity: 1,
    mcm_price: price + " €",
    set: "Kaladesh",
    foil: "true",
  });
};
</script>
<style scoped>
#card {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#card td,
#card th {
  border: 1px solid #ddd;
  padding: 8px;
}

#card tr:nth-child(even) {
  background-color: #f2f2f2;
}

#card tr:hover {
  background-color: #ddd;
}

#card th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
