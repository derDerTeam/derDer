<template>
  <div>
    <!-- 右侧 -->
    <div class="rightContent">
        <div class="personal-main">
          <!-- 导航切换 -->
            <div class="personal-selector">
              <ul>
                  <li ><a href="###">待收货(0)</a></li>
                  <li><a href="###">待付款(0)</a></li>
                  <li><a href="###">已收货</a></li>
                  <li><a href="###">退款订单</a></li>
                  <li><a href="###">全部订单</a></li>
                  <li class="delete-tab-item">
                    <a href="###" >
                      <i class="iconfont icon-dustbin_icon"></i>
                      回收站</a>
                </li>
              </ul>
            </div>
        </div>
          
          <!-- 内容 -->
          <div class="m-img">
              <img src="./images/img.jpg" alt="">
              <p>没有相应的订单数据</p>
          </div>


      </div>


  </div>
</template>

<script>
  export default {
    name:''
  }
</script>

<style lang="less" scoped>
 //右边
    .rightContent{
      float: right;
      width: 900px;
      height: 700px; 
      background-color: #fafafa;
      //  margin-bottom: 100px;
     .personal-main{
      padding:11px 0 11px 60px;
       .personal-selector{
         height: 40px;
         line-height: 40px;
         position: relative;
         width: 100%;
         border-bottom: 1px solid #999;
         ul{
           li{
             position: relative; 
             display: inline-block;
             cursor: pointer;
             font-size: 16px;
             margin-right:25px ;
              
           }
          .delete-tab-item{
            position: absolute;
            right: -10px;
            vertical-align: middle;
          }
         }
        
       }
     }
     .m-img{
       width: 153px;
       height: 132px;
       margin: 0 auto;
       margin-top: 200px;
     }
     p{
       margin-left:15px ;
     }
    }
</style>