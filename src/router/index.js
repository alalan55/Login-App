import { createRouter, createWebHistory } from 'vue-router'
import {useLoginStore} from '../stores/login'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'auth',
      component: () => import('../components/bosons/AuthRegisterLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Auth-Register/AuthView.vue')

        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/Auth-Register/RegisterView.vue')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/ToDos/ToDosView.vue'),
      meta:{
        requireAuth: true
      }
    }

  ]
})

router.beforeEach(async (to, from, next) =>{
  const store = useLoginStore()
  let token = store.$token

  if(to.meta.requireAuth){
    if(token){
      next()
    }else{
      next('/')
    }
  }else{
    next()
  }
})

export default router
