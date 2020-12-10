<template>
  <div id="content">
    <div class="layout">
      <!-- mi_logo -->
      <div class="external_logo_area">
        <a class="milogo" href="javascript:void(0)"></a>
      </div>

      <!-- mi_title -->
      <div class="title-item">
        <h4 class="title_big30">注册小米帐号</h4>
      </div>

      <!-- 注册列表 -->
      <div class="regist_list">
        <div class="regbox">
          <h4 class="tit_normal">国家/地区</h4>
          <div class="reg-select-regions">
            <div class="display_box">
              <p class="result-select-regions">中国</p>
              <i class="icon_cirarr"></i>
            </div>
          </div>
          <div class="region_tip_text">
            成功注册帐号后，国家/地区将不能被修改
          </div>
          <h4 class="tit_normal">手机号码</h4>

          <label class="labelbox" for="">
            <div class="cycode_box" _region="CN" _def_method="PH">
              <div class="reg-phone-select-cty">
                <div class="tits">
                  <p id="select-cycode-result">+86</p>
                  <i class="icon_arrow"></i>
                </div>
              </div>
            </div>
            <input
              type="tel"
              name="phone"
              data-type="PH"
              v-model="phone"
              placeholder="请输入手机号码"
            />
          </label>

          <div class="sub">
            <button type="submit" @click="register">立即注册</button>
          </div>
        </div>
      </div>

      <div class="privacy_box">
        <div class="outsideBox">
          <span>已阅读并同意：小米</span>
          <a
            href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html"
            class="inspect_link"
            title="用户协议"
            target="_blank"
            >用户协议</a
          >
          <span>和</span>
          <a
            href="https://privacy.mi.com/miaccount/zh_CN/"
            class="inspect_link"
            title=" 隐私政策 "
            target="_blank"
          >
            隐私政策
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    register() {
      if (this.phone.length === 11) {
        this.$alert("注册成功");
        this.$router.push("/login");
      } else {
        this.$alert("手机号不合法");
        return;
      }
    },
  },
};
</script>

<style lang="less" scoped>
#content {
  height: 550px;
  font-size: 14px;
  padding: 0 34px 34px;

  // mi_logo
  .external_logo_area {
    padding-bottom: 40px;

    .milogo {
      width: 49px;
      height: 48px;
      margin: 0 auto;
      display: block;
      cursor: default;
      background: url(../imges/milogo.png);
    }
  }

  // mi_title
  .title-item {
    text-align: center;

    .title_big30 {
      font-size: 30px;
      font-weight: normal;
      color: #333;
      line-height: 1.5;
    }
  }

  // 注册列表
  .regist_list {
    width: 100%;

    // 居中
    .regbox {
      margin: 0 auto;
      width: 332px;
      padding: 30px 0;
      line-height: 20px;

      // 国家地区
      .tit_normal {
        line-height: 20px;
        padding-bottom: 5px;
        color: #333;
        font-weight: normal;
      }

      .reg-select-regions {
        padding-bottom: 15px;
        position: relative;

        .display_box {
          height: 40px;
          padding-left: 14px;
          line-height: 40px;
          display: inline-block;
          vertical-align: middle;
          border: 1px solid #e8e8e8;
          // border-right: none;
          color: #555;

          .result-select-regions {
            float: left;
            width: 275px;
            border-right: 1px solid #e8e8e8;
            cursor: pointer;
          }

          .icon_cirarr {
            float: right;
            background: url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png);
            width: 16px;
            height: 16px;
            margin: 11px 12px 0 12px;
          }
        }
      }

      // 成功注册帐号后，国家/地区将不能被修改
      .region_tip_text {
        margin-top: -10px;
        margin-bottom: 15px;
      }

      // 手机号码_title
      .tit_normal {
        padding-bottom: 5px;
        color: #333;
        font-weight: normal;
      }

      .labelbox {
        margin-left: -1px;
        position: relative;
        z-index: 3;
        height: 42px;
        line-height: 42px;
        display: inline-block;
        padding-bottom: 15px;

        .cycode_box {
          float: left;
          border-right: 1px solid #e8e8e8;

          .tits {
            width: 54px;
            text-align: center;
            height: 40px;
            padding-left: 14px;
            line-height: 40px;
            display: inline-block;
            vertical-align: middle;
            border: 1px solid #e8e8e8;
            color: #555;
            cursor: pointer;
            border-right: 0 none;

            p {
              width: auto;
              float: left;
              border-right: 0 none;
            }

            .icon_arrow {
              float: left;
              margin: 17px 0 0 10px;
              border-width: 5px;
              border-style: solid;
              border-color: #9d9d9d transparent transparent transparent;
            }
          }
        }

        input {
          margin-top: 2px;
          width: 240px;
          height: 20px;
          line-height: 20px;
          padding: 10px;
          display: inline-block;
          outline: none;
          border: 1px solid #e8e8e8;
          border-left: none;
        }
      }

      // 按钮
      .sub {
        width: 330px;
        height: 42px;

        button {
          width: 330px;
          height: 42px;
          background-color: #ff6700;
          margin-top: 15px;
          border: 1px solid rgba(186, 186, 186, 0.3);
          *border: 0 none;
          color: #fff;
        }
      }
    }
  }

  .privacy_box {
    text-align: center;
    padding-top: 50px;
    color: #9d9d9d;

    .outsideBox {
      margin: 0 auto;
      width: 260px;
      display: flex;
      justify-content: center;

      .inspect_link {
        display: inline-block;
        color: #333;
        padding: 0 2px;
      }
    }
  }
}
</style>
