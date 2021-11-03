// 1. Define route components.

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import Login from '../pages/login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
