// 所有接口请求函数
import Ajax from "@/ajax/Ajax";
import mockAjax from "@/ajax/MockAjax";
import Axios from "axios";

//例子
// export const reqCategoryList = () => {
//   return Ajax({
//     url: "/product/getBaseCategoryList",
//     method: "get",
//   });
// };


// 请求购物车列表数据
// export const reqShopCartList = () => {
//   return mockAjax({
//     url:'/product/newsList',
//     method:'get'
//   })
// }

// 请求添加购物车（添加或修改）
export const reqAddOrUpdateShopCart = (skuId,skuTital) => {
  return Ajax({
    url:'/product/newsList',
    method:'get'
  })
}

export const reqShopCartList = () => {
  return mockAjax({
    url:'/product/news',
    method:'get'
  })
}




