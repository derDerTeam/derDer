import {reqSearchList} from "@/api/index";
const state = {
  searchList: [], //分类列表数据
};
const mutations = {
  RECEIVESEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};

const actions = {
  async getSearchList({ commit }) {
    const result = await reqSearchList();
    if (result.code === 200) {
      commit("RECEIVESEARCHLIST", result.data);
    }
  },
 
};
const getters = {
   goods(state){
     return state.searchList.goods || []
   }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
