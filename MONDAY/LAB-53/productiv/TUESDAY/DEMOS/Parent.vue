<script setup>
import { ref } from 'vue'
import ChildCard from './ChildCard.vue'

// Parent holds the data
const tasks = ref([
  { id: 1, title: 'Learn Reactivity', isComplete: true },
  { id: 2, title: 'Learn Props/Emits', isComplete: false },
  { id: 3, title: 'Learn Composables', isComplete: false }
])

// Parent listens for the emit and mutates the data
function removeTaskFromList(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <div style="border: 2px solid blue; padding: 1rem;">
    <h2>Parent Component (Dashboard)</h2>
    <p>Total Tasks: {{ tasks.length }}</p>

    <!-- Parent passes props down (:prop) and listens for events up (@event) -->
    <ChildCard 
      v-for="task in tasks" 
      :key="task.id" 
      :id="task.id"
      :title="task.title"
      :isComplete="task.isComplete"
      @delete-task="removeTaskFromList" 
    />
  </div>
</template>
