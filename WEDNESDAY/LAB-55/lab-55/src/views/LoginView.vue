<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { globalState } from '../router/index.js'

const router = useRouter()

const email = ref('')
const password = ref('')

const isFormValid = computed(() => {
  return email.value.includes('@') && password.value.length >= 5
})

function handleSubmit() {
  globalState.isAuthenticated = true
  router.push('/admin')
}
</script>

<template>
  <main class="login-page">
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="you@example.com"
        />
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="At least 5 characters"
        />
      </div>

      <button type="submit" :disabled="!isFormValid">
        Log In
      </button>
    </form>
  </main>
</template>

<style scoped>
.login-page {
  max-width: 360px;
  margin: 3rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
}

.field {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #a8d8c5;
  cursor: not-allowed;
}
</style>