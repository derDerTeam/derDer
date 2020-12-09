<template>
  <div class="m-fixedBar">
     <ul>
       <li>
         <a class="iconfont icon-kefu" href="#"></a>
         <p>联系客服</p>
         <div class="fixedService">
           <img src="./images/007.jpg" alt="">
         </div>
       </li>
       <li>
         <a class="iconfont icon-richscan_icon" href="#"></a>
         <p>下载App</p>
          <div class="fixedService">
           <img src="./images/005.png" alt="">
         </div>
       </li>
       <li>
         <a class="iconfont icon-liwu" href="#"></a>
         <p>新人有礼</p>
          <div class="fixedService">
           <img src="./images/008.jpg" alt="">
         </div>
       </li>
       <li>
         <a class="iconfont icon-weixin" href="#"></a>
         <p>关注微信</p>
         <div class="fixedService">
           <img src="./images/005.png" alt="">
         </div>
       </li>
       <li >
         <a class="iconfont icon-huojian" href="javascript:scroll(0,0)" ></a>
         <p>回到顶部</p>
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
  top: 200px;
  right: 10px;
  width: 56px;
  padding: 0 5px;
  background: #fff;
  z-index: 999;
  ul{
   li{
    padding: 10px;
    font-size: 12px;
    text-align: center;
    border-bottom:1px solid #e7e7e7;
    cursor: pointer;
    position: relative;
    a{
      font-size: 20px; 
      // display: block; 
    }
    p{
      font-size: 10px;
      margin-top: 5px;
    }
    .fixedService{
      width: 150px;
      // height: 240px;
      position: absolute;
      left: -162px;
      top: 0;
      display: none;
      img{
        display: block;
        width: 150px;
        height: 180px;
      }
    }
    
   }
   li:hover .fixedService{
     display:block;
   }
  }
   
   
}
</style>