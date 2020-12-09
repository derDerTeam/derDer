import Ajax from "@/ajax/Ajax";

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
