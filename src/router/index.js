import Vue from 'vue';
import Vuex from 'vuex';

import Router from 'vue-router';
import Landing from '@/components/landing/Landing';

Vue.use(Router);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
  ],
});
