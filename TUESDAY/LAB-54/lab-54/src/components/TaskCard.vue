<script setup>
// Accept props from the parent
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  }
})

// Declare the custom event this component can emit
const emit = defineEmits(['completeTask'])

function markComplete() {
  emit('completeTask', props.id)
}
</script>

<template>
  <div class="task-card" :class="{ completed: isComplete }">
    <span class="title">{{ title }}</span>

    <button v-if="!isComplete" @click="markComplete">
      Mark Complete
    </button>
    <span v-else class="done-label">✓ Done</span>
  </div>
</template>

<style scoped>
.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  transition: background-color 0.2s ease;
}

.task-card.completed {
  background-color: #e6f9e6;
}

.task-card.completed .title {
  text-decoration: line-through;
  color: #888;
}

button {
  padding: 0.35rem 0.75rem;
  border: none;
  border-radius: 6px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.done-label {
  color: #2e7d32;
  font-weight: bold;
}
</style>