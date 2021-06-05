import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, user) {
      console.log("auth_success fired token", user);
      state.status = "success";
      state.token = user.token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    async login({ commit }, user) {
      commit("auth_request");
      await axios({
        url: "https://electron-trader.herokuapp.com/api/auth/login",
        data: user,
        method: "POST",
      })
        .then((resp) => {
          const token = resp.data.token;
          const user = resp.data;
          localStorage.setItem("token", token);
          // Add the following line:
          axios.defaults.headers.common["Authorization"] = token;
          commit("auth_success", user);
        })
        .catch((err) => {
          commit("auth_error");
          console.error(err);
          localStorage.removeItem("token");
        });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://electron-trader.herokuapp.com/api/auth/register",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    userDetails: (state) => state.user,
  },
});
