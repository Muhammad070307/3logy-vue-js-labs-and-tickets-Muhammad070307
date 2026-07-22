<script setup>
import { ref, reactive } from 'vue'

// Primitives use 'ref' (Compare to React's useState)
const count = ref(0)

// Objects can use 'reactive'
const user = reactive({ name: 'Alice', role: 'Admin' })

function increment() {
  count.value++ // Notice the .value!
}
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1rem;">
    <h2>Demo 1: Reactivity Basics</h2>
    <h3>Counter: {{ count }}</h3>
    <button @click="increment">Add</button>
    <p>User: {{ user.name }} ({{ user.role }})</p>
  </div>
</template>
