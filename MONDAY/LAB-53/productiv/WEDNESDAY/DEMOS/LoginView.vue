<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { globalState } from '../router/index'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

// Computed property validates the form reactively
const isFormValid = computed(() => {
  return email.value.includes('@') && password.value.length >= 6
})

function submitForm() {
  if (!isFormValid.value) {
    error.value = "Invalid email or password too short."
    return
  }
  
  // Simulate successful login
  globalState.isAuthenticated = true
  
  // Programmatic navigation to the protected route
  router.push('/admin')
}
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 2rem; max-width: 400px;">
    <h2>Admin Login</h2>
    <!-- .prevent modifier stops the browser from reloading the page! -->
    <form @submit.prevent="submitForm">
      <div style="margin-bottom: 1rem;">
        <input v-model="email" type="email" placeholder="Email" style="width: 100%; padding: 0.5rem;" />
      </div>
      <div style="margin-bottom: 1rem;">
        <input v-model="password" type="password" placeholder="Password" style="width: 100%; padding: 0.5rem;" />
      </div>
      
      <p v-if="error" style="color: red;">{{ error }}</p>
      
      <!-- Button is disabled automatically until validation passes -->
      <button :disabled="!isFormValid" style="width: 100%; padding: 0.5rem;">
        Login
      </button>
    </form>
  </div>
</template>
