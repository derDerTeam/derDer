<template>
  <!-- <router-view></router-view> -->
   <!--使用组件-->
    <Trade />
</template>


<script>
// 引入组件
import Trade from '@/views/Trade/index'
export default {
  name: "App",
  // 注册组件
  components:{
    Trade
  }
};
</script>


<style lang="less" scoped></style>

