import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Store from '@/store';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/musicinfo',
    name: 'musicinfo',
    component:()=>import('@/views/MusicItem.vue')
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('@/views/Search.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/Login.vue'),
  },
  {
    path:'/userinfo',
    name:'userinfo',
    component:()=>import('@/views/UserInfo.vue'),
    beforeEnter: (to, from, next) => {
      if (Store.state.isLogin&&Store.state.token) {
        next()
      }else{
        next('/login')
      }
    }
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
