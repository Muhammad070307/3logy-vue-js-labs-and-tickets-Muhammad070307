# 📋 TICKET #53: Classic ToDo App with Vue 3

**Assigned:** Monday Week 15
**Due:** Wednesday Week 15, 9:00 AM
**Type:** Independent Practice
**Worth:** 12.5 points
**Submission:** GitHub Repo Link in Discord #week-15-help

---

## 🎯 OBJECTIVE
Prove your mastery of the Vue 3 Composition API, Reactivity, and Vite by building a fully functional ToDo Application. This ticket reinforces the concepts learned in Lab 53 but requires you to work independently.

---

## ✅ REQUIREMENTS

### 1. Project Setup
- Scaffold a new project using `npm create vue@latest`.
- Name the project `vue-todo-app`.
- Do not use Router or Pinia yet.

### 2. Core Features
Your `App.vue` must implement the following functionality:
1. **Add a Todo:** An input field and button to add a new string to an array of todos.
2. **List Todos:** Display all added todos using `v-for`.
3. **Delete a Todo:** Next to each todo in the list, include a "Delete" button. Clicking it should remove that specific item from the array. (Hint: Use the `splice` or `filter` method on arrays).

### 3. Advanced Reactivity (Computed Properties)
1. Add a "Search" input field above your list.
2. Use a `computed` property to filter the displayed list based on the search input. If the search is empty, show all todos. If it has text, show only todos that include that text.

### 4. UI/UX (Bonus / Encouraged)
- Add basic CSS in the `<style scoped>` block to make it look presentable. Add some margin, padding, and button hover states.

---

## 📸 SUBMISSION REQUIREMENTS

1. Push your code to a public GitHub repository named `vue-todo-app`.
2. Post the GitHub link in the Discord `#week-15-help` channel.
3. Message format: "Ticket 53 Completed ✅ [Your GitHub Link]"

---

## 📊 GRADING RUBRIC

| Criteria | Points |
|----------|--------|
| Vite Project setup correctly | 2 |
| `v-model` used correctly for inputs | 2.5 |
| `v-for` used correctly to render the list | 2.5 |
| Delete functionality works | 3 |
| Computed property used for Search filtering | 2.5 |
| **Total** | **12.5** |

**Start early! This is due Wednesday morning.**
