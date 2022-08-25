<template>
  <main class="ff-sans-normal">
    <h1 class="">Hello {{ $route.params.id }}</h1>
    <hr class="divider" />
    <CardSearchPopupButton text="Add card to collection" />
    <div v-if="!isLoading">
      <CollectionTable title="Wanted" :collection="collectionWanted" />
      <CollectionTable title="Have" :collection="collectionHave" />
    </div>
    <div v-else>
      Loading ...
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CollectionTable from "../components/CollectionTable.vue";
import CardSearchPopupButton from "../components/CardSearchButton.vue";
import { useUserStore } from "../stores/user.js";
import CollectionService from "../services/CollectionService.mjs";
const props = defineProps({
  title: String,
});

const userStore = useUserStore();
const userCollection = ref();
const error = ref();
const collectionWanted = ref([]);
const collectionHave = ref([]);
const isLoading = ref(true);
onMounted(async () => {
  const query = { userId: userStore.user };
  try {
    const response = await CollectionService.getAllCollections(query);
    const collectionJSON = JSON.parse(response.data.userCollections);
    userCollection.value = collectionJSON;
    if (collectionJSON[0].name === "wanted") {
      collectionWanted.value = collectionJSON[0].Cards;
      collectionHave.value = collectionJSON[1].Cards;
      isLoading.value = false;
      console.log("from collection", collectionHave.value);
    } else {
      collectionWanted.value = collectionJSON[1].Cards;
      collectionHave.value = collectionJSON[0].Cards;
      isLoading.value = false;
      console.log("from collection", collectionHave.value);
    }
  } catch (err) {
    error.value = err;
    console.log(error.value);
  }
});

const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped>
@import "../assets/base.css";
</style>
