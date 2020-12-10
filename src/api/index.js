import Ajax from "@/ajax/Ajax";
import MockAjax from "@/ajax/MockAjax";
import Axios from "axios";

//例子
export const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

// 请求详情页的相关推荐
export const reqRecommendList = () => {
  return MockAjax({
    url:"/detail",  //不确定怎么写
    method:"get"
  })
}
