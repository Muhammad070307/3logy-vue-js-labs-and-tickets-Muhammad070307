# 🔬 LAB 56: Pinia Dashboard Refactor

**Duration:** 45 minutes
**Format:** Breakout Rooms (Pairs)
**Topic:** Pinia Setup Stores, Actions, and Getters

---

## 🎯 OBJECTIVE
Your goal is to eliminate "Prop Drilling". You will take the Task Dashboard you built on Tuesday (Lab 54) and completely strip out all `defineProps` and `defineEmits`. You will move the task data into a global Pinia store, allowing components to interact with it directly.

---

## 🛠️ INSTRUCTIONS

### Step 1: Install Pinia
1. Open your Lab 54 project in VS Code.
2. Run `npm install pinia`.
3. Open `src/main.js` and inject Pinia:
   ```javascript
   import { createPinia } from 'pinia'
   const app = createApp(App)
   app.use(createPinia())
   app.mount('#app')
   ```

### Step 2: Create the Store
1. Create a new folder called `stores` inside `src`.
2. Inside `stores`, create a file called `taskStore.js`.
3. Define your setup store:
   ```javascript
   import { defineStore } from 'pinia'
   import { ref, computed } from 'vue'

   export const useTaskStore = defineStore('tasks', () => {
     // 1. STATE: Move your array of tasks here
     const tasks = ref([
       { id: 1, title: 'Learn Vue', isComplete: false },
       // ...
     ])

     // 2. GETTER: Create a computed property that returns the number of completed tasks
     const completedCount = computed(() => tasks.value.filter(t => t.isComplete).length)

     // 3. ACTION: Create a function to toggle a task's status
     function toggleComplete(id) {
       const task = tasks.value.find(t => t.id === id)
       if (task) {
         task.isComplete = !task.isComplete
       }
     }

     return { tasks, completedCount, toggleComplete }
   })
   ```

### Step 3: Refactor the Parent (`Dashboard.vue`)
1. Delete your local `const tasks = ref(...)` array.
2. Delete the `@complete-task` event listener from the template.
3. Import and use the store:
   ```vue
   <script setup>
   import { useTaskStore } from '../stores/taskStore'
   const store = useTaskStore()
   </script>
   ```
4. Update your `v-for` loop to iterate over `store.tasks`.
5. Display the `store.completedCount` at the top of the dashboard.

### Step 4: Refactor the Child (`TaskCard.vue`)
1. Keep `defineProps(['task'])` — we still need it to receive the task object from the parent's `v-for` loop. This is the cleanest pattern for list items.
2. **Delete `defineEmits` entirely!** This is the big change. The child no longer needs to shout events up to the parent.
3. Import the store: `import { useTaskStore } from '../stores/taskStore'` and call `const store = useTaskStore()`.
4. When the "Mark Complete" button is clicked, call `store.toggleComplete(props.task.id)` directly. No events fired, no prop drilling. The store handles everything!

---

## ✅ EXPECTED OUTPUT
The application should behave exactly identically to how it did on Tuesday. However, the architecture is vastly improved. The child component modifies global state directly, and the parent component's computed count updates instantly.
