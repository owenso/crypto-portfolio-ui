import axios from 'axios';
import * as types from '../mutation-types';

const apiRoot = process.env.API_ROOT;

// initial state
const state = {
  list: [],
  coinlistPending: null,
  coinlistSuccess: null,
  coinlistFailure: null,
};

// getters
const getters = {
    // info: state => state.info,
};

// actions
const actions = {
  getCoinList({ commit }) {
    commit(types.GET_COIN_LIST_PENDING);
    axios.get(`${apiRoot}/auth/coins/list`)
    .then((response) => {
      commit(types.GET_COIN_LIST_SUCCESS, response.data);
    })
    .catch((err) => {
      commit(types.GET_COIN_LIST_FAILURE, err);
    });
  },
};

// mutations
const mutations = {
  [types.GET_COIN_LIST_SUCCESS](state, list) {
    state.list = list;
    state.coinlistPending = false;
    state.coinlistSuccess = true;
    state.coinlistFailure = false;
  },
  [types.GET_COIN_LIST_FAILURE](state) {
    state.list = [];
    state.coinlistPending = false;
    state.coinlistSuccess = false;
    state.coinlistFailure = true;
  },
  [types.GET_COIN_LIST_PENDING](state) {
    state.coinlistPending = true;
    state.coinlistSuccess = false;
    state.coinlistFailure = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
