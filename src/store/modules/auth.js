import axios from 'axios';
import * as types from '../mutation-types';
import config from '../../../config';

const api = config.dev.env.api;


// initial state
const state = {
  loginPending: false,
  loginFailure: false,
  loginSuccess: false,
  token: null,
};

// getters
const getters = {
  token: state => state.token,
};
console.log(api);
// actions
const actions = {
  login({ commit }, payload) {
    commit(types.LOGIN_PENDING); // set the user in the store
    axios.post(`${api.root}/${api.version}/signin`, payload)
    .then((response) => {
      this.$cookie.set('user-auth', response.data.token, 1);
      commit(types.LOGIN_SUCCESS, response.data); // set the user in the store
    })
    .catch((err) => {
      commit(types.LOGIN_FAILURE, err); // set the user in the store
    });
  },
};

// mutations
const mutations = {
  [types.LOGIN_PENDING](state) {
    state.loginPending = true;
    state.loginFailure = false;
    state.loginSuccess = false;
    state.token = null;
  },

  [types.LOGIN_FAILURE](state, { error }) {
    state.loginPending = false;
    state.loginFailure = error;
    state.loginSuccess = false;
    state.token = null;
  },

  [types.LOGIN_SUCCESS](state, { token }) {
    state.loginPending = false;
    state.loginFailure = false;
    state.loginSuccess = true;
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
