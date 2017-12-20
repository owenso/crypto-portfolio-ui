import axios from 'axios';
import * as types from '../mutation-types';

const apiRoot = process.env.API_ROOT;

// initial state
const state = {
  privacyTypes: {},
  portfolioTypes: {},
  getTypes: {
    pending: null,
    success: null,
    failure: null,
  },
  portfolioSave: {
    created: null,
    pending: null,
    success: null,
    failure: null,
  },
};

// getters
const getters = {
    // info: state => state.info,
};

// actions
const actions = {
  getPortfolioTypes({ commit }) {
    commit(types.GET_TYPES_PENDING);
    axios.get(`${apiRoot}/auth/portfolio/types`)
    .then((response) => {
      commit(types.GET_TYPES_SUCCESS, response.data);
    })
    .catch((err) => {
      commit(types.GET_TYPES_FAILURE, err);
    });
  },
  savePortfolio({ commit, rootState }, payload) {
    commit(types.SAVE_PORTFOLIO_PENDING);
    payload.UserID = rootState.user.info.id;
    console.log(payload);
    axios.post(`${apiRoot}/auth/portfolio/add`, payload)
    .then((response) => {
      commit(types.SAVE_PORTFOLIO_SUCCESS, response.data);
    })
    .catch((err) => {
      commit(types.SAVE_PORTFOLIO_FAILURE, err);
    });
  },
};

// mutations
const mutations = {
  [types.GET_TYPES_SUCCESS](state, result) {
    state.privacyTypes = result.Privacy;
    state.portfolioTypes = result.PortfolioTypes;
    state.getTypes.pending = false;
    state.getTypes.success = true;
    state.getTypes.failure = false;
  },
  [types.GET_TYPES_FAILURE](state) {
    state.privacyTypes = {};
    state.portfolioTypes = {};
    state.getTypes.success = false;
    state.getTypes.failure = true;
  },
  [types.GET_TYPES_PENDING](state) {
    state.getTypes.pending = true;
    state.getTypes.success = false;
    state.getTypes.failure = false;
  },
  [types.SAVE_PORTFOLIO_SUCCESS](state, created) {
    state.portfolioSave.created = created;
    state.portfolioSave.pending = false;
    state.portfolioSave.success = true;
    state.portfolioSave.failure = false;
  },
  [types.SAVE_PORTFOLIO_FAILURE](state) {
    state.portfolioSave.created = null;
    state.portfolioSave.success = false;
    state.portfolioSave.failure = true;
  },
  [types.SAVE_PORTFOLIO_PENDING](state) {
    state.portfolioSave.created = null;
    state.portfolioSave.pending = true;
    state.portfolioSave.success = false;
    state.portfolioSave.failure = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
