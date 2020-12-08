<<<<<<< HEAD
import Detail from '@/views/Detail'

export default[
    {
        path:'/detail',
        component:Detail
    }
]
const Product = () => import("@/view/product");
=======
import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");

>>>>>>> 8fad0e460242816f5b6f5e68e6ca7cc18b0ee5e2
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
];
