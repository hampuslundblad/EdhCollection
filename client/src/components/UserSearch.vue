<template>
  <div>
    <div class="input-gr mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="username"
        v-on:keyup.enter="goToUserPage"
      />
    </div>
    <button @click="goToUserPage" type="button" class="btn btn-primary">
      Search
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");

function goToUserPage() {
  router.push("/user/ " + username.value);
}
</script>
