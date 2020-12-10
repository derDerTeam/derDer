
import { reqShopCartList, reqAddOrUpdateShopCart } from '@/api'

const state = {
    shopCartList:[]
}
const mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}
const actions = {
    async getShopCartList({commit}){
        const result = await reqShopCartList()
        console.log(result)
        if(result.code === 200){
            commit('RECEIVESHOPCARTLIST',result.data)
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}