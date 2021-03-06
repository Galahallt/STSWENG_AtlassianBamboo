import * as api from '../api/index.js';
import { createRouter, createWebHistory } from 'vue-router';
import AdminList from '../views/adminlist.vue';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
import ViewProf from '../views/rating.vue';
import ReviewProf from '../views/reviewprof.vue';
import EditProf from '../views/editProf.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/view/:profID',
    name: 'View Professor',
    component: ViewProf,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/review/:profID',
    name: 'Review Professor',
    component: ReviewProf,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/editprof/:profID',
    name: 'Edit Professor',
    component: EditProf,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/adminlist',
    name: 'Admin List',
    component: AdminList,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const hideForAuth = to.matched.some((record) => record.meta.hideForAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  const user = JSON.parse(localStorage.getItem('user'));
  var dbUser;

  if (user) {
    dbUser = await api.getUserByEmail(user.email);
    console.log(dbUser);
  }

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
  } else if (requiresAdmin) {
    if (dbUser.data.isAdministrator) {
      next();
    } else {
      next({ name: 'Home' });
    }
  } else {
    next();
  }
});

export default router;
