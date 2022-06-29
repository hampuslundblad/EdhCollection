<script>
import UserSearch from '../components/UserSearch.vue'

export default {
    components: {
        UserSearch
    }
}
</script>

<template>
    <main>
        <h1> Welcome to EdhCollection </h1>
        <h3> Input your username to see your collection</h3>
        <div class="search-container">
            <UserSearch />
        </div>
    </main>
</template>

<style scoped >
.search-container {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
</style>
