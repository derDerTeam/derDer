import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);
//解决vue-router 3.1版本的push replace的二次点击报错的问题
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if (onRejected === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(() => {});
  } else {
    return originPush.call(this, location, onResolved, onRejected);
  }
};
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onRejected === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {});
  } else {
    return originReplace.call(this, location, onResolved, onRejected);
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
