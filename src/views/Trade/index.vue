<template>
  <div class="express-append">
    <div class="wrapper">
      <div class="m-secondary-navigator">
        <span>
          <a href="###">首页</a>
        </span>
        <span>
          <a href="###">购物车</a>
        </span>
        <span>
          <a href="#">确认页</a>
        </span>
      </div>
      <div>
        <div class="address">
          <div class="title">收获地址</div>
          <div class="clearfix list">
            <div class="address-list">
              <div class="address-item first unselected toAddAddress">
                <div class="addIcon">
                  <a
                    class="m-icons m-icons-addAddress"
                    data-src
                    href="javascript:;"
                  ></a>
                </div>
                <div class="addAds">添加新地址</div>
              </div>
            </div>
          </div>
        </div>
        <div class="moreAddress">
          <span class="txt">显示更多收获地址</span>
          <a
            class="m-icons m-icons-m-icons-down1"
            data-src
            href="javascript:;"
          ></a>
        </div>
      </div>
      <div class="merchant clearfix">
        <div class="merchant-info clearfix">
          <div class="icon">
            <img
              src="images/base.png"
              alt="有品精选"
              style="width:30px,height:30px"
            />
          </div>
          <span class="name">有品精选</span>
          <span class="threshold"></span>
        </div>
        <div class="merchant-spred">
          <div class="good-container clearfix">
            <p class="pro-support">
              <a
                class="m-icons m-icons-service "
                data-src
                href="javascript:;"
              ></a>
              "支持7天无理由退货"
            </p>
            <span class="img">
              <img src="" alt="" style="width:50px;height:50px" />
            </span>
            <span class="name">
              <span class="m-sale-tag">有品秒杀</span>
              <span class="product-name">净水器</span>
            </span>
            <span class="total">
              <span>￥</span>
              <span class="txt">总价</span>
            </span>
            <span class="price">
              "单价" "元x" "数量"
            </span>
          </div>
          <div class="form-invioce-item">
            <div class="form-item no-border">
              <span class="left-label">发票类型</span>
              <div class="select">
                <div class="option-list">
                  <span class="option active">不开发票</span>
                  <span class="option">电子发票</span>
                </div>
              </div>
            </div>
          </div>
          <div class="from-invoice-pro">
              <a href="https://www.xiaomiyoupin.com/app/shop/content?id=o6448d039aa15c092" target="_blank">常见发票问题>></a>
          </div>
        </div>
        <div class="form-item">
            <span class="left-label">买家留言</span>
            <span class="select">
                <textarea type="text" class="userMessage marginBottom" placeholder="填写内容需与商家协商并确认，45字以内" maxlength="45"></textarea>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.express-append {
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

    .m-secondary-navigator {
      padding: 30px 0;
      width: 100%;
      display: block;
      float: none;
      background: transparent repeat 0 0 none;
      font-size: 13px;

      span:after {
        content: ">";
        a {
          margin: 0 6px;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
    .address {
      .title {
        display: block;
        margin: bottom 15px;
        font-size: 19px;
        color: #333;
      }
      .clearfix list {
        .cleafix:before {
          content: "";
          display: table;
        }
        .address-list {
          width: 250px;
          .unselected {
            border: 1px solid #e7e7e7;
          }
          .first {
            margin-left: 0;
          }
          .address-item {
            background: #fff;
            float: left;
            margin-bottom: 10px;
            height: 200px;
            position: relative;
            .addIcon {
              margin-top: 68px;
              text-align: center;
              .m-icons {
                display: inline-block;
              }
              .m-icons-addAddress {
                width: 27px;
                height: 27px;
                background-position: 0 -664px;
              }
            }
            .toAddAddress.addAds {
              margin: 0 auto;
              margin-top: "10px";
              text-align: center;
              color: #ccc;
              font-size: 14px;
            }
          }
        }
      }
      .moreAddress {
        margin-top: 15px;
        margin-bottom: 8px;
        box-sizing: border-box;
        height: 42px;
        line-height: 42px;
        background-color: #fafafa;
        width: 100%;
        text-align: center;
        color: #999;
        font-size: 14px;
        transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        cursor: pointer;
        .txt {
          margin-right: 8px;
          line-height: 42px;
          text-align: center;
          color: #999;
          font-size: 14px;
        }
        .m-icons-down1 {
          width: 12px;
          height: 12px;
          background-position: 0 -102px;
        }
        .m-icons {
          display: inline-block;
        }
      }
    }
    .merchant {
        
    }
  }
}
</style>
