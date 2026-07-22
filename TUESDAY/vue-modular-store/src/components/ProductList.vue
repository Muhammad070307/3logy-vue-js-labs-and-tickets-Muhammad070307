<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProducts } from '../composables/useProducts.js'

const { products, isLoading, error } = useProducts()

// Cart state lives here in the parent
const cart = ref([])

function handleAddToCart(item) {
  cart.value.push(item)
}
</script>

<template>
  <section class="product-list">
    <div class="cart-summary">
      🛒 Items in cart: <strong>{{ cart.length }}</strong>
    </div>

    <p v-if="isLoading">Loading products...</p>

    <p v-else-if="error" class="fallback-note">
      Couldn't reach the live API — showing fallback products instead.
    </p>

    <div v-if="!isLoading" class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.image"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </section>
</template>

<style scoped>
.product-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.cart-summary {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.75rem;
  background: #f0f8f4;
  border-radius: 8px;
  display: inline-block;
}

.fallback-note {
  color: #b26a00;
  font-size: 0.9rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}
</style>