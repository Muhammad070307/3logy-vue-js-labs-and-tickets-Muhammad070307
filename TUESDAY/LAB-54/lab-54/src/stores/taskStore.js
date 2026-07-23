import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  // STATE
  const tasks = ref([
    { id: 1, title: 'Learn Vue', isComplete: false },
    { id: 2, title: 'Build a component', isComplete: false },
    { id: 3, title: 'Master props and emits', isComplete: false }
  ])

  // GETTER
  const completedCount = computed(() => tasks.value.filter((t) => t.isComplete).length)

  // ACTION
  function toggleComplete(id) {
    const task = tasks.value.find((t) => t.id === id)
    if (task) {
      task.isComplete = !task.isComplete
    }
  }

  return { tasks, completedCount, toggleComplete }
})