<template>
  <main class="ff-sans-normal">
    <h1 class="">Welcome to EdhCollection {{ userStore.user.email }}!</h1>
    <hr class="divider" />
    <CardSearchPopupButton
      text="Add card to collection"
      @onAddCard="updateCollection"
    />
    <div v-if="!isLoading">
      <CollectionTable title="Wanted" :collection="collectionWanted" />
      <CollectionTable title="Have" :collection="collectionHave" />
    </div>
    <div v-else>Loading ...</div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CollectionTable from "../components/CollectionTable.vue";
import CardSearchPopupButton from "../components/CardSearchButton.vue";
import { useUserStore } from "../stores/user.js";
import CollectionService from "../services/CollectionService.ts";
const props = defineProps({
  title: String,
});

const userStore = useUserStore();
const error = ref();
const collectionWanted = ref([]);
const collectionHave = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await loadCollection();
});
async function updateCollection() {
  await loadCollection();
}

async function loadCollection() {
  try {
    const { haveCollection, wantedCollection } = await fetchCollections();
    collectionHave.value = haveCollection.Cards;
    collectionWanted.value = wantedCollection.Cards;
    isLoading.value = false;
  } catch (err) {
    error.value = err;
    console.log(error.value);
  }
}
async function fetchCollections() {
  const query = { userId: userStore.user.id };
  const response = await CollectionService.getAllCollections(query);
  const haveCollectionJson = JSON.parse(response.data.haveCollection);
  const wantedCollectionJson = JSON.parse(response.data.wantedCollection);
  console.log(wantedCollectionJson);
  console.log(haveCollectionJson);
  return {
    haveCollection: haveCollectionJson,
    wantedCollection: wantedCollectionJson,
  };
}

const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = async (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
};
</script>
<style scoped>
@import "../assets/base.css";
</style>
