import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    {
      path: '/admin',
      component: AdminView,
      meta: { requiresAuth: true } // We will use this in the next step
    }
  ]
})

// Temporary state (we'll use Pinia for this tomorrow)
export const globalState = { isAuthenticated: false }

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !globalState.isAuthenticated) {
    alert("Stop! You must log in first.")
    return { path: '/login' }
  }
})

export default router