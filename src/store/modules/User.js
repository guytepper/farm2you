import Auth from '../../helpers/Auth';

const User = {
  state: {
    user: null,
    isAdmin: false,
  },
  mutations: {
    UPDATE_USER (state, user) {
      state.user = user;
    },
    ADMIN_STATUS (state, status) {
      state.isAdmin = status;
    }
  },
  actions: {
    UPDATE_USER ({ commit, dispatch }) {
      Auth.authStateListener(user => {
        commit('UPDATE_USER', user);
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
