<template>
    <div>
        <h1>{{ user.name }} - <small class="text-muted">{{ user.username }} ({{ user.id }})</small></h1>
        <div>
            <div><span>{{user.phone}}</span></div>
            <div><span>{{user.email}}</span></div>
            <div><span>{{user.website}}</span></div>
            <div class="my-3">
                <h3>Address</h3>
                <div><span>{{user.address.city}}</span></div>
                <small>{{user.address.street}}</small>
                <small>{{user.address.suite}}</small>
                <small>{{user.address.zipcode}}</small>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AloneUser",
        props: ['id'],
        data() {
            return {
                user: ''
            }
        },
        mounted() {
            this.$axios
                .get('https://jsonplaceholder.typicode.com/users/' + this.id)
                .then(response => (this.user = response.data));
        }
    }
</script>