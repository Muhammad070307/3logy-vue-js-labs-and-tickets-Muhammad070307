<script setup>
const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['addToCart'])

function handleAddToCart() {
  emit('addToCart', { id: props.id, title: props.title })
}
</script>

<template>
  <div class="product-card">
    <img :src="image" :alt="title" class="product-image" />
    <h3 class="product-title">{{ title }}</h3>
    <p class="product-price">${{ price }}</p>
    <button @click="handleAddToCart">Add to Cart</button>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.product-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.product-title {
  font-size: 0.95rem;
  margin: 0 0 0.4rem;
  min-height: 2.4em;
}

.product-price {
  font-weight: bold;
  color: #2e7d32;
  margin: 0 0 0.75rem;
}

button {
  padding: 0.4rem 0.9rem;
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