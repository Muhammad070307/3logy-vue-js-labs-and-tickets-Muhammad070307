import { ref } from 'vue'

// Hardcoded fallback in case the Fake Store API is unreachable
const fallbackProducts = [
  { id: 1, title: 'Laptop Pro', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Wireless Mouse', price: 29, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'USB-C Hub', price: 49, image: 'https://via.placeholder.com/150' },
]

export function useProducts() {
  const products = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  async function fetchProducts() {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('https://fakestoreapi.com/products')

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      products.value = data
    } catch (err) {
      // API unavailable — fall back to hardcoded data
      console.warn('Fake Store API unavailable, using fallback products:', err.message)
      error.value = err.message
      products.value = fallbackProducts
    } finally {
      isLoading.value = false
    }
  }

  // Kick off the fetch as soon as the composable is used
  fetchProducts()

  return {
    products,
    isLoading,
    error,
    fetchProducts
  }
}