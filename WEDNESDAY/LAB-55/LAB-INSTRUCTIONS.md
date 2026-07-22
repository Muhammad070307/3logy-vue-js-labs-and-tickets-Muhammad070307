# 🔬 LAB 55: Protected Routing & Forms

**Duration:** 45 minutes
**Format:** Individual / In-Class
**Topic:** Vue Router, `beforeEach` guards, and Form Validation

---

## 🎯 OBJECTIVE
Your goal is to scaffold a Vue application with Vue Router pre-installed, create three distinct pages, and implement a "Login Wall" that prevents users from accessing the Admin page unless they fill out a validated form.

---

## 🛠️ INSTRUCTIONS

### Step 1: Scaffold with Router
1. Scaffold a new project: `npm create vue@latest lab-55`
2. Answer the prompts:
   - TypeScript? **No**
   - JSX? **No**
   - **Vue Router? Yes!** (This will automatically generate the router setup for you)
   - Pinia? **No**
3. Navigate into the folder, install, and run:
   ```bash
   cd lab-55
   npm install
   npm run dev
   ```

### Step 2: Create Views
1. Look inside the `src/views` folder.
2. Delete `AboutView.vue`.
3. Create two new files: `LoginView.vue` and `AdminView.vue`.
4. Add some basic HTML to `AdminView.vue` (e.g., `<h1>Welcome to the Secret Admin Panel!</h1>`).

### Step 3: Configure the Router
1. Open `src/router/index.js`.
2. Update the routes array so it looks like this:
   ```javascript
   routes: [
     { path: '/', component: HomeView },
     { path: '/login', component: LoginView },
     { 
       path: '/admin', 
       component: AdminView,
       meta: { requiresAuth: true } // We will use this in the next step
     }
   ]
   ```

### Step 4: Add the Navigation Guard
1. Below the `routes` array but above `export default router`, add a global bouncer:
   ```javascript
   // Temporary state (we'll use Pinia for this tomorrow)
   export const globalState = { isAuthenticated: false }

   router.beforeEach((to, from) => {
     if (to.meta.requiresAuth && !globalState.isAuthenticated) {
       alert("Stop! You must log in first.")
       return { path: '/login' }
     }
   })
   ```

### Step 5: Build the Login Form
1. Open `LoginView.vue`.
2. Create a form with an email input, password input, and a submit button.
3. Use `v-model` to bind the inputs to `ref` variables.
4. Create a `computed` property called `isFormValid` that checks if the email contains an '@' and the password is at least 5 characters long.
5. Bind the button's disabled state: `:disabled="!isFormValid"`.
6. On form submit (`@submit.prevent`), set `globalState.isAuthenticated = true` and use `import { useRouter } from 'vue-router'` to push the user to the admin page (`router.push('/admin')`).

---

## ✅ EXPECTED OUTPUT
When you load the app, clicking the "Admin" link should pop up an alert and redirect you to the Login page. On the Login page, the button should remain disabled until you type a valid email and password. Once submitted, it should navigate you to the Secret Admin Panel.
