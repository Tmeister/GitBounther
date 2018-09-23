import userService from '../../services/user.service';

export default {
  namespaced: true,
  state: {
    user: null,
    error: null,
    status: {
      loggedIn: false,
      loading: false,
    },
  },
  actions: {
    login({ commit }) {
      commit('loginRequested');
      userService
        .login()
        .then((user) => {
          console.log('user :', user);
          commit('loginSuccess', user);
        })
        .catch((error) => {
          commit('loginFailure');
          console.log('error :', error);
        });
    },
    checkStatus({ commit }) {
      userService
        .status()
        .then((user) => {
          console.log('userStatus :', user);
          commit('loginSuccess', user);
        })
        .catch((error) => {
          commit('loginFailure', error);
        });
    },
  },
  mutations: {
    loginRequested(state) {
      state.status.loading = true;
    },
    loginSuccess(state, user) {
      state.user = user;
      state.status = {
        loading: false,
        loggedIn: true,
      };
    },
    loginFailure(state, error) {
      state.status = {};
      state.user = null;
      state.error = error;
    },
  },
};
