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
