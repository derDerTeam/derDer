import {reqTokeInfo} from "@/api/index";

const state =  {
	tokeInfo: "",
	userIfon:""
};

const mutations = {
	RECEIVETOKE(state, data) {
		state.userIfon = data;
		state.tokeInfo = data.token
	}
};

const actions = {
	async getTokeInfo({commit}, {user_acc, passwd}) {
		const result = await reqTokeInfo(user_acc, passwd);
		if(result.code === 200) {
			commit("RECEIVETOKE", result.data);
			localStorage.setItem("USER_TOKE", result.data.token);
		}
		return result;
	}
};

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
};