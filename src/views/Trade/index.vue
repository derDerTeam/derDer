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
        <!-- 收货地址 -->
        <div class="addressMain">
          <div class="address">
            <div class="title">收货地址</div>
            <div class="clearfix list">
              <div class="address-list">
                <div class="address-item">
                  <div class="addIcon">
                    <a
                      class="iconfont icon-iconaddaddresss"
                      data-src
                      href="javascript:;"
                    ></a>
                  </div>
                  <div class="addAds" @click="dialogFormVisible = true">
                    添加新地址
                  </div>
                  <!-- 弹出的添加新地址框 -->
                  <el-dialog title="添加收获地址">
                    <el-form :model="form">
                      <!-- 姓名 -->
                      <el-input
                        v-model="form.name"
                        autocomplete="off"
                        placeholder="姓名"
                      ></el-input>
                      <!-- 手机号 -->
                      <el-input
                        v-model="form.phoneNumber"
                        autocomplete="off"
                        placeholder="手机号"
                      ></el-input>
                      <!-- 省/市/区/街道 -->
                      <el-select
                        v-model="form.region"
                        placeholder="请选择省/市/区/街道"
                      >
                        <el-option label="省" value="shanghai"></el-option>
                        <el-option label="市" value="beijing"></el-option>
                        <el-option label="区" value="beijing"></el-option>
                        <el-option label="街道" value="beijing"></el-option>
                      </el-select>
                      <!-- 详细地址 -->
                      <textarea
                        placeholder="详细地址"
                        class="remarks-cont"
                        v-model="message"
                      ></textarea>
                      <!-- 邮政编号 -->
                        <el-input
                        v-model="form.postalCode"
                        autocomplete="off"
                        placeholder="邮政编号"
                      ></el-input>
                      <!-- 默认的复选框 -->
                      <el-checkbox v-model="checked">默认</el-checkbox>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false"
                        >取 消</el-button
                      >
                      <el-button
                        type="primary"
                        @click="dialogFormVisible = false"
                        >确 定</el-button
                      >
                    </div>
                  </el-dialog>
                </div>
              </div>
            </div>
          </div>
          <!-- 显示和收起更多收获地址 -->
          <div class="moreAddress">
            <span class="txt">显示更多收货地址</span>
            <a class="iconfont icon-xia" data-src href="javascript:;"></a>
          </div>
        </div>
        <!-- 有品精选 -->
        <div class="merchant clearfix">
          <div class="merchant-info clearfix">
            <div class="icon">
              <img
                src="./images/base.png"
                alt=""
                style="width:30px,height:30px"
              />
            </div>
            <span class="name">有品精选</span>
          </div>
          <!-- 购买商品的详细信息 -->
          <div class="merchant-spread">
            <div class="good-container clearfix">
              <!-- 是否支持7天无理由退货 -->
              <p class="pro-support">
                <a class="iconfont icon-gou" data-src href="javascript:;"></a>
                "支持7天无理由退货"
              </p>
              <!-- 购买商品的图片 -->
              <span class="img">
                <img src="" alt="" style="width:50px;height:50px" />
              </span>
              <!-- 商品的名字 -->
              <span class="name">
                <span class="m-sale-tag">有品秒杀</span>
                <span class="product-name"
                  >云米互联网净水器小蓝调系列 400G 净水器</span
                >
              </span>
              <!-- 商品的总价 -->
              <span class="total">
                <span>￥</span>
                <span class="txt">总价</span>
              </span>
              <!-- 单价 x 数量 -->
              <span class="price">
                "单价" "元x" "数量"
              </span>
            </div>
            <!-- 发票有关内容 -->
            <div class="form-invioce-item">
              <!-- 发票类型 -->
              <div class="form-item no-border">
                <span class="left-label">发票类型</span>
                <div class="select">
                  <div class="option-list">
                    <span class="option active">不开发票</span>
                    <span class="option">电子发票</span>
                  </div>
                </div>
              </div>
              <!-- 发票抬头 -->

              <!-- 发票遇到的一些问题 -->
              <div class="form-invoice-pro">
                <a
                  href="https://www.xiaomiyoupin.com/app/shop/content?id=o6448d039aa15c092"
                  target="_blank"
                  >常见发票问题>></a
                >
              </div>
            </div>
            <!-- 买家留言 -->
            <div class="form-item">
              <span class="left-label">买家留言</span>
              <!-- 填写留言 -->
              <span class="select">
                <textarea
                  type="text"
                  class="userMessage marginBottom"
                  placeholder="填写内容需与商家协商并确认，45字以内"
                  maxlength="45"
                ></textarea>
              </span>
            </div>
          </div>
        </div>
        <!-- 优惠券 -->
        <div class="checkout-coupons-con">
          <span>无可用优惠券</span>
        </div>
        <!-- 付款金额 -->
        <div class="checkout-summary clearfix">
          <div class="check-freeInfo fr">
            <div class="freeInfo-item">
              <span class="freeInfo-key">商品总价:</span>
              <span class="freeInfo-value">总价元</span>
            </div>
            <div class="freeInfo-item fee-map-item">
              <span class="freeInfo-key">运费:</span>
              <span class="freeInfo-value">0.00元</span>
            </div>
            <div class="freeInfo-item">
              <span class="freeInfo-key">优惠:</span>
              <span class="freeInfo-value">优惠了多少元</span>
            </div>
            <div class="total">
              <span class="freeInfo-key">合计:</span>
              <span class="freeInfo-value">￥最后的价格</span>
            </div>
          </div>
        </div>
        <!-- 去下单 -->
        <div class="bottom-pay">
          <a class="m-btns" href="javascript:;">去下单</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data() {
    return {

      // 默认复选框
       checked: true

      // 地址的数据
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {},
  computed: {},
  methods: {},
};
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

      span {
        a {
          margin: 0 6px;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
    // 收货地址
    .addressMain {
      .address {
        .title {
          display: block;
          margin-bottom: 15px;
          font-size: 19px;
          color: #333;
        }
        .clearfix {
          .cleafix:before {
            content: "";
            display: table;
          }
        }
        .list {
          .address-list {
            width: 250px;
            // height: 200px;
            // border: 1px solid #e7e7e7;
            // .unselected {
            //   border: 1px solid #e7e7e7;
            // }
            // .first {
            //   margin-left: 0;
            // }
            .address-item {
              width: 250px;
              border: 1px solid #e7e7e7;
              background: #fff;
              // float: left;
              margin-bottom: 10px;
              height: 200px;
              position: relative;
              .addIcon {
                margin-top: 68px;
                text-align: center;
                a {
                  text-decoration: none;
                }
                .iconfont {
                  display: inline-block;
                }
                .icon-iconaddaddresss {
                  width: 27px;
                  height: 27px;
                  background-position: 0 -664px;
                }
              }
              .addAds {
                margin: 0 auto;
                margin-top: "10px";
                text-align: center;
                color: #ccc;
                font-size: 14px;
              }
            }
          }
        }
      }
      .moreAddress {
        margin-top: 15px;
        margin-bottom: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 42px;
        line-height: 42px;
        background-color: rgb(218, 214, 214);
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
    // 有品精选
    .merchant {
      width: 100%;

      .merchant-info {
        margin-top: 55px;
        margin-bottom: 17px;
        height: 30px;
        .icon {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          .name {
            display: inline-block;
            height: 30px;
            line-height: 30px;
          }
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            border: none;
          }
        }

        .name {
          margin-left: 10px;
          font-size: 14px;
          color: #333;
          display: inline-block;
          height: 30px;
          line-height: 30px;
        }
      }
      .merchant-spread {
        border: 1px solid #e7e7e7;
        padding-left: 20px;
        padding-right: 20px;
        .good-container {
          position: relative;
          height: 90px;
          line-height: 90px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          overflow: hidden;
          border-bottom: 1px solid #e7e7e7;
          .pro-support {
            position: absolute;
            left: 65px;
            bottom: 5px;
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            color: #999;
          }
          .img {
            width: 50px;
            float: left;
            height: 90px;
            line-height: 90px;
            img {
              vertical-align: middle;
              border: none;
            }
          }
          .name {
            margin-left: 20px;
            color: #333;
            position: relative;
            float: left;
            height: 90px;
            line-height: 90px;
            .m-sale-tag {
              height: 20px;
              line-height: 20px;
              padding: 0 6px;
              margin-left: 8px;
              background-color: #c00000;
              color: #fff;
              font-size: 12px;
              vertical-align: 2px;
              border-radius: 2px;
            }
            .product-name {
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 400px;
            }
          }
          .total {
            text-align: right;
            width: 180px;
            color: #c00000;
            float: right;
            height: 90px;
            line-height: 90px;
            .txt {
              margin-right: 3px;
            }
          }
          .price {
            float: right;
            height: 90px;
            line-height: 90px;
          }
        }
        .form-invioce-item {
          .form-item {
            margin-left: 0;
            margin-right: 0;
            border-bottom: none;
            overflow: hidden;
            margin: 36px 20px 0;
            .left-label {
              float: left;
              height: 50px;
              line-height: 50px;
              font-size: 19px;
              color: #333;
            }
            .select {
              margin-left: 51px;
              float: left;
              .option-list {
                height: 50px;
                line-height: 50px;

                .option {
                  border: 1px solid #e7e7e7;
                  width: 247px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  display: inline-block;
                  height: 44px;
                  line-height: 42px;
                  background-color: #fff;
                  color: #333;
                  font-size: 14px;
                  cursor: pointer;
                  -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
                  -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
                  transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
                  + .option {
                    margin-left: 10px;
                  }
                }
                .active {
                  color: #845f4f;
                  border: 1px solid #845f3f;
                }
              }
            }
          }
          .form-invoice-pro {
            margin: 10px 0 0 126px;
            a {
              font-size: 14px;
              color: #67a3d9;
              text-decoration: undexline;
              cursor: pointer;
            }
          }
        }
        .form-item {
          margin-left: 0;
          margin-right: 0;
          border-bottom: none;
          overflow: hidden;
          margin: 36px 20px 0;
          .left-label {
            float: left;
            height: 50px;
            line-height: 50px;
            font-size: 19px;
            color: #333;
          }
          .select {
            margin-left: 51px;
            float: left;
            .userMessage {
              margin-top: 23px;
              resize: none;
              width: 762.5px;
              height: 100px;
              border: 1px solid #e7e7e7;
              outline: none;
              padding-left: 15px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              font-size: 14px;
              padding-top: 12px;
            }
            .marginBottom {
              margin-bottom: 23px;
            }
          }
        }
      }
    }
    // 优惠券
    .checkout-coupons-con {
      position: relative;
      float: left;
      height: 40px;
      margin-top: 10px;
      color: #c00000;
    }
    // 付款金额
    .checkout-summary {
      margin-top: 37px;
      text-align: right;
      border-bottom: 1px solid #e7e7e7;
      width: 100%;
      height: 157px;
      .check-freeInfo {
        text-align: right;
        float: right;
        .freeInfo-item {
          height: 25px;
          font-size: 14px;
          display: block;
          position: relative;
          .freeInfo-key {
            position: absolute;
            width: 126px;
            display: block;
          }
          .freeInfo-value {
            margin-left: 25px;
            margin-right: 20px;
            padding-left: 126px;
            display: block;
            color: #c00000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .total {
          font-size: 18px;
          margin-top: 37px;
          margin-bottom: 20px;
          .freeInfo-value {
            margin-right: 20px;
            color: #c00000;
          }
        }
      }
    }
    // 去下单
    .bottom-pay {
      margin-top: 45px;
      text-align: right;
      a {
        text-decoration: none;
      }
      .m-btns {
        color: #fff;
        background-color: #845f3f;
        border-color: #845f3f;
        min-width: 167px;
        height: 52px;
        line-height: 50px;
        font-size: 20px;
        display: inline-block;
        border-radius: 2px;
        text-align: center;
        border: 1px solid #666;
        box-sizing: border-box;
        padding: 0 6px;
        transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
      }
    }
  }
}
</style>
