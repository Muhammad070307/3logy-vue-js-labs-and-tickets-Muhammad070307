<script setup>
import ProductList from './components/ProductList.vue'
</script>

<template>
  <header class="app-header">
    <h1>Product Listing</h1>
  </header>
  <ProductList />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: sans-serif;
}

.app-header {
  text-align: center;
  padding: 1.5rem 0 0.5rem;
}
</style>