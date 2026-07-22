<script setup>
import { ref } from 'vue'
import TaskCard from './TaskCard.vue'

// Reactive array of tasks
const tasks = ref([
  { id: 1, title: 'Learn Vue', isComplete: false },
  { id: 2, title: 'Build a component', isComplete: false },
  { id: 3, title: 'Master props and emits', isComplete: false }
])

// Called when a TaskCard emits 'complete-task'
function handleComplete(taskId) {
  const task = tasks.value.find((t) => t.id === taskId)
  if (task) {
    task.isComplete = true
  }
}
</script>

<template>
  <main class="dashboard">
    <h1>My Tasks</h1>

    <div class="task-list">
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :isComplete="task.isComplete"
        @complete-task="handleComplete"
      />
    </div>
  </main>
</template>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>