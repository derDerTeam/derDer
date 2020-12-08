<template>
<div>
   <Top></Top>
  <Header></Header>
  
  <div class="orderContainer">
    
    <!-- 头部 -->
    <div class="header">
      <span>
        <a href="###">首页 
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </span>
      <span>
        <a href="###">个人中心
            <i class="iconfont icon-arrow-right"></i>
        </a>
      </span>
      <span>
        <a href="###">我的订单</a>
      </span>
    </div>
      <!-- 内容 -->
    <div class="content">
      <!-- 左边区域 -->
      <div class="leftContent" >
        <!-- 上 -->
          <div class="personal-profile">
              <img src="./images/002.jpg" alt="">
              <p>兮兮哈</p>
          </div>
        <!-- 下 -->
        <div class="personal-functional-list">
            <ul>
            <li>
              <span class="active-circle"></span>
              <a href="###">我的订单</a>
            </li>
            <li>
              <a href="###">我的资产</a>
            </li>
            <li>
                <a href="###">我的收藏</a>
            </li>
            <li>
              <a href="###">地址管理</a>
            </li>
            </ul>
        </div>
      </div>
      
      <!-- 右边区域 -->
      <div class="rightContent">
        <div class="personal-main">
          <!-- 导航切换 -->
            <div class="personal-selector">
              <ul>
                  <li><a href="###">待收货(0)</a></li>
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
  </div>
<FixedBar></FixedBar>
<Footer></Footer>
</div>
</template>

<script>
export default {
  name:''
}
</script>


<style lang="less" >
div{
  
  .orderContainer{
    // background-color: #999;
    width: 1080px;
    // background-color: aquamarine;
    margin: 0 auto;
  // 头部
  .header{
    height: 80px;
    line-height: 80px;
    span{
      font-size:13px ;
      a i{
        font-size: 10px;
        margin: 0 5px;
      }
    }
  }
  //内容区域
  .content{
    width: 1080px;
    height: 800px;
    // margin-bottom: 100px;
    // 左边内容
    .leftContent{
      float: left;
      width: 173px;
      height: 700px;
      background-color:#fafafa;
      position: relative;
      //  margin-bottom: 100px;
      .personal-profile{
        box-sizing: border-box;
        text-align: center;
        height: 157px;
        // line-height: 20px;
        background-color: #fafafa;
        border-bottom: 1px solid #999;
        img{
          width:54px ;
          height: 54px;
          border-radius: 50%;
          margin: 32px 0 5px 0;
        }
        p{
          font-size: 14px;
          
        }
      }
      .personal-functional-list{
        font-size: 14px;
        ul{
          position: relative;
          // text-align: center;
          // margin-top: 20px;
          // line-height: 50px;
          padding: 16px 0;
          li{
            display: block;
            width: 100%;
            margin: 30px 50px;
            position: relative;
            .active-circle{
             position: absolute;
             width: 6px;
            height: 6px;
            background-color:#845f3f ;
            border-radius: 50%;
            top: 50%;
            margin-top:-3px ;
            margin-left: -13px;
            }
          }
        }
      }
    }
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
  }
}
}
</style>