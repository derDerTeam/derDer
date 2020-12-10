import Order from "@/views/Order";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
const Product = () => import("@/views/Product");
<<<<<<< HEAD
<<<<<<< HEAD
import ShopCart from '@/views/ShopCart'
=======
=======
>>>>>>> d21d6788b16a87cd8524be5fa3313da3acc3725b
const Login = () => import("@/views/Login");
const Register = () => import("@/views/Register");
import CartList from "@/views/CartList";
import MyOrder from '@/views/Order/MyOrder'
import MyAsset from '@/views/Order/MyAsset'
import MyCollect from '@/views/Order/MyCollect'
<<<<<<< HEAD


>>>>>>> b590e1704a3646cfc505346f5e940f03506abc93
=======
>>>>>>> d21d6788b16a87cd8524be5fa3313da3acc3725b



export default [{
    path: "/order",
    component: Order,
<<<<<<< HEAD
    children:[
      {
=======
    children: [{
>>>>>>> d21d6788b16a87cd8524be5fa3313da3acc3725b
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
<<<<<<< HEAD
    props: (route)=>({keyword:route.params.keyword}),
=======
    props: (route) => ({
      keyword: route.params.keyword
    }),
>>>>>>> d21d6788b16a87cd8524be5fa3313da3acc3725b
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
=======
    path: "/cartList",
    component: CartList,
  }, {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/pay",
    component: Pay,
  },
];
>>>>>>> d21d6788b16a87cd8524be5fa3313da3acc3725b
