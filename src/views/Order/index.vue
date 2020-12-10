<template>
  <div>
    <Top></Top>
    <Header></Header>

    <div class="orderContainer">
      <!-- 头部 -->
      <div class="header">
        <span>
          <a href="javascript:;" @click="$router.push('/')"
            >首页
            <i class="iconfont icon-arrow-right"></i>
          </a>
        </span>
        <span>
          <a href="###"
            >个人中心
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
        <div class="leftContent">
          <!-- 上 -->
          <div class="personal-profile">
            <img :src="$store.state.user.userInfo.headImgUrl" alt="" />
            <p>{{ $store.state.user.userInfo.nickName }}</p>
          </div>
          <!-- 下 -->
          <div class="personal-functional-list">
            <ul>
              <li>
                <!-- <span class="active-circle"></span> -->
                <!-- <a href="###">我的订单</a> -->
                <router-link to="/order/myorder">我的订单</router-link>
              </li>
              <li>
                <router-link to="/order/myasset">我的资产</router-link>
                <!-- <a href="###">我的资产</a> -->
              </li>
              <li>
                <router-link to="/order/mycollect">我的收藏</router-link>
              </li>
              <li>
                <a href="###">地址管理</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右边区域 -->

        <router-view></router-view>
      </div>
    </div>

    <FixedBar></FixedBar>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less">
div {
  .orderContainer {
    // background-color: #999;
    width: 1080px;
    // background-color: aquamarine;
    margin: 0 auto;
    // 头部
    .header {
      height: 80px;
      line-height: 80px;
      span {
        font-size: 13px;
        a i {
          font-size: 10px;
          margin: 0 5px;
        }
      }
    }
    //内容区域
    .content {
      width: 1080px;
      height: 800px;
      // margin-bottom: 100px;
      // 左边内容
      .leftContent {
        float: left;
        width: 173px;
        height: 700px;
        background-color: #fafafa;
        position: relative;
        //  margin-bottom: 100px;
        .personal-profile {
          box-sizing: border-box;
          text-align: center;
          height: 157px;
          // line-height: 20px;
          background-color: #fafafa;
          border-bottom: 1px solid #999;
          img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            margin: 32px 0 5px 0;
          }
          p {
            font-size: 14px;
          }
        }
        .personal-functional-list {
          .router-link-active {
            color: plum;
          }

          font-size: 14px;
          ul {
            position: relative;
            // text-align: center;
            // margin-top: 20px;
            // line-height: 50px;
            padding: 16px 0;
            li {
              display: block;
              width: 100%;
              margin: 30px 50px;
              position: relative;
              .active-circle {
                position: absolute;
                width: 6px;
                height: 6px;
                background-color: #845f3f;
                border-radius: 50%;
                top: 50%;
                margin-top: -3px;
                margin-left: -13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
