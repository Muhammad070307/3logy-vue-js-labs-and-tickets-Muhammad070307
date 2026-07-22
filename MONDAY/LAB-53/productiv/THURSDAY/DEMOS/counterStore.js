import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// This is a "Setup Store". It looks exactly like a Vue component's <script setup>!
export const useCounterStore = defineStore('counter', () => {
  // 1. STATE (Just use 'ref')
  const count = ref(0)
  
  // 2. GETTERS (Just use 'computed')
  const doubleCount = computed(() => count.value * 2)
  
  // 3. ACTIONS (Just use regular functions)
  function increment() {
    count.value++
  }

  // 4. RETURN (You must return what you want the app to access)
  return { count, doubleCount, increment }
})
