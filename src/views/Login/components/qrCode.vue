<template>
  <!-- main -->
  <div class="content">
    <!-- 二维码 -->
    <div id="custom_display_2">
      <a class="qrCode" href="#" @click="changes_login_user"></a>
    </div>

    <div class="middle_Ifon">
      <h3 class="code_tit">小米帐号扫码登录</h3>
      <p>
        请使用小米手机/米家等小米旗下APP扫码登录
        <i class="iconfont iconwenhao"></i>
      </p>
    </div>

    <div class="middle_Qrcode">
      <img
        src="https://open.weixin.qq.com/connect/qrcode/0616ZThX3DzoGa1w"
        alt=""
        style="width: 270px;
    height: 270px; "
      />
    </div>

    <!-- 其他登录方式(父元素)  -->
    <div class="tablesArea">
      <!-- 其他登录方式  -->
      <div style="display: block;" class="other_login_type">
        <fieldset class="oth_type_tit">
          <legend align="center" class="oth_type_txt">小米旗下App</legend>
        </fieldset>

        <div id="apps-panel">
          <a
            class="app_item"
            href="https://g.home.mi.com/views/download-mihome.html"
            target="_blank"
          >
            <i class="iconAPP"></i>
            <span class="text">米家</span>
          </a>
          <a
            class="app_item"
            href="https://www.mi.com/appdownload/"
            target="_blank"
          >
            <i class="iconAPP"></i>
            <span class="text">小米商城</span>
          </a>
          <a
            class="app_item"
            href="https://mina.mi.com/download"
            target="_blank"
          >
            <i class="iconAPP"></i>
            <span class="text">小爱音箱</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      qrCode: true,
    };
  },
  methods: {
    // 切换到账号登陆
    changes_login_user() {
      this.$emit("update:qrState", this.qrCode);
    },
  },
};
</script>

<style lang="less" scoped>
// 父元素
.content {
  height: 577px;
  position: relative;

  // 二维码
  #custom_display_2 {
    a {
      width: 80px;
      height: 80px;
      line-height: 80px;
      font-size: 70px;
      text-align: center;

      &:hover {
        background-position: -240px 0;
      }
    }

    .qrCode {
      position: absolute;
      right: 0px;
      top: 0px;
      background: url(https://account.xiaomi.com/static/res/fa9e760/account-static/respassport/acc-2014/img/icon_ercode.png)
        no-repeat;
      background-position: -160px 0;
    }
  }

  // 扫码登陆text
  .middle_Ifon {
    padding: 56px 0 40px;
    text-align: center;
    color: #333;
    font-size: 14px;

    h3 {
      font-size: 24px;
      color: #ff6700;
      font-weight: normal;
      padding-bottom: 10px;
    }

    p i {
      width: 18px;
      height: 18px;
      background: url(https://account.xiaomi.com/static/res/fa9e760/account-static/respassport/acc-2014/img/icon_help.png);
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      margin: -1px 0 0 6px;
    }
  }

  // 二维码框
  .middle_Qrcode {
    width: 270px;
    height: 270px;
    margin: 0 auto;
    background: #333;
  }

  // 其他登陆方式(父元素)
  .tablesArea {
    width: 300px;
    position: absolute;
    left: calc(50% - 150px);

    // 其他登陆方式
    .other_login_type {
      color: #757575;
      padding-top: 30px;
      text-align: center;

      // oth_type_tit 分割线
      .oth_type_tit {
        color: #757575;
        text-align: center;
        border-top: 1px solid #e0e0e0;
        padding-top: 10px;

        // 分割 样式
        .oth_type_txt {
          color: #b0b0b0;
          margin: 0 auto;
          text-align: center;
        }
      }

      // 小米旗下 APP
      #apps-panel {
        display: flex;
        justify-content: center;

        .app_item {
          margin: 0 10px;
          display: flex;
          width: 48px;
          flex-direction: column;

          &:nth-child(1) {
            .iconAPP {
              height: 32px;
              width: 32px;
              line-height: 32px;
              margin: 0 auto;
              background: url(../imges/icon_apps.png);
              background-position: -32px 0;
            }
          }

          &:nth-child(2) {
            .iconAPP {
              height: 32px;
              width: 32px;
              line-height: 32px;
              margin: 0 auto;
              background: url(../imges/icon_apps.png);
              background-position: 0 -32px;
            }
          }

          &:nth-child(3) {
            .iconAPP {
              height: 32px;
              width: 32px;
              line-height: 32px;
              margin: 0 auto;
              background: url(../imges/icon_apps.png);
              background-position: -32px -32px;
            }
          }
          span {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
