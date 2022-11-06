<template>
  <div>
    <h1>{{ props.title }}</h1>
    <table id="card">
      <tr>
        <th>Card Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Set</th>
        <th>Foil</th>
      </tr>
      <tr v-for="card in props.collection" :key="card" data-test="cardTable">
        <td>{{ card.name }}</td>
        <td>{{ card.quantity }}</td>
        <td>{{ card.price + " €" }}</td>
        <td>{{ card.set }}</td>
        <td>{{ card.foil }}</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  collection: { type: Array, required: true },
});
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
