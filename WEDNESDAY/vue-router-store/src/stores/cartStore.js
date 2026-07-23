import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // STATE
  const cartItems = ref([])

  // GETTERS
  const cartTotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const itemCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  // ACTIONS
  function addToCart(product) {
    const existing = cartItems.value.find((item) => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cartItems.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      })
    }
  }

  function removeFromCart(id) {
    cartItems.value = cartItems.value.filter((item) => item.id !== id)
  }

  return { cartItems, cartTotal, itemCount, addToCart, removeFromCart }
})