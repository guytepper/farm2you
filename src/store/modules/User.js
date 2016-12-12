import Auth from '../../helpers/Auth';

const User = {
  state: {
    info: null,
    isAdmin: false,
  },
  mutations: {
    UPDATE_USER (state, userInfo) {
      state.info = userInfo;
    },
    ADMIN_STATUS (state, status) {
      state.isAdmin = status;
    }
  },
  actions: {
    UPDATE_USER ({ commit, dispatch }) {
      Auth.authStateListener(userInfo => {
        commit('UPDATE_USER', userInfo);
        dispatch('ADMIN_STATUS');
      })
    },
    ADMIN_STATUS ({ commit }) {
      Auth.isAdmin().then(result => {
        commit('ADMIN_STATUS', result);
      })
    }
  }
}

export default User;
