import { ref, watchEffect } from 'vue'

export function useFetch(urlRef) {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(true)

  watchEffect(async () => {
    isLoading.value = true
    try {
      const response = await fetch(urlRef.value)
      if (!response.ok) throw new Error('Network response was not ok')
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  })

  return { data, error, isLoading }
}
