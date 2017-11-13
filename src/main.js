// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axiosConfig from './config/axiosConfig';
import validateToken from './utils/validate';
import initializeVeeValidate from './config/veeValidate';
import raven from './config/raven';
import socket from './config/socketio';
import autocomplete from './config/v-autocomplete';

Vue.config.productionTip = false;


raven();
axiosConfig();
initializeVeeValidate();
socket();
autocomplete();
router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.auth);
  if (!authRequired) {
    next();
  } else {
    validateToken()
    .then((data) => {
      // when token is validated, set any user data that may have been cleared from the store
      store.commit('SET_USER_INFO', data);
      next();
    })
    .catch(() => {
      next('/');
    });
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
