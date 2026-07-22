# 🔬 LAB 53: Productivity Tracker

**Duration:** 45 minutes
**Format:** Individual / In-Class
**Topic:** Vite Setup, `ref`, `v-model`, `v-for`, and `computed`

---

## 🎯 OBJECTIVE
Your goal is to scaffold a brand new Vue 3 application using Vite and build a simple "Productivity Tracker". This tracker will allow you to type in tasks you've completed today, add them to a list, and display the total number of tasks completed using a computed property.

---

## 🛠️ INSTRUCTIONS

### Step 1: Scaffold the Project
1. Open your terminal and navigate to your `WEEK-15/MONDAY/LAB-53` folder.
2. Run the Vite scaffolding command:
   ```bash
   npm create vue@latest productivity-tracker
   ```
3. Answer the prompts:
   - TypeScript? **No**
   - JSX? **No**
   - Vue Router? **No**
   - Pinia? **No**
   - Vitest? **No**
   - ESLint/Prettier? **Yes**
4. Navigate into the folder, install dependencies, and start the server:
   ```bash
   cd productivity-tracker
   npm install
   npm run dev
   ```

### Step 2: Clean Up
1. Open the project in VS Code.
2. Go to `src/App.vue`. Delete everything inside the file.
3. Set up the three blocks of a Single-File Component:
   ```vue
   <script setup>
   import { ref, computed } from 'vue'
   </script>

   <template>
     <div class="app-container">
       <h1>Productivity Tracker</h1>
     </div>
   </template>

   <style scoped>
   .app-container {
     padding: 2rem;
     font-family: sans-serif;
   }
   </style>
   ```

### Step 3: Implement Reactivity
Inside your `<script setup>`:
1. Create a `ref` called `newTask` initialized as an empty string `''`.
2. Create a `ref` called `tasks` initialized as an empty array `[]`.
3. Create a function called `addTask` that:
   - Checks if `newTask.value` is not empty.
   - Pushes `newTask.value` into the `tasks.value` array.
   - Resets `newTask.value` back to an empty string.

### Step 4: Bind the Template
Inside your `<template>`:
1. Add an `<input>` element. Use `v-model` to bind it to `newTask`.
2. Add a `<button>` element. Use `@click` to trigger the `addTask` function.
3. Add a `<ul>` list. Use `v-for` on an `<li>` to loop through your `tasks` array and display each one.

### Step 5: Add a Computed Property
1. Inside `<script setup>`, create a computed property called `taskCount` that returns the length of the `tasks.value` array.
2. Display this count in your template (e.g., `<h3>Total Tasks: {{ taskCount }}</h3>`).

---

## ✅ EXPECTED OUTPUT
When you run the app, you should see an input field and a button. Typing a task and clicking the button should instantly add it to a bulleted list below, and the "Total Tasks" counter should automatically increase.

---

## 🐛 COMMON ISSUES (If you get stuck)
- **"My list isn't updating!"** → Did you use `.value` when pushing to the array in your script? (e.g., `tasks.value.push(...)`)
- **"The input doesn't clear!"** → Did you reset `newTask.value = ''` after pushing?
- **"My computed property says [object Object]"** → Make sure you are returning a value from the computed callback function.

*Raise your hand if you need the instructor's help!*
