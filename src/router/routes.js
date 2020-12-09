import CartList from '@/views/CartList'
import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");

export default [
  {
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
    path: "/",
    redirect: "/product",
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: '/cartList',
    component:CartList
}
];
