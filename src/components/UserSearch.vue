<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const username = ref("")

    function goToUserPage(){
        console.log(username)
        router.push("/user/ " + username.value)
    }
</script>
<template>
    <div class="input-gr mb-3">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
            aria-describedby="basic-addon1" v-model="username" v-on:keyup.enter="goToUserPage">
    </div>
    <button @click="goToUserPage" type="button" class="btn btn-primary">Search</button>
</template>