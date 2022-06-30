<template>
    <main class="ff-sans-normal">
        <h1 class="">Hello {{ $route.params.id }} </h1>
        <hr class="divider"/>
        <h3> Collection </h3>
        <button @click="() => togglePopup('buttonTrigger')"  > Add card </button>
        <CardSearchPopup v-if="popupTrigger.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')">
            <h2> Search for a card </h2>
        </CardSearchPopup>
    </main>

</template>
<script setup>
import CardSearchPopup from '../components/CardSearchPopup.vue'
import {ref } from 'vue'

const popupTrigger = ref({
    buttonTrigger : false,
    timedTrigger : false
})
const togglePopup = (trigger) => {
    popupTrigger.value[trigger] = !popupTrigger.value[trigger]
}

</script>
<style scoped>
@import '../assets/base.css';



</style>