<template>
    <div>
        <h1 class="text-center">Головна сторінка</h1>
        <div>
            <router-link to="/users">Список користувачів</router-link>
            <br />
            <router-link to="/user/5">Користувач 5</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>