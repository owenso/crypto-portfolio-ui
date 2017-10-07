import * as types from '../mutation-types';

// initial state
const state = {
  info: null,
};

// getters
const getters = {
  info: state => state.info,
};

// actions
const actions = {
  setUserInfo({ commit }, info) {
    commit(types.SET_USER_INFO, info);
  },
  clearUserInfo({ commit }) {
    commit(types.CLEAR_USER_INFO);
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
