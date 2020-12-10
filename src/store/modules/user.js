// 引入
import { reqCode, reqLogin, reqUserByToken } from "@/api";
// 包含多个状态数据的对象
const state = {
  userInfo: {},
  token: localStorage.getItem("user_key") || "",
};

const mutations = {
  RECEIVEUSERINFO(state, result) {
    state.userInfo = result.userInfo;
    state.token = result.token;
  },
  REMOVEUSER(state) {
    state.userInfo = {};
    state.token = "";
  },
};

const actions = {
  async getCode({ commit }) {
    const result = await reqCode();
    return result.data;
  },
  async login({ commit }, user) {
    const result = await reqLogin(user);
    if (result.code === 200) {
      commit("RECEIVEUSERINFO", result.data);
      localStorage.setItem("user_key", result.data.token);
      return result;
    } else {
      return result;
    }
  },
  async getUserByToken({ commit, state }) {
    console.log(state.token);
    const result = await reqUserByToken(state.token);
    if (result.code === 200) {
      commit("RECEIVEUSERINFO", {
        token: state.token,
        userInfo: result.data,
      });
      return "ok";
    } else {
      commit("removeUser");
      localStorage.removeItem("user_key");
      return "err";
    }
  },
  logOut({ commit, state }) {
    commit("REMOVEUSER");
    localStorage.removeItem("user_key");
  },
};

const getters = {};
// 暴露
export default {
  state,
  mutations,
  actions,
  getters,
};
