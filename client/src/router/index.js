import { createRouter, createWebHistory } from 'vue-router';
import AddAdmin from '../views/addadmin.vue';
import AdminList from '../views/adminlist.vue';
import AddProf from '../views/addProf.vue';
import Home from '../views/home.vue';
import Login from '../views/login.vue';

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
  },
  {
      path: '/addprof',
      name: 'Add Prof',
      component: AddProf
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
        requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        hideForAuth: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const hideForAuth = to.matched.some((record) => record.meta.hideForAuth);
    const user = localStorage.getItem('user');
    if (requiresAuth) {
      if (user != null) {
        next();
      } else {
        next({ name: 'Login' });
      }
    } else if (hideForAuth) {
      if (user != null) {
        next({ name: 'Home' });
      } else {
        next();
      }
    } else {
      next();
    }
  });
  
export default router;
