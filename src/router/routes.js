import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
const Product = () => import("@/views/Product");
import ShopCart from "@/views/ShopCart";
const Login = () => import("@/views/Login");
const Register = () => import("@/views/Register");
import MyOrder from "@/views/Order/MyOrder";
import MyAsset from "@/views/Order/MyAsset";
import MyCollect from "@/views/Order/MyCollect";

export default [
  {
    path: "/order",
    component: Order,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "myasset",
        component: MyAsset,
      },
      {
        path: "mycollect",
        component: MyCollect,
      },
      {
        path: "",
        component: MyOrder,
      },
    ],
  },
  {
    path: "/search/:keyword?",
    component: Search,
    props: (route) => ({
      keyword: route.params.keyword,
    }),
    name: "search",
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    redirect: "/product",
  },
  {
    path: "/detail",
    component: Detail,
    name: "detail",
  },
  {
    path: "/shopCart",
    component: ShopCart,
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
