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
