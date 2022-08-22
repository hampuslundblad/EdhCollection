<template>
  <div class="popup">
    <div class="popup-inner">
      <h2>Search for a card</h2>
      <form>
        <p>Collection</p>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Wanted</option>
          <option>Have</option>
        </select>
        <p>Card Name</p>
        <input v-model="cardName" placeholder="card name" />
        <p>Quantity</p>
        <input v-model="quantity" placeholder="quantity" />
        <p>Foil</p>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </form>
      <button class="popup-close" @click="togglePopup()">Add card</button>
      <button class="popup-close" @click="togglePopup()">Close</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["togglePopup"],
};
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 32px;
}
</style>
