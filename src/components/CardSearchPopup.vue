<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <CardSearch/>
            <button class="popup-close" @click="togglePopup() ">Close</button>
        </div>
    </div>
</template>
<script>
import CardSearch from "./CardSearch.vue";
export default{
    props: ["togglePopup"],
    components: { CardSearch }
}
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
    display:flex;
    flex-direction: column;
    background:#FFF;
    padding: 32px;
}
</style>
