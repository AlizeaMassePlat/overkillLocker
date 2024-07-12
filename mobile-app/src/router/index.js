import TestView from '../views/TestView.vue';
import TestView2 from '../views/TestView2.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    component: TestView,
  },
  {
    path: '/test',
    component: TestView2,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
