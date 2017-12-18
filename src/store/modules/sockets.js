// import _ from 'lodash';


// function parseForSelect(array) {
//   return _.map(array, (x) => {
//     console.log(x);
//     return {
//       value: x.symbol,
//       rank: parseInt(x.rank, 16),
//       name: x.name,
//     };
//   });
// }

// initial state
const state = {
  isConnected: false,
  cmc: {},
  coinlist: [],
};

// getters
const getters = {
  cmc: state => state.cmc,
  // coinlist: state => parseForSelect(state.cmc.Data && state.cmc.Data.length ?
  //   state.cmc.Data : null),
  coinlist: (state) => {
    console.log(state);
    return [{
      value: 'BTC',
      rank: 1,
      name: 'Bitcoin',
    }, {
      value: 'ETH',
      rank: 2,
      name: 'Ethereum',
    }, {
      value: 'BCH',
      rank: 3,
      name: 'Bitcoin Cash',
    }];
  },
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
