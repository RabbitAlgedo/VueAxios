<template>
    <div class="container">
        <h1 class="text-center py-2">User List</h1>
        <User v-for="user of users" :key="user.id" v-bind:user="user" />
    </div>
</template>

<script>
    import User from "@/components/User";
    export default {
        name: "UsersList",
        components: {User},
        data() {
            return {
                users: ''
            }
        },
        mounted() {
            this.$axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => (this.users = response.data));
        }
    }
</script>

<style scoped>

</style>