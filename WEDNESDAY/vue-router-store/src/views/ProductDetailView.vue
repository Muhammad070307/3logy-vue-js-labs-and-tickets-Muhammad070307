<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'
import { useCartStore } from '../stores/cartStore'

const route = useRoute()
const cart = useCartStore()

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find((p) => p.id === id)
})

function handleAddToCart() {
  if (product.value) {
    cart.addToCart(product.value)
  }
}
</script>

<template>
  <main class="detail">
    <RouterLink to="/products">&larr; Back to products</RouterLink>

    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button @click="handleAddToCart">Add to cart</button>
    </div>
    <div v-else>
      <h1>Product not found</h1>
      <p>We couldn't find a product with that ID.</p>
    </div>
  </main>
</template>

<style scoped>
.detail {
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.price {
  color: #2e7d32;
  font-weight: bold;
  font-size: 1.2rem;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}
</style>