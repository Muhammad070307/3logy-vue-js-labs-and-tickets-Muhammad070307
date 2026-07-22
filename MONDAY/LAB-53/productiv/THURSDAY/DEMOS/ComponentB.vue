<script setup>
// Import the store hook
import { useCounterStore } from './counterStore'

// Connect to the store
const store = useCounterStore()
</script>

<template>
  <div style="border: 2px solid green; padding: 1rem;">
    <h2>Component B (The Display)</h2>
    <p>I am completely disconnected from Component A, but I can read the same state.</p>
    
    <!-- Read the state and getter directly from the store -->
    <h1>Global Count: {{ store.count }}</h1>
    <h3>Double Count: {{ store.doubleCount }}</h3>
  </div>
</template>
