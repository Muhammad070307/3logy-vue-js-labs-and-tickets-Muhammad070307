<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()

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

    <section class="cart-section">
      <h2>Your cart</h2>

      <p v-if="cart.cartItems.length === 0" class="empty">Your cart is empty.</p>

      <div v-else class="cart-list">
        <div v-for="item in cart.cartItems" :key="item.id" class="cart-row">
          <div>
            <p class="item-title">{{ item.title }}</p>
            <p class="item-meta">Qty: {{ item.quantity }} &times; ${{ item.price }}</p>
          </div>
          <button class="remove-btn" @click="cart.removeFromCart(item.id)">Remove</button>
        </div>
      </div>

      <p class="total">Total: ${{ cart.cartTotal.toFixed(2) }}</p>
    </section>

    <section v-if="!submitted && cart.cartItems.length > 0" class="shipping-section">
      <h2>Shipping details</h2>

      <form @submit.prevent="handleSubmit">
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
    </section>

    <div v-else-if="submitted" class="success">
      <h2>Order placed!</h2>
      <p>Thanks, {{ fullName }} — your order is on its way to {{ address }}.</p>
    </div>
  </main>
</template>

<style scoped>
.checkout {
  max-width: 400px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.cart-section {
  margin-bottom: 1.5rem;
}

.cart-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.item-title {
  margin: 0;
  font-weight: 500;
}

.item-meta {
  margin: 0;
  color: #777;
  font-size: 0.85rem;
}

.remove-btn {
  padding: 0.3rem 0.7rem;
  border: 1px solid #d85a30;
  border-radius: 6px;
  background: none;
  color: #d85a30;
  cursor: pointer;
}

.remove-btn:hover {
  background: #faece7;
}

.total {
  font-weight: bold;
  margin-top: 0.75rem;
  font-size: 1.1rem;
}

.empty {
  color: #777;
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

button[type='submit'] {
  width: 100%;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button[type='submit']:disabled {
  background-color: #a8d8c5;
  cursor: not-allowed;
}

.success {
  background: #eafbea;
  padding: 1rem;
  border-radius: 8px;
}
</style>