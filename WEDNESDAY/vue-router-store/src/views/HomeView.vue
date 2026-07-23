<template>
  <main class="home">
    <h1>Welcome to the Store</h1>
    <p>Browse our products and check out when you're ready.</p>
    <RouterLink to="/products" class="cta">Visit the store</RouterLink>
  </main>
</template>

<style scoped>
.home {
  max-width: 500px;
  margin: 3rem auto;
  text-align: center;
}

.cta {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
</style>