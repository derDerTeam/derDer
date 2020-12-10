import { reqShopCartList, reqAddOrUpdateShopCart } from "@/api";

const state = {
  shopCartList: [],
};
const mutations = {
  RECEIVESHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
  DELETESHOP(state, index) {
    state.shopCartList.splice(index, 1);
  },
  CHENGCHECKED(state, shop) {
    state.shopCartList.find(
      (item) => item.id === shop.id
    ).isChecked = !shop.isChecked;
  },
  CHANGEALLCHECKED(state, flag) {
    state.shopCartList.forEach((item) => (item.isChecked = flag));
  },
};
const actions = {
  async getShopCartList({ commit }) {
    const result = await reqShopCartList();
    console.log(result);
    if (result.code === 200) {
      commit("RECEIVESHOPCARTLIST", result.data);
    }
  },
  deleteShop({ commit }, index) {
    commit("DELETESHOP", index);
  },
  chengChecked({ commit }, item) {
    commit("CHENGCHECKED", item);
  },
  changeAllChecked({ commit }, flag) {
    commit("CHANGEALLCHECKED", flag);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
