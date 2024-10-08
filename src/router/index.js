import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'

export const isAuthenticated = ref(false)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
        if (isAuthenticated.value) {
            next()
        } else {
            next("/login")
        }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router