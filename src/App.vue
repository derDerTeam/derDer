<template>
  <div>
    <router-view></router-view>
    <!--使用组件-->
    <Pay />
  </div>
</template>

<script>
// 引入组件
import Pay from "@/views/Pay/index";
export default {
  name: "App", // 注册组件
  components: {
    Pay,
  },
};
</script>

<style lang="less" scoped></style>
