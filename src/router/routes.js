import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");
<<<<<<< HEAD
import ShopCart from '@/views/ShopCart'
=======
const Login = () => import("@/views/Login");
const Register = () => import("@/views/Register");
import CartList from "@/views/CartList";
import MyOrder from '@/views/Order/MyOrder'
import MyAsset from '@/views/Order/MyAsset'
import MyCollect from '@/views/Order/MyCollect'


>>>>>>> b590e1704a3646cfc505346f5e940f03506abc93

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
<<<<<<< HEAD
    path: '/shopCart',
    component:ShopCart
}
=======
    path: "/cartList",
    component: CartList,
  },
>>>>>>> b590e1704a3646cfc505346f5e940f03506abc93
];
