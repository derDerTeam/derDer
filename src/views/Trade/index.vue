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
          </span>
          <!-- 跳转到购物车 -->
          <span>
            <a href="https://trade.xiaomiyoupin.com/tr/cart">购物车</a>
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
                <!-- 添加新地址 -->
                <!--              
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" >
  <el-table >
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>


<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" >
  <el-form :model="form">
    <el-form-item label="活动名称" >
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" >
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog> -->
                <div class="address-item">
                  <div class="addIcon">
                    <a
                      class="iconfont icon-iconaddaddresss"
                      data-src
                      href="javascript:;"
                    ></a>
                  </div>
                  <div class="addAds">添加新地址</div>
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
          <div class="merchant-spred">
            <div class="good-container clearfix">
              <p class="pro-support">
                <a class="iconfont icon-gou" data-src href="javascript:;"></a>
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
              <a
                href="https://www.xiaomiyoupin.com/app/shop/content?id=o6448d039aa15c092"
                target="_blank"
                >常见发票问题>></a
              >
            </div>
          </div>
          <div class="form-item">
            <span class="left-label">买家留言</span>
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
    </div>
    <Footer></Footer>
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
    .addressMain {
      .address {
        .title {
          display: block;
          margin: bottom 15px;
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
    .merchant {
      width: 100%;
      height: 494px;

      .merchant-info {
        margin-top: 55px;
        margin-bottom: 17px;
        height: 30px;
        .icon {
          display: inline-block;
          height: 30px;
          line-height: 30px;
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
      .merchant-spred {
        border: 1px solid #e7e7e7;
        padding-left: 20px;
        padding-right: 20px;
        .good-container {
          position: relative;
          height: 90px;
          line-height: 90px;
          box-sizing: border-box;
          overflow: hidden;
          border-bottom: 1px solid #e7e7e7;
          .pro-support {
            position: absolute;
            left: 65px;
            bottom: 3px;
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            color: #999;
          }
          .img {
            margin-top: 20px;
            width: 50px;
            float: left;
            height: 90px;
            line-height: 90px;
          }
          .name {
            margin-left: 20px;
            color: #333;
            position: relative;
            float: left;
            height: 90px;
            line-height: 90px;
            .m-sale-tag{
              height: 20px;
              line-height: 20px;
              padding: 0 6px;
              margin-left: 8px;
              background-color:#c00000;
              color: #fff;
              font-size: 12px;
              vertical-align: 2px;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
