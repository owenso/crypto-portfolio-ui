import _ from 'lodash';


function parseForSelect(array) {
  return _.map(array, (x) => {
    console.log(x);
    return {
      value: x.symbol,
      rank: parseInt(x.rank, 16),
      name: x.name,
    };
  });
}

// initial state
const state = {
  isConnected: false,
};

// getters
const getters = {
  cmc: state => state.cmc,
  coinlist: state => parseForSelect(state.cmc && state.cmc.Data.length ? state.cmc.Data : null),
};

// actions
const actions = {
};

// mutations
const mutations = {
  SOCKET_CONNECT(state) {
    state.isConnected = true;
  },

  SOCKET_DISCONNECT(state) {
    state.isConnected = false;
  },

  SOCKET_POLO(state, payload) {
    state.cmc = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
