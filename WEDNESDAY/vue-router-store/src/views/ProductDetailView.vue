<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'

const route = useRoute()

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find((p) => p.id === id)
})
</script>

<template>
  <main class="detail">
    <RouterLink to="/products">&larr; Back to products</RouterLink>

    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price }}</p>
      <p>{{ product.description }}</p>
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
</style>