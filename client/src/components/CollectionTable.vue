<template>
  <div>
    <h1>{{ props.title }}</h1>
    <div class="image-hover">Hello</div>
    <v-table id="cardTable">
      <thead>
        <tr>
          <th class="text-left">Card Name</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Price</th>
          <th class="text-left">Set</th>
          <th class="text-left">Foil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in props.collection" :key="card" data-test="cardTable">
          <td>{{ card.name }}</td>
          <td>{{ card.quantity }}</td>
          <td>{{ card.price + " €" }}</td>
          <td>{{ card.set }}</td>
          <td>{{ card.foil }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  collection: { type: Array, required: true },
});
</script>
<style scoped>
.row:hover .image-hover {
  display: block;
}
.image-hover {
  display: none;
}

#cardTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#cardTable td,
#cardTable th {
  padding: 8px;
}

#cardTable tr:nth-child(even) {
  background-color: #f2f2f2;
}

#cardTable tr:hover {
  background-color: #ddd;
}

#cardTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #08a12b;
  color: white;
}
</style>
