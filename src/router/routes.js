<<<<<<< HEAD


import Order from '@/views/Order'
import Search from '@/views/Search'

export default  [
 {
    path:'/order',
    component:Order,
              
  },
 {
    path:'/search',
    component:Search,
              
  },

 
]
=======
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
>>>>>>> 9a5ee7a42d9d0f826d20c8b83a2766b1afc173a9
