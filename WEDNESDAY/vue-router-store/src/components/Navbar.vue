<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/checkout" class="cart-link">
        Checkout
        <span class="badge">{{ cart.itemCount }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

nav a.router-link-active {
  color: #42b883;
}

.cart-link {
  display: flex;
  align-items: center;
  gap: 6px;
}

.badge {
  background: #42b883;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 7px;
  border-radius: 999px;
}
</style>