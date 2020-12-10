import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");
const Login = () => import("@/views/Login");
const Register = () => import("@/views/Register");
import CartList from "@/views/CartList";
import MyOrder from '@/views/Order/MyOrder'
import MyAsset from '@/views/Order/MyAsset'
import MyCollect from '@/views/Order/MyCollect'



export default [
  {
    path: "/order",
    component: Order,
    children:[
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
    ]
  },
  {
    path: "/search/:keyword?",
    component: Search,
    props: (route)=>({keyword:route.params.keyword}),
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
    path: "/cartList",
    component: CartList,
  },
];
