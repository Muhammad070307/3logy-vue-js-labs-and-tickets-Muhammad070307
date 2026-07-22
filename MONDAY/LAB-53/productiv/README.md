[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/wn3_OuAC)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24248932&assignment_repo_type=AssignmentRepo)

# Week 15 — Advanced Frontend: Vue.js & Enterprise SPAs

**Duration:** Monday–Friday, Week 15  
**Focus:** Vue.js Composition API, Reactivity, Vite Tooling, Pinia, and Enterprise Routing  
**Track:** Advanced Enterprise Track (Cross-Training)

---

## 🎯 LEARNING OBJECTIVES

By the end of Week 15, students will be able to:

- ✅ Scaffold modern, blazingly fast frontend projects using Vite
- ✅ Understand the Vue 3 Composition API (`<script setup>`)
- ✅ Manage local component state using `ref` and `reactive`
- ✅ Extract reusable business logic into Composables (Vue's custom hooks)
- ✅ Handle forms and robust client-side validation
- ✅ Implement client-side routing with Vue Router and Navigation Guards
- ✅ Manage complex global application state using Pinia

---

## 📅 WEEKLY SCHEDULE

### Monday (2:00–5:00 PM Physical)

**Topic:** Introduction to Vue & The Composition API

- Refresher: Component architecture and virtual DOM (React vs Vue)
- Lecture: Vite setup, template syntax, reactivity, computed properties
- Demo: Building a reactive "Live Search" component
- Lab 53: Build a reactive "Productivity Tracker" component
- Assigned: TICKET-53 (Vue Fundamentals)

### Tuesday (Virtual)

**Topic:** Component Communication & Composables

- Refresher: Props, data flow, and DRY principles
- Lecture: Emitting events, Props validation, Lifecycle hooks, and creating Composables
- Demo: Refactoring logic into a `useFetch` composable
- Lab 54: Build a "Task Dashboard" with parent/child communication
- Assigned: TICKET-54 (Modular UI Design)

### Wednesday (9:00–11:00 AM Physical)

**Topic:** Vue Router & Enterprise Form Validation

- Refresher: SPAs vs MPAs, Controlled vs Uncontrolled inputs
- Lecture: Vue Router setup, dynamic routes, auth guards, and `v-model` form validation
- Demo: Building a multi-page dashboard with protected routes and validated forms
- Lab 55: Add routing and an "Admin Only" form to the Dashboard
- Assigned: TICKET-55 (Routing & Forms)

### Thursday (Virtual)

**Topic:** Global State Management with Pinia

- Refresher: The "prop-drilling" problem and global state needs
- Lecture: Pinia stores, Actions, Getters, and state persistence
- Demo: Moving local component state into a global Pinia store
- Lab 56: Refactor the Task Dashboard to be fully state-managed by Pinia
- Assigned: TICKET-56 (Pinia State Management)

### Friday

**Topic:** Week Review & Python Prep

- Review all Week 15 concepts through peer code reviews
- All Week 15 labs/tickets due by **5:00 PM**
- Ensure Python 3.10+ is installed for Week 16

---

## 📁 FOLDER STRUCTURE

```text
WEEK-15/
├── README.md
├── MONDAY/
│   ├── LECTURE/
│   ├── DEMOS/
│   └── LAB-53/
├── TUESDAY/
│   ├── LECTURE/
│   ├── DEMOS/
│   └── LAB-54/
├── WEDNESDAY/
│   ├── LECTURE/
│   ├── DEMOS/
│   └── LAB-55/
├── THURSDAY/
│   ├── LECTURE/
│   ├── DEMOS/
│   └── LAB-56/
├── FRIDAY/
│   └── RETROSPECTIVE/
└── TICKETS/
    ├── TICKET-53.md
    ├── TICKET-54.md
    ├── TICKET-55.md
    └── TICKET-56.md
```

---

## 🔧 PREREQUISITES

Students need before Week 15:

- ✅ Node.js 18+ installed (LTS)
- ✅ Vue Language Features (Volar) extension installed in VS Code
- ✅ Solid understanding of JavaScript ES6+ (from Weeks 1–14)

Installation check:

```bash
npm create vue@latest --version
```

---

## 📊 GRADING

| Assignment | Points | Due |
|------------|-------:|-----|
| LAB-53: Productivity Tracker | 12.5 | Monday EOD |
| LAB-54: Task Dashboard | 12.5 | Tuesday EOD |
| LAB-55: Routing & Forms | 12.5 | Wednesday EOD |
| LAB-56: Pinia Refactor | 12.5 | Thursday EOD |
| TICKET-53: Vue Fundamentals | 12.5 | Wednesday 9am |
| TICKET-54: Modular UI Design | 12.5 | Thursday 5pm |
| TICKET-55: Routing & Forms | 12.5 | Monday Week 16 2pm |
| TICKET-56: Pinia State Management | 12.5 | Sunday 11:59pm |
| **Total** | **100** | |

---

**Let's modernize the frontend! 🚀**