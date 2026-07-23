<script setup>
import { products } from '../data/products.js'
</script>

<template>
  <main class="products">
    <h1>Products</h1>

    <div class="grid">
      <RouterLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="card"
      >
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.products {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.card {
  display: block;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  background: #fff;
}

.card:hover {
  border-color: #42b883;
}

.price {
  color: #2e7d32;
  font-weight: bold;
}
</style>