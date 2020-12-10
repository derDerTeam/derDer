import {
  reqBannerList,
  reqCategoryList,
  reqCateDetailList,
  reqCrowdList,
  reqSeckillList,
  reqNewsList,
  reqRecommendList,
} from "@/api/index";
const state = {
  categoryList: [], //分类列表数据
  cateDetailList: [], //2级分类列表
  crowdList: [], //众筹数据
  seckillList: [], //秒杀数据
  newsList: [], //每日新品数据
  recommendList: {}, //推荐数据
  bannerList: [],
};
const mutations = {
  RECEIVEBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVECATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  RECEIVECATEDETAILLIST(state, cateDetailList) {
    state.cateDetailList = cateDetailList;
  },
  RECEIVECROWDLIST(state, crowdList) {
    state.crowdList = crowdList;
  },
  RECEIVESECKILLLIST(state, seckillList) {
    state.seckillList = seckillList;
  },
  RECEIVENEWSLIST(state, newsList) {
    state.newsList = newsList;
  },
  RECEIVERECOMMENDLIST(state, recommendList) {
    state.recommendList = recommendList;
  },
};
const actions = {
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("RECEIVEBANNERLIST", result.data);
    }
  },
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("RECEIVECATEGORYLIST", result.data);
    }
  },
  async getCategory2List({ commit }, { cate1Id, cate2Id }) {
    const result = await reqCateDetailList(cate1Id);
    const cateDetailList = [];
    if (result.code === 200) {
      cateDetailList.push(result.data);
    }
    const result2 = await reqCateDetailList(cate2Id);
    if (result2.code === 200) {
      cateDetailList.push(result2.data);
    }
    commit("RECEIVECATEDETAILLIST", cateDetailList);
  },
  async getCrowdList({ commit }) {
    const result = await reqCrowdList();
    if (result.code === 200) {
      commit("RECEIVECROWDLIST", result.data);
    }
  },
  async getSeckillList({ commit }) {
    const result = await reqSeckillList();
    if (result.code === 200) {
      commit("RECEIVESECKILLLIST", result.data);
    }
  },
  async getNewsList({ commit }) {
    const result = await reqNewsList();
    if (result.code === 200) {
      commit("RECEIVENEWSLIST", result.data);
    }
  },
  async getRecommendList({ commit }) {
    const result = await reqRecommendList();
    if (result.code === 200) {
      commit("RECEIVERECOMMENDLIST", result.data);
    }
  },
};
const getters = {
  crowd1(state) {
    return state.crowdList[0] || {};
  },
  crowd2(state) {
    return state.crowdList[1] || {};
  },
  crowd3(state) {
    return state.crowdList[2] || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
