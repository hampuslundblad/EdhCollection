<template>
  <button @click = handleOnClick() >{{ props.buttonText }}</button>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  buttonText: String,
});
const emits = defineEmits(["onButtonClick"]);
const handleOnClick = () => {
    emits('onButtonClick')
}
</script>
