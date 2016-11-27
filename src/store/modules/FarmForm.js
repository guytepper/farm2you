export default {
  state: {
    farmAddress: null
  },
  getters: {
    farmAddress: state => state.farmAddress,
  },
  mutations: {
    setAddress (state, payload) {
      state.farmAddress = payload.place;
    }
  }
};
