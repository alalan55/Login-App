import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'auth',
      component: () => import ('../components/bosons/AuthRegisterLayout.vue'),
      children:[
        {
          path: '',
          component: () => import ('../views/Auth-Register/AuthView.vue')

        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/Auth-Register/RegisterView.vue')
        }
      ]
    }

  ]
})

export default router
