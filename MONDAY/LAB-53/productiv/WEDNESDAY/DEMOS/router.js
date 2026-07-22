import { createRouter, createWebHistory } from 'vue-router'
// Assume these views exist in the src/views folder
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

// Simulated auth state for demo purposes
export const globalState = { isAuthenticated: false }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { 
      path: '/admin', 
      component: AdminView,
      // The meta tag is how we mark routes that require authentication
      meta: { requiresAuth: true } 
    }
  ]
})

// Global Navigation Guard (The Bouncer)
router.beforeEach((to, from) => {
  // If the route requires auth, and the user isn't logged in...
  if (to.meta.requiresAuth && !globalState.isAuthenticated) {
    alert("Access Denied! You must log in first.")
    // Redirect them to the login page
    return { path: '/login' }
  }
})

export default router
