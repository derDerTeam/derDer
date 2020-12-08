<template>
  <div class="m-fixedBar">
     <ul>
       <li>
         <a class="iconfont icon-kefu" href="#"></a>
         <p>联系客服</p>
       </li>
     </ul>
  </div>
</template>

<script>
  export default {
    name:''
  }
</script>

<style lang="less" scoped>
.m-fixedBar{
  position: fixed;
  top: 220px;
  right: 10px;
  width: 71px;
  padding: 0 5px;
  background: palevioletred;
  ul li{
    padding: 10px;
    font-size: 12px;
    text-align: center;
    
  }
}
</style>