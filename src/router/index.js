import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComp from '@views/welcome.vue'
import { auth } from "@/utils/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeComp,
     meta: {
        title: 'Welcome',
        requiresAuth: false
     }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@views/Auth/Login.vue"),
     meta: {
          title: 'Login',
          requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import("@views/Auth/Registration.vue"),
     meta: {
          title: 'Signup',
          requiresAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("@views/Dashboard.vue"),
     meta: {
          title: 'dashboard',
          requiresAuth: true
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@views/PrivacyPolicy.vue"),
     meta: {
          title: 'Privacy-Policy',
          requiresAuth: false
      }
    },
    {
      path: '/terms-service',
      name: 'Terms of Service',
      component: () => import("@views/TermsOfService.vue"),
     meta: {
          title: 'Terms of service',
          requiresAuth: false
      }
    },
  ],
})


router.beforeEach((to, from, next) => {
  const token = auth.getToken();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  console.log("meta " , to.meta.requiresAuth, token)
  
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})


export default router
