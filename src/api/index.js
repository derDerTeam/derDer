import Ajax from "@/ajax/Ajax";
import mockAjax from "@/ajax/mockAjax";
import Axios from "axios";

//例子
export const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};


// 请求获取订单交易信息
// /api/order/auth/trade
// get

// export const reqTradeInfo=()=>{
//   return Ajax({
//       url:'/order/auth/trade',
//       method:'get'
//   })
// }