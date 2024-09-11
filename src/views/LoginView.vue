<script setup>
import { isAuthenticated } from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const data = ref({
    username: '',
    password: ''
})

const router = useRouter();

const login = () => {
    if (data.value.username === "testuser" && data.value.password === "Password123!") {
        isAuthenticated.value = true
        router.push("/about")
    } else {
        isAuthenticated.value = false;
        console.log('Invalid credentials');
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="login" class="w-100 mx-auto form-container mt-5 p-5 border">
            <div v-if="!isAuthenticated" class="text-danger">Not logged in</div>
            <div class="mb-3">
                <label for="usernameInput" class="form-label">Username</label>
                <input type="text" class="form-control" id="usernameInput" v-model="data.username">
            </div>
            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password</label>
                <input type="password" class="form-control" id="passwordInput" v-model="data.password">
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<style>
    .form-container {
        max-width: 60%;
    }
</style>
