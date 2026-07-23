<script setup>
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard.vue'

const store = useTaskStore()
</script>

<template>
  <main class="dashboard">
    <h1>My Tasks</h1>
    <p class="completed-count">
      Completed: <strong>{{ store.completedCount }}</strong> / {{ store.tasks.length }}
    </p>

    <div class="task-list">
      <TaskCard v-for="task in store.tasks" :key="task.id" :task="task" />
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

.completed-count {
  color: #555;
  margin-bottom: 1rem;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>