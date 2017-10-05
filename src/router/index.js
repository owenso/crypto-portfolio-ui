import Vue from 'vue';
import VueCookie from 'vue-cookie';
import Router from 'vue-router';
import Landing from '@/components/landing/Landing';

Vue.use(Router);
Vue.use(VueCookie);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    // { path: '*', component: Landing },     //need to make catchall into 404 page
  ],
});
