import { createRouter, createWebHistory } from 'vue-router';
// import App from '../views/App.vue';
import TestView from '../views/TestView.vue';
import TestView2 from '../views/TestView2.vue';

const routes = [
  {
    path: '/',
    name: 'Test',
    component: TestView
  },
  {
    path: '/home',
    name: 'Test2',
    component: TestView2
  },


  // Ajoutez d'autres routes ici
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
