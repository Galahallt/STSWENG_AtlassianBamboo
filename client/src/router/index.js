import { createRouter, createWebHistory } from 'vue-router';
import AddAdmin from '../views/addadmin.vue';
import AdminList from '../views/adminlist.vue';

const routes = [
  {
    path: '/addadmin',
    name: 'Add Admin',
    component: AddAdmin,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/adminlist',
    name: 'Admin List',
    component: AdminList,
    meta: {
      hideForAuth: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
