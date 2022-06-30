<template>
    <button @click="addNewRow"> Add card to table </button>
    <table id="card">
        <tr>
            <th>Card Name</th>
            <th>Quantity</th>
            <th>MCM Price trend</th>
            <th>Set</th>
        </tr>
        <tr v-for="invoice in invoice_data" :key="invoice">
            <td>{{ invoice.card_name }}</td>
            <td> {{ invoice.quantity }} </td>
            <td>{{ invoice.mcm_price }}</td>
            <td> {{ invoice.set }} </td>
        </tr>

    </table>
</template>
<script setup>
import { ref } from 'vue';
const invoice_data = ref([{
    card_name: 'Muldrotha, the Gravetide',
    quantity: 1,
    mcm_price: '3.29 €',
    set: 'Dominaria'
}])
const addNewRow = () => {
    invoice_data.value.push({
        card_name: 'New card!',
        quantity: 100,
        mcm_price: '13.37 €',
        set: 'Kaladesh'
    })
    console.log(invoice_data)
}
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
    background-color: #04AA6D;
    color: white;
}
</style>