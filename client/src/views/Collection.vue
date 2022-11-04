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
const userCollection = ref();
const error = ref();
const collectionWanted = ref([]);
const collectionHave = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  await loadCollection();
});
async function updateCollection() {
  console.log("emitted trigger");
  await loadCollection();
}

async function loadCollection() {
  try {
    const collection = await fetchCollection();
    parseAndSetCollectionvalues(collection);
    isLoading.value = false;
  } catch (err) {
    error.value = err;
    console.log(error.value);
  }
}
async function fetchCollection() {
  const query = { userId: userStore.user.id };
  const response = await CollectionService.getAllCollections(query);
  const collectionJSON = JSON.parse(response.data.userCollections);
  return collectionJSON;
}
async function parseAndSetCollectionvalues(collection) {
  userCollection.value = collection;
  if (collection[0].name === "wanted") {
    collectionWanted.value = collection[0].Cards;
    collectionHave.value = collection[1].Cards;
  } else {
    collectionWanted.value = collection[1].Cards;
    collectionHave.value = collection[0].Cards;
  }
}

const popupTrigger = ref({
  buttonTrigger: false,
  timedTrigger: false,
});
const togglePopup = async (trigger) => {
  popupTrigger.value[trigger] = !popupTrigger.value[trigger];
  console.log("toggled");
};
</script>
<style scoped>
@import "../assets/base.css";
</style>
