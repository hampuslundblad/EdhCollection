<template>
  <div>
    <table id="card">
      <tr>
        <th>Card Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Set</th>
        <th>Foil</th>
      </tr>
      <tr v-for="invoice in invoice_data" :key="invoice" data-test="cardTable">
        <td>{{ invoice.card_name }}</td>
        <td>{{ invoice.quantity }}</td>
        <td>{{ invoice.price }}</td>
        <td>{{ invoice.foil }}</td>
        <td>{{ invoice.set }}</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CollectionService from "../services/CollectionService.mjs";
//    <QuickAddCardInput @update:cardName="addNewRow" />
//     <button @click="addNewRow">Add card to table</button>

onMounted(async () => {
  const query = { userId: 1 };

  const response = await CollectionService.getAllCollections(query);
});

const invoice_data = ref([
  {
    card_name: "Muldrotha, the Gravetide",
    quantity: 1,
    price: "3.29 €",
    set: "Dominaria",
    foil: "true",
  },
]);
const addNewRow = (cardName, price) => {
  invoice_data.value.push({
    card_name: cardName,
    quantity: 1,
    mcm_price: price + " €",
    set: "Kaladesh",
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
