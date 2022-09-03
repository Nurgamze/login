import { createStore } from "vuex";

export default createStore({
  state: {
    userData: null,
  },
  getters: {
    _getCurrentUser(state) {
      const userData = state.userData;
      delete userData?.password;
      return userData;
    },
  },
});
