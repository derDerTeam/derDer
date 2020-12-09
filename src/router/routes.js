import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
const Product = () => import("@/views/Product");
const Login = () => import('@/views/Login');
const Register = () => import('@/views/Register');
import CartList from '@/views/CartList'

export default [{
    path: "/order",
    component: Order,
  },
  {
    path: "/search/:keyword?",
    component: Search,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/login",
    component: Login
  }, {
    path: "/register",
    component: Register
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
  {
    path: '/cartList',
    component: CartList
  }
];