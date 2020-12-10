import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store/index";

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
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  let { token, userInfo } = store.state.user;
  if (userInfo.nickName) {
    next();
  } else {
    if (token) {
      if (to.path === "/login") {
        next("/");
      } else {
        const result = await store.dispatch("getUserByToken");
        if (result === "ok") {
          next();
        } else {
          next("/login?redirect=" + to.path);
        }
      }
    } else {
      if (
        to.path === "/order" ||
        to.path === "/order/myorder" ||
        to.path === "/order/myasset" ||
        to.path === "/order/mycollect" ||
        to.path === "pay"
      ) {
        next("/login?redirect=" + to.path);
      } else {
        next();
      }
    }
  }
});
export default router;
