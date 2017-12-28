import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/landing/Landing';
import Main from '@/components/main/Main';
import ProfileInfo from '@/components/main/portfolioPages/PortfolioInfo';
import Dashboard from '@/components/main/dashboard/Dashboard';
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
      children: [
        { name: 'dashboard',
          path: '/',
          component: Dashboard,
        },
        { name: 'portfolioInfo',
          path: 'portfolio/:portfolioId',
          component: ProfileInfo,
          props: true,
        },
      ],
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
