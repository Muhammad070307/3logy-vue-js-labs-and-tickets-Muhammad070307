<script setup>
import { ref, computed } from 'vue'

// Reactive state
const newTask = ref('')
const search = ref('')
const tasks = ref([])

// Add a task
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim())
    newTask.value = ''
  }
}

// Delete a task
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

// Computed property for filtered tasks
const filteredTasks = computed(() => {
  if (search.value.trim() === '') {
    return tasks.value
  }

  return tasks.value.filter(task =>
    task.toLowerCase().includes(search.value.toLowerCase())
  )
})

// Computed property for total tasks
const taskCount = computed(() => tasks.value.length)
</script>

<template>
  <div class="container">
    <h1>Vue Todo App</h1>

    <div class="add-task">
      <input
        v-model="newTask"
        type="text"
        placeholder="Enter a new task"
      />
      <button @click="addTask">Add Task</button>
    </div>

    <h3>Total Tasks: {{ taskCount }}</h3>

    <input
      class="search"
      v-model="search"
      type="text"
      placeholder="Search tasks..."
    />

    <ul>
      <li
        v-for="(task, index) in filteredTasks"
        :key="index"
      >
        {{ task }}
        <button class="delete-btn" @click="deleteTask(index)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 5px;
}

button:hover {
  background: #369870;
}

.search {
  width: 100%;
  margin: 15px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.delete-btn {
  background: crimson;
}

.delete-btn:hover {
  background: darkred;
}
</style>