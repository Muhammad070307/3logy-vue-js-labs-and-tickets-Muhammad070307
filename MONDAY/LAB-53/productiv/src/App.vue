<script setup>
import { ref, computed } from 'vue'

// Step 3: Reactivity
const newTask = ref('')
const tasks = ref([])

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

// Step 5: Computed Property
const taskCount = computed(() => tasks.value.length)
</script>

<template>
  <div class="todo-app">
    <h1>My Task List</h1>

    <!-- Step 4: Input + Button -->
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Enter a new task"
    />
    <button @click="addTask">Add Task</button>

    <!-- Step 5: Display count -->
    <h3>Total Tasks: {{ taskCount }}</h3>

    <!-- Step 4: List -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 40px auto;
  font-family: sans-serif;
}
input {
  padding: 6px;
  margin-right: 8px;
}
button {
  padding: 6px 12px;
}
li {
  margin: 4px 0;
}
</style>