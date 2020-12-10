<template>
  <div>
    <Top></Top>
    <Header></Header>
    <div class="wrap">
      <div class="wrapper">
        <!-- 面包屑 -->
        <div class="m-secondary-navigator">
          <!-- 跳转到首页 -->
          <span>
            <a href="https://www.xiaomiyoupin.com/">首页</a>
            <i>></i>
          </span>
          <!-- 跳转到购物车 -->
          <span>
            <a href="https://trade.xiaomiyoupin.com/tr/cart">购物车</a>
            <i>></i>
          </span>
          <!-- 本页确认页 -->
          <span>
            <a href="#">确认页</a>
          </span>
        </div>
      <!-- 订单提交成功 -->
      <div class="pay-con">
        <!-- 订单信息 -->
        <div class="order-con">
          <!-- 订单内容 -->
          <div class="container">
            <!-- 订单提交完成 -->
            <h2 class="tit">订单提交成功!去付款咯~</h2>
            <!-- 60分钟内支付,否则取消订单 -->
            <div class="order-warm">请在60分钟内完成支付,超时后将取消订单</div>
            <ul class="order-detail">
              <!-- 订单编号 -->
              <li>
                <span class="item-label">订单编号:</span>
                {{orderId}}
              </li>
              <!-- 订单价格 -->
              <li>
                <span class="item-label">订单价格:</span>
                <span  class="price">2353.00 元</span>
              </li>
              <!-- 收货信息 -->
              <li>
                <span class="item-label">收货信息:</span>
                <span class="item">姓名</span>
                <span class="item">手机号</span>
                <span class="item">省</span>
                <span class="item">市</span>
                <span class="item">区/县</span>
                <span class="item">详细地址</span>
              </li>
              <!-- 商品名称 -->
              <li>
                <span class="item-label">商品名称:</span>
                <span>{{summary}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 支付方式 -->
        <div class="pay-method">
          <!-- 支付内容 -->
          <div class="container">
            <!-- 选择支付方式 -->
            <h2 class="tit">选择以下支付方式付款</h2>
            <!-- 支付平台 -->
            <h3 class="sub-tit">支付平台</h3>
            <!-- 支付的选择 -->
            <ul class="payment-list">
              <!-- 支付宝 -->
              <li >
                <img src="./images/alipay.png" alt="alipay">
              </li>
              <!-- 微信 -->
              <li>
                <img  src="./images/weixin.png" alt="weixin">
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import QRCode from 'qrcode'
export default {
  name:'Pay',
  data() {
    return {
       orderId:'',
       orderInfo:{}  //存储信息
    };
  },
 beforeMount(){
      this.orderId=this.$route.query.orderId
    },
   mounted(){
      this.getOrderInfo()
    },
    methods:{
      async getOrderInfo(){
        const result=await this.$API.reqOrderInfo(this.orderId)
        if(result.code===200){
          this.orderInfo=result.data
        }
      },

      async pay(){
        // 1.先让消息盒子能够弹出
        // 2.生成二维码weixin://wxpay/bizpayurl?pr=agV40y600 不是二维码的链接，但是得用它生成二维码链接
        try{
          const imgUrl=await QRCode.toDataURL(this.orderInfo.codeUrl);
          this.$alert(`<img src="${imgUrl}"/>`, 
          '请使用微信扫码支付', {
            dangerouslyUseHTMLString: true,
            center:true,
            showClose:false,
            showCancelButton:true,
            cancelButtonText:'支付遇到问题',
            confirmButtonText:'我已成功支付',
            beforeClose:(action,instance,done)=>{
              if(action==='confirm'){
              // // 点击按钮的逻辑
              // if(this.payStatus !==200){
              //   // success 	成功	绿色
              //   // error 	失败错误	红色
              //   // warning  	警告	橙色
              //   // info	提示 	灰色
              //   this.$message.error('请确保知乎成功，支付成功会自动跳转')
              // }

              // 后门
              clearInterval(this.timer)
              this.timer=null
              done()
              this.$router.push('/paysuccess')


              }else if(action==='cancel'){
                this.$message.error('请联系客服')
              // 点击取消按钮的逻辑
              // 清除定时器
              clearInterval(this.timer)
              this.timer=null
              done()
            }
          }
        })
        .then() //点击了确认按钮后的操作
        .catch(()=>{}) // 点击了取消按钮后的操作
        // 无论是点击确认按钮还是点击取消按钮，都会强制的关闭messageBox

        if(!this.timer){
          // 这个定时器就是来检查订单支付状态的
          // 每3秒后台发请求查询该订单的支付状态
          this.timer=setInterval(async()=>{
            const result = await this.$API.reqPayStatus(this.orderId)
            if(result.code===200){
              // 把支付的状态码存到data当中，用于用户点击按钮判断是否支付完成
              this.payStatus=200
            // 清除定时器
            clearInterval(this.timer)
            this.timer=null
            // 关闭messageBox
            this.$msgbox.close()
            // 跳转到支付成功页面
            // this.$router.push('/paysuccess')
            }  
          },3000)
        }
        }catch(error){
         
          alert('二维码生成失败')
        }
       
      }
    }
  }
</script>
<style lang="less" scoped>
.wrap {
  clearfix:after {
    clear: both;
    content: "";
    display: table;
  }
   
  .wrapper {
    display: block;
    border-top: 1px solid #e7e7e7;
    position: relative;
    margin: 0 auto 100px;
    width: 1073px;
    min-height: 400px;
    
//  面包屑 
    .m-secondary-navigator {
      padding: 30px 0;
      width: 100%;
      display: block;
      float: none;
      background: transparent repeat 0 0 none;
      font-size: 13px;

      span{
        i{
          
        }
        a {
          margin: 0 6px;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
    // 订单提交成功
    .pay-con{
      
      // 订单信息
      .order-con{
        width:100%;
        height: 250px;
      
        .container{
          width: 1080px;
          margin: 30px auto;
          //  订单提交完成 
          h2{
            margin-bottom: 26px;
            color: #333;
            font-size: 28px;
            font-weight: 400;
          }
          .order-detail{
            margin-top: 10px;
            font-size:14px;
            color: #333;
            
            li{
              line-height: 25px;
              span{
                margin-right:10px;
              }
              .price{
                color:#c00000;
              }
            }
          }
        }
      }  
      // 支付方式
      .pay-method{
        padding: 80px 0 150px;
        margin-top:30px;
        background: #fff;
        // 支付内容
        .container{
          width:100%;
          
          // 选择支付方式 
          .tit{
            height: 30px;
            line-height: 30px;
            padding-bottom: 10px;
            margin-bottom: 30px;
            border-bottom: 1px solid #e7e7e7;
            color: #333;
            font-size: 18px;
            font-weight: 400px;
          }
          // 支付平台
          .sub-tit{
            font-size:16px;
            font-weight: 400;
          }
          // 支付的选择
          .payment-list{
            margin-top: 15px;
            // 支付宝 微信
            li{
              width: 173px;
              height: 59px;
              float: left;
              margin-right: 14px;
              border: 1px solid #e7e7e7;
              img{
                width: 173px;
                height: 59px;
              }
            }

          }
        }
      }
    }
  }
}
</style>
