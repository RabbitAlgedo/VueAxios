<template>
    <div class="p-2 my-2 border rounded d-flex justify-content-between">
        <div>
            <span>{{ user.name }}</span>
            <div class="text-muted"><small>{{ user.email }}</small></div>
        </div>
        <div>
            <router-link :to="{name: 'AloneUser', params: { id: user.id }}" v-bind:aloneuser="user"><i class="bi bi-three-dots" style="font-size: 2rem;"></i></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>