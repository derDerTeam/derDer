import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
const Product = () => import("@/views/Product");

export default [
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/",
    redirect: "/product",
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/pay",
    component: Pay,
  },

];
