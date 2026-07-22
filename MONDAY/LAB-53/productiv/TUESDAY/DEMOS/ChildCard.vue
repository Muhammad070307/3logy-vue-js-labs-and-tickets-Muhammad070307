<script setup>
// defineProps is a compiler macro (no import needed)
const props = defineProps({
  id: Number,
  title: String,
  isComplete: Boolean
})

// defineEmits declares the flares this child can shoot
const emit = defineEmits(['deleteTask'])

function handleDelete() {
  // Fire the flare, passing the ID as the payload!
  emit('deleteTask', props.id) 
}
</script>

<template>
  <div style="border: 1px solid green; padding: 1rem; margin: 0.5rem 0;">
    <h3>{{ title }}</h3>
    <p v-if="isComplete">✅ Done</p>
    <p v-else>⏳ Pending</p>
    <button @click="handleDelete">Delete Task</button>
  </div>
</template>
