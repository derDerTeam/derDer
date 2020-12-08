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
>>>>>>> 14e9b5d2b2905cf130c17a10ed59db3f1090006d
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
