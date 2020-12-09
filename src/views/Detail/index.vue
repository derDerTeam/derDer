<template>
  <div>
    <Top></Top>
    <Header></Header>
    <div class="container">
      <!-- 主要区域 -->
      <div class="mainContainer clearfix">
        <!-- 左侧展示区域 -->
        <div class="leftPreview clearfix">
          <!-- 左侧大图 -->
          <div class="zoom">
            <img src="./images/3.jpg" alt="" />
          </div>
          <!-- 右侧缩略图 -->
          <div class="imageList">
            <img src="./images/3.jpg" alt="" />
            <img src="./images/3.jpg" alt="" />
            <img src="./images/3.jpg" alt="" />
            <img src="./images/3.jpg" alt="" />
          </div>
        </div>

        <!-- 右侧内容区域 -->
        <div class="rightInfo clearfix">
          <div class="title">
            谷悦医用外科口罩 绑带式 50只/盒 <span class="kill">有品秒杀</span>
          </div>
          <div class="news">
            <span class="reduction"
              >健康12.12年终大促乐购节，底价预售至高100抵2400，整点1元秒底价预售</span
            >
            <span class="introduce"
              >三层过滤，阻隔病菌，BFE≥95%，亲肤无刺激</span
            >
            <p class="introduce">
              促销:
              <span class="seckill">有品秒杀</span>
              <span class="sale">商品限购100件，超出限购数量不可购买</span>
            </p>
          </div>
          <div class="card">
            <p class="price">
              售价 <span class="icon">¥</span> <span class="priceOne">39</span>
              <span class="priceTwo">¥149</span>
            </p>
            <p>
              服务 <i class="iconfont icon-jinggao"></i>
              <i class="iconfont icon-xuanzhong"></i> 包邮<i
                class="iconfont icon-xuanzhong"
              ></i>
              三方店铺<i class="iconfont icon-xuanzhong"></i> 不支持7天无理由
              <span class="service"
                ><i class="iconfont icon-xuanzhong"></i
                >由山东欣悦健康科技有限公司发货并提供售后
                <span class="business">(查看商家资质)</span>
              </span>
            </p>
          </div>

          <div class="detail">
            <p class="address">
              配送区域
              <span class="addressdetail">北京 北京市 海淀区 有货修改</span>
            </p>
            <p class="specs">
              规格 <span class="style">绑带式（50片/盒）</span>
              <span class="style">耳挂式（50片/盒）</span>
            </p>
            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" class="itxt" value="1" />
                <a href="javascript:" class="plus">+</a>
                <a href="javascript:" class="mins">-</a>
              </div>
              <div class="add">
                <a href="javascript:">加入购物车</a>
              </div>
              <div class="customer">
                <i class="iconfont icon-kefu"></i>
                <span>客服</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tabs切换 -->
      <div class="showContainer">
        <!-- 左侧 -->
        <!-- <div class="tab clearfix">
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="产品介绍">
              <img src="./images/tab1.jpg" alt="" /> -->
        <!-- <img src="./images/tab1.jpg" alt="" />
            <img src="./images/tab1.jpg" alt="" /> -->
        <!-- </el-tab-pane>
            <el-tab-pane label="评论">
              <el-button type="warning">警告按钮</el-button>
              <el-button>默认按钮</el-button>
            </el-tab-pane>
            <el-tab-pane label="常见问题">
              <img src="./images/problem.jpg" alt="" />
            </el-tab-pane>
          </el-tabs>
        </div> -->

        <div class="tab clearfix">
          <ul>
            <li><a href="javascript:;">产品介绍</a></li>
            <li><a href="javascript:;">评论</a></li>
            <li><a href="javascript:;">常见问题</a></li>
          </ul>
        </div>
        <!-- 右侧 -->
        <div class="recommend">
          <div class="title">
            <span>——</span>
            <span class="style">相关推荐</span>
            <span>——</span>
          </div>
          <div class="content">
            <img src="./images/3.jpg" alt="" />
            <p class="nameOne">哈哈哈</p>
            <div class="coll">
              <p class="nameTwo">hhhhhhhh</p>
              <p class="nameThree">￥249</p>
            </div>
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
  name: "",
};
</script>

