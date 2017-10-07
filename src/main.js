// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axiosConfig from './config/axiosConfig';
import validateToken from './utils/validate';

Vue.config.productionTip = false;


axiosConfig();

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
