// 引入
import {reqTradeInfo}from '@/api'
// 包含多个状态数据的对象
const state={
    tradeInfo:{}
}
// 包含多个直接修改状态数据的方法的对象
const mutations={
    RECEIVETRADEINFO(state,tradeInfo){
        state.tradeInfo=tradeInfo
    }
}
// 包含多个间接修改状态数据的方法的对象
const actions={
    async getTradeInfo({commit}){
        const result=await reqTradeInfo()
        if(result.code===200){
            commit('RECEIVETRADEINFO',result.data)
        }
    }
}
// 包含了多个状态数据的计算属性的get方法的对象
const getters={
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    }
}
// 暴露
export default{
    state,
    mutations,
    actions,
    getters
}