<<<<<<< HEAD

=======
import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
const Product = () => import("@/views/Product");
>>>>>>> ee7deb7f4ceab4aa1f8745c03b76ac138f3c8def

export default [
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/search",
    component: Search,
  },
<<<<<<< HEAD

 
]

import Detail from '@/views/Detail'

export default[
    {
        path:'/detail',
        component:Detail
    }
]
const Product = () => import("@/view/product");
export default [
=======
>>>>>>> ee7deb7f4ceab4aa1f8745c03b76ac138f3c8def
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
<<<<<<< HEAD

=======
>>>>>>> ee7deb7f4ceab4aa1f8745c03b76ac138f3c8def
