import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");
import ShopCart from '@/views/ShopCart'

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
    path: '/shopCart',
    component:ShopCart
}
];
