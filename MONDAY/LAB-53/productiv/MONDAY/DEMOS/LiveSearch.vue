<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const users = ref(['Alice', 'Bob', 'Charlie', 'David', 'Eve'])

// This automatically updates whenever searchQuery changes!
// Compare this to React's useMemo
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value
  return users.value.filter(u => u.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 1rem;">
    <h2>Demo 2: Live Search (v-model & computed)</h2>
    <input v-model="searchQuery" placeholder="Search users..." />
    <ul>
      <li v-for="user in filteredUsers" :key="user">
        {{ user }}
      </li>
    </ul>
    <p v-if="filteredUsers.length === 0">No users found.</p>
  </div>
</template>
