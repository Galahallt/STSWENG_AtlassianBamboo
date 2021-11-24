export default {
  state: {
    user: null,
    token: null,
  },
  getters: {},
  mutations: {
    INIT_STATE(state) {
      state.user = JSON.parse(localStorage.getItem('user'));
      state.token = localStorage.getItem('token');
    },
    LOGIN_USER(state, payload) {
      state.user = payload.user;
      localStorage.setItem('user', JSON.stringify({ ...state.user }));
      state.token = payload.accessToken;
      localStorage.setItem('token', state.token);
    },
    LOGOUT_USER(state) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  actions: {
    initState({ commit }) {
      commit('INIT_STATE');
    },
    loginUser({ commit }, data) {
      commit('LOGIN_USER', data);
    },
    logoutUser({ commit }) {
      commit('LOGOUT_USER');
    },
  },
};
