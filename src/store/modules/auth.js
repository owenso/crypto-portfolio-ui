import Vue from 'vue';
import axios from 'axios';
import * as types from '../mutation-types';

const apiRoot = process.env.API_ROOT;
const apiVersion = process.env.API_VERSION;

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

// actions
const actions = {
  login({ commit }, payload) {
    commit(types.LOGIN_PENDING);
    axios.post(`${apiRoot}/${apiVersion}/signin`, payload)
    .then((response) => {
      Vue.cookie.set('user-auth', response.data.token, 1);
      commit(types.LOGIN_SUCCESS, response.data);
    })
    .catch((err) => {
      commit(types.LOGIN_FAILURE, err);
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
