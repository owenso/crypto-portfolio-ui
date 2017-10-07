import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/landing/Landing';
import Main from '@/components/main/Main';
import validateToken from '../utils/validate';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: { auth: true },
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
      beforeEnter: (to, from, next) => {
        validateToken()
        .then(() => {
          next('/main');
        })
        .catch(() => {
          next();
        });
      },
    },
    { path: '*', redirect: '/' },
  ],
});
