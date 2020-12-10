// 所有接口请求函数
import Ajax from "@/ajax/Ajax";
import mockAjax from "@/ajax/MockAjax";
import Axios from "axios";

// 请求添加购物车（添加或修改）
export const reqAddOrUpdateShopCart = (skuId, skuTital) => {
  return Ajax({
    url: "/product/newsList",
    method: "get",
  });
};

export const reqShopCartList = () => {
  return Ajax({
    url: "/shop/shopcart",
    method: "get",
  });
};

//例子
export const reqBannerList = () => {
  return Ajax({
    url: "/product/bannerList",
    method: "get",
  });
};
export const reqCategoryList = () => {
  return Ajax({
    url: "/product/categoryList",
    method: "get",
  });
};
export const reqCateDetailList = (id) => {
  return Ajax({
    url: "/product/cateDetailList",
    params: { id },
    method: "get",
  });
};
export const reqCrowdList = () => {
  return Ajax({
    url: "/product/crowdList",
    method: "get",
  });
};
export const reqSeckillList = () => {
  return Ajax({
    url: "/product/seckillList",
    method: "get",
  });
};
export const reqNewsList = () => {
  return Ajax({
    url: "/product/newsList",
    method: "get",
  });
};
export const reqRecommendList = () => {
  return Ajax({
    url: "/product/recommendList",
    method: "get",
  });
};
export const reqSearchList = () => {
  return Ajax({
    url: "/search/searchList",
    method: "get",
  });
};

// 请求详情页的相关推荐
export const reqRecommendResponseList = () => {
  return Ajax({
    url: "/product/detail",
    method: "get",
  });
};

export const reqTradeInfo = () => {
  return Ajax({
    url: "/product/trade",
    method: "get",
  });
};

export const reqRgs = () => {
  return Ajax({
    url: "/product/trade",
    method: "get",
  });
};
//获取登录验证码
export const reqCode = () => {
  return Ajax({
    url: "/userInfo/code",
    method: "get",
  });
};
export const reqLogin = (data) => {
  return Ajax({
    url: "/userInfo/login",
    method: "post",
    data,
  });
};
export const reqUserByToken = (token) => {
  return Ajax({
    url: "/userInfo/byToken",
    method: "get",
    params: {
      token,
    },
  });
};
