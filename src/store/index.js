import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import * as actions from './actions';
// import * as getters from './getters';
import user from './modules/user';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
//   actions,
//   getters,
  modules: {
    user,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
