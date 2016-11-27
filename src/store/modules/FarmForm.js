export default {
  state: {
    farmLocation: null
  },
  getters: {
    farmLocation: state => state.farmAddress,
  },
  mutations: {
    setLocation (state, payload) {
      state.farmAddress = payload.place;
    }
  }
};