<style lang="less" scoped>
.container {
  /*主要区域*/
  .mainContainer {
    margin: 60px auto 0;
    width: 1080px;
    height: 500px;
    /*左侧图片区域*/
    .leftPreview {
      width: 470px;
      height: 400px;
      float: left;
      /*大图*/
      .zoom img {
        cursor: pointer;
        width: 350px;
        height: 430px;
        float: left;
      }
      // 小图
      .imageList img {
        width: 100px;
        height: 100px;
        float: right;
        margin: 0 10px 10px 10px;
      }
    }
    /*右侧内容展示*/
    .rightInfo {
      // margin-top:170px;
      // margin-left:134px;
      width: 560px;
      height: 400px;
      float: right;
      margin-left: 50px;
      // position: absolute;
      // top: 10px;
      // left: 550px;
      .title {
        font-size: 20px;
        color: #333;
        margin-bottom: 10px;
      }
      .news {
        width: 460px;
        margin-bottom: 20px;
        .reduction {
          color: #c00000;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .introduce {
          color: #999999;
          font-size: 12px;
          margin: 20px 0;
          .seckill {
            padding: 0 5px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border: 1px solid #c00002;
            color: #c00000;
            margin-right: 6px;
            font-size: 12px;
            cursor: pointer;
          }
          .sale {
            color: black;
          }
        }
      }

      .kill {
        margin-top: 3px;
        margin-left: 5px;
        padding: 2px 5px;
        font-size: 12px;
        line-height: 14px;
        color: #fff;
        background-color: #c00000;
        border-radius: 2px;
      }
      .card {
        margin: 20px 0;
        padding: 20px 10px;
        background-color: #f9f9f9;
        .price {
          margin-bottom: 10px;
          .icon {
            margin-left: 5px;
            color: #c00000;
            font-size: 14px;
          }
          .priceOne {
            font-size: 26px;
            color: #c00000;
          }
          .priceTwo {
            font-size: 12px;
            color: #999999;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
        .icon-jinggao {
          font-size: 10px;
          color: #c00000;
        }
        .icon-xuanzhong {
          font-size: 20px;
          margin-left: 10px;
          color: #c00000;
        }
        .service {
          font-size: 16px;
          display: block;
          margin-left: 40px;
        }
        .business {
          color: #9f8052;
        }
      }
      .detail {
        font-size: 14px;
        margin-left: 5px;
        .address {
          margin-bottom: 10px;
          .addressdetail {
            margin-left: 20px;
          }
        }
        .specs {
          margin: 40px 0;
          .style {
            padding-left: 10px;
            color: #333;
            border: 1px solid #333;
            padding: 5px;
            margin-left: 20px;
            &.active {
              color: #845f3f;
            }
          }
        }
        .cartWrap {
          margin-top: 40px;
          .controls {
            width: 48px;
            position: relative;
            float: left;
            margin-right: 15px;

            .itxt {
              width: 48px;
              height: 47px;
              border: 1px solid #ddd;
              color: #555;
              float: left;
              border-right: 0;
              text-align: center;
            }

            .plus,
            .mins {
              width: 25px;
              text-align: center;
              height: 27px;
              line-height: 27px;
              background: #f1f1f1;
              color: #666;
              position: absolute;
              right: -18px;
              border: 1px solid #ccc;
              text-decoration: none;
            }

            .mins {
              right: -28px;
              top: 21px;
              border-top: 0;
            }

            .plus {
              right: -28px;
            }
          }
          .add {
            float: left;
            a {
              background-color: #845f3f;
              padding: 0 25px;
              font-size: 16px;
              color: #fff;
              height: 50px;
              line-height: 50px;
              display: block;
              text-decoration: none;
              margin-left: 30px;
            }
          }
          .customer {
            float: left;
            padding: 5px;
            margin-left: 30px;
            height: 40px;
            width: 30px;
            color: #999999;
            border: 1px solid #999999;
            text-align: center;
            i {
              font-size: 20px;
            }
            span {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
  // tab切换
  .showContainer {
    margin: 60px auto 0;
    width: 1080px;
    height: 2000px;
    // 左侧区域
    .tab {
      width: 775px;
      // height: 5000px;
      float: left;
      ul {
        display: flex;
        position: relative;
        // text-align: center;
        // margin-top: 20px;
        // line-height: 50px;
        padding: 16px 0;
        li {
          display: block;
          width: 100%;
          margin: 30px 10px;
          position: relative;
          font-size: 20px;
        }
      }
      // img {
      //   width: 100%;
      //   height: 400px;
      //   // display: block;
      // }
    }
    // 右侧推荐
    .recommend {
      float: right;
      width: 260px;

      // margin-top: 100px;
      .title {
        text-align: center;
        margin-top: 50px;
        font-size: 20px;
        .style {
          margin: 0 20px;
        }
      }
      .content {
        padding-top: 20px;
        border: 1px solid #9f8052;
        text-align: center;
        margin-top: 30px;
        font-size: 20px;
        img {
          width: 154px;
          height: 154px;
          margin-bottom: 15px;
        }
        .nameOne {
          color: #9f8052;
        }
        .coll {
          background-color: #f9f9f9;
          .nameTwo {
            color: #333;
            margin-top: 20px;
          }
          .nameThree {
            color: #c00002;
          }
        }
      }
    }
  }
}
</style>
