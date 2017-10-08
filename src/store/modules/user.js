import axios from 'axios';
import * as types from '../mutation-types';
import router from '../../router';

const apiRoot = process.env.API_ROOT;

// initial state
const state = {
  info: null,
};

// getters
const getters = {
  // info: state => state.info,
};

// actions
const actions = {
  setUserInfo({ commit }, info) {
    commit(types.SET_USER_INFO, info);
  },
  clearUserInfo({ commit }) {
    commit(types.CLEAR_USER_INFO);
  },
  getUserInfo({ commit }) {
    commit(types.GET_USER_PENDING);
    axios.get(`${apiRoot}/user`)
    .then((response) => {
      localStorage.setItem('ua', response.data.token);
      commit(types.GET_USER_SUCCESS);
      commit(types.SET_USER_INFO, response.data);
      router.push('/main');
    })
    .catch((err) => {
      commit(types.GET_USER_FAILURE, err);
    });
  },
};

// mutations
const mutations = {
  [types.SET_USER_INFO](state, info) {
    state.info = info;
  },
  [types.CLEAR_USER_INFO](state) {
    state.info = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
