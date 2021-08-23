<template>
    <div class="container">
        <h1 class="text-center py-2">User List</h1>
        <div v-if="spin" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <User v-else v-for="user of users" :key="user.id" v-bind:user="user" />
    </div>
</template>

<script>
    import User from "@/components/User";
    export default {
        name: "UsersList",
        components: {User},
        data() {
            return {
                users: '',
                spin: false
            }
        },
        mounted() {
            this.spin = true
            this.$axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users = response.data;
                    this.spin  = false;
                });
        }
    }
</script>

<style scoped>

</style>