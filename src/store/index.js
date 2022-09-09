import { createStore } from "vuex";

export default createStore({

  state: {
    userData: null,
  },
  getters: {
    _isAuthenticated: (state) => state.userData !== null,
    _getCurrentUser: (state) => state.userData,
  },
});
