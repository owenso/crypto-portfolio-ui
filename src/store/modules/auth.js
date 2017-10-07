import axios from 'axios';
import * as types from '../mutation-types';
import router from '../../router';

const apiRoot = process.env.API_ROOT;

// initial state
const state = {
  loginPending: false,
  loginFailure: false,
  loginSuccess: false,
};

// getters
const getters = {
  // token: state => state.token,
};

// actions
const actions = {
  login({ commit }, payload) {
    commit(types.LOGIN_PENDING);
    axios.post(`${apiRoot}/signin`, payload)
    .then((response) => {
      localStorage.setItem('ua', response.data.token);
      commit(types.LOGIN_SUCCESS);
      commit(types.SET_USER_INFO, response.data);
      router.push('/main');
    })
    .catch((err) => {
      commit(types.LOGIN_FAILURE, err);
    });
  },
  logout({ commit }) {
    localStorage.removeItem('ua');
    commit(types.LOGOUT);
    commit(types.CLEAR_USER_INFO);
    router.push('/');
  },
};

// mutations
const mutations = {
  [types.LOGIN_PENDING](state) {
    state.loginPending = true;
    state.loginFailure = false;
    state.loginSuccess = false;
  },

  [types.LOGIN_FAILURE](state, error) {
    state.loginPending = false;
    state.loginFailure = error;
    state.loginSuccess = false;
  },

  [types.LOGIN_SUCCESS](state) {
    state.loginPending = false;
    state.loginFailure = false;
    state.loginSuccess = true;
  },

  [types.LOGOUT](state) {
    state.loginSuccess = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
