# 🔬 LAB 54: Task Dashboard (Props & Emits)

**Duration:** 30 minutes
**Format:** Breakout Rooms (Pairs)
**Topic:** Component Communication (`defineProps`, `defineEmits`)

---

## 🎯 OBJECTIVE
Your goal is to refactor a monolithic Vue application into a modular architecture. You will create a Parent component (`Dashboard.vue`) that passes data down to a Child component (`TaskCard.vue`), and configure the Child to emit an event back to the Parent when a task is completed.

---

## 🛠️ INSTRUCTIONS

### Step 1: Scaffold and Cleanup
1. Use your existing Vite project from yesterday, or quickly scaffold a new one: `npm create vue@latest lab-54`
2. Create a new folder inside `src` called `components`.
3. Create two files inside `components`: `Dashboard.vue` and `TaskCard.vue`.

### Step 2: Set up the Parent (`Dashboard.vue`)
1. In `Dashboard.vue`, create a `<script setup>` block.
2. Create a reactive array of tasks using `ref`. Each task should be an object: `{ id: 1, title: 'Learn Vue', isComplete: false }`. Add 3 tasks to the array.
3. Import your child component: `import TaskCard from './TaskCard.vue'`.
4. In the `<template>`, use `v-for` to render a `<TaskCard>` for every task in your array.
5. **Pass the data down:** Bind the `title` and `isComplete` properties to the `<TaskCard>`. (e.g., `:title="task.title"`).

### Step 3: Set up the Child (`TaskCard.vue`)
1. In `TaskCard.vue`, use `defineProps` to accept `title` (String) and `isComplete` (Boolean) and `id` (Number).
2. In the `<template>`, display the `title`. Add a button that says "Mark Complete".
3. Use `defineEmits` to declare a custom event called `completeTask`.
4. When the button is clicked, trigger a function that emits the `completeTask` event, passing the task's `id` as the payload.

### Step 4: Complete the Loop (Parent Listens)
1. Back in `Dashboard.vue`, listen for the custom event on the child component: `@complete-task="handleComplete"`.
2. Write the `handleComplete(taskId)` function. It should find the task in the array with that ID and set its `isComplete` property to `true`.

---

## ✅ EXPECTED OUTPUT
You should see a list of task cards. When you click "Mark Complete" on a child card, the data in the parent updates, which in turn passes the new `isComplete=true` prop back down to the child, allowing you to update the UI (e.g., change the background color or cross out the text).

---

## 🐛 COMMON ISSUES (If you get stuck)
- **"The event isn't firing!"** → Check your casing. If you emit `completeTask` (camelCase), the parent MUST listen using `@complete-task` (kebab-case). Vue automatically converts these.
- **"My prop isn't updating in the child!"** → Children cannot mutate props directly. The parent must do the update. Check that you are emitting the event AND the parent function is correctly modifying the array.
- **"v-for is not rendering anything"** → Check that your `ref` array has data in it. Add a `{{ tasks }}` to the template temporarily to debug.
- **"Cannot read properties of undefined (reading 'id')"** → Make sure you are passing the `id` prop from the parent and accepting it with `defineProps`.
