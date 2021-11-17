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
      state.user = payload.data;
      localStorage.setItem('user', JSON.stringify({ ...state.user }));
      state.token = payload.accessToken;
      localStorage.setItem('token', state.token);
    },
  },
  actions: {
    initState({ commit }) {
      commit('INIT_STATE');
    },
    loginUser({ commit }, data) {
      commit('LOGIN_USER', data);
    },
  },
};
