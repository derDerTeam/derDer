<<<<<<< HEAD
import Detail from '@/views/Detail'

export default[
    {
        path:'/detail',
        component:Detail
    }
]
=======
const Product = () => import("@/view/product");
export default [
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/",
    redirect: "/product",
  },
];
>>>>>>> 3796b95e1ef4f9c0003b2a79d1c12ef211c50c7f
