import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import NavigationBar from '../views/NavigationBar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: NavigationBar,
    children: [
     
      {
        path: 'collage_maker',
        component: () => import('@/views/CollageMaker.vue')
      },
      {
        path: 'closet',
        component: () => import('@/views/Closet.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'community',
        component: () => import('@/views/Community.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
