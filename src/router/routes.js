import Detail from '@/views/Detail'

export default[
    {
        path:'/detail',
        component:Detail
    }
]
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
