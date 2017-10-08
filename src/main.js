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

Vue.config.productionTip = false;


raven();
axiosConfig();
initializeVeeValidate();

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.auth);
  if (!authRequired) {
    next();
  } else {
    validateToken()
    .then(() => {
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
