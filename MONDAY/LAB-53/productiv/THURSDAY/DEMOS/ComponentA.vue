<script setup>
// Import the store hook
import { useCounterStore } from './counterStore'

// Connect to the store
const store = useCounterStore()
</script>

<template>
  <div style="border: 2px solid blue; padding: 1rem; margin-bottom: 1rem;">
    <h2>Component A (The Trigger)</h2>
    <p>I have a button that modifies global state.</p>
    
    <!-- Call the action directly from the store -->
    <button @click="store.increment()">Add to Global Counter</button>
  </div>
</template>
