<template>
  <div>
    <!-- 右侧 -->
    <div class="rightContent">
        <div class="personal-main">
          <!-- 导航切换 -->
            <div class="personal-selector">
              <ul>
                  <li><a href="###">优惠卷</a></li>
                 
              </ul>
            </div>
        </div>
          
          <!-- 内容 -->
          <div class="m-content">
            <input type="text" placeholder="请输入优惠码">
            <button>确认兑换</button>
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

              a{
                font-size: 20px;
                display: block;
                margin-bottom: 10px;
                color: palevioletred;
              }
            }
            .delete-tab-item{
              position: absolute;
              right: -10px;
              vertical-align: middle;
            }
          }
          
        }
      }
      .m-content{
        margin-left: 60px;
        margin-top: 30px;
        input{
          width: 300px;
          height: 30px;
          margin-right: 30px;
        }
        button{
          width: 100px;
          height: 30px;
        
          background-color: #fff;
        }
      }
    }
</style>