<script setup>
import { ref, computed } from 'vue'

const fullName = ref('')
const address = ref('')
const cardNumber = ref('')
const submitted = ref(false)

const isFormValid = computed(() => {
  return (
    fullName.value.trim().length > 0 &&
    address.value.trim().length >= 10 &&
    cardNumber.value.trim().length === 16
  )
})

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <main class="checkout">
    <h1>Checkout</h1>

    <form v-if="!submitted" @submit.prevent="handleSubmit">
      <div class="field">
        <label for="fullName">Full name</label>
        <input id="fullName" type="text" v-model="fullName" placeholder="Jane Doe" />
      </div>

      <div class="field">
        <label for="address">Address</label>
        <input
          id="address"
          type="text"
          v-model="address"
          placeholder="At least 10 characters"
        />
      </div>

      <div class="field">
        <label for="cardNumber">Credit card number</label>
        <input
          id="cardNumber"
          type="text"
          v-model="cardNumber"
          placeholder="Exactly 16 characters"
          maxlength="16"
        />
      </div>

      <button type="submit" :disabled="!isFormValid">Place order</button>
    </form>

    <div v-else class="success">
      <h2>Order placed!</h2>
      <p>Thanks, {{ fullName }} — your order is on its way to {{ address }}.</p>
    </div>
  </main>
</template>

<style scoped>
.checkout {
  max-width: 360px;
  margin: 2rem auto;
  padding: 0 1rem;
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

.success {
  background: #eafbea;
  padding: 1rem;
  border-radius: 8px;
}
</style>