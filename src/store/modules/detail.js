import { reqRecommendResponseList, reqRgs } from "@/api/index";
const state = {
  recommendResponseList: [], //相关分类列表
  rgs: [], //评论列表
};

const mutations = {
  RECEIVERECOMMENDRESPONSELIST(state, recommendResponseList) {
    state.recommendResponseList = recommendResponseList;
  },
  RECEIVERGS(state, rgs) {
    state.rgs = rgs;
  },
};

const actions = {
  async getRgs({ commit }) {
    const result = await reqRgs();
    if (result.code === 200) {
      commit("RECEIVERGS", result.data);
    }
  },
  async getRecommendResponseList({ commit }) {
    const result = await reqRecommendResponseList();
    if (result.code === 200) {
      commit("RECEIVERECOMMENDRESPONSELIST", result.data);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
