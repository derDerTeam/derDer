<template>
  <div class="cart">
    <div class="cartItem">首页 > 购物车</div>
    <div>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">
            <input type="checkbox" />
            <span>全选</span>
          </div>
          <div class="cart-th2">商品信息</div>
          <div class="cart-th3">单价（元）</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">金额（元）</div>
          <div class="cart-th6">操作</div>
        </div>
        <div class="detailItem">
          <input class="ifOrAll" type="checkbox" />
          <span>有品精选</span>
          <span class="sure">已免运费</span>
        </div>
        <div class="cart-body">
          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/001.jpg" />
              <div class="item-msg">飞米 FIMI X8SE 2020 白色 单机版</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">2999</span>
            </li>
            <!-- <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li> -->
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">￥399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
            </li>
          </ul>
          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/001.jpg" />
              <div class="item-msg">飞米 FIMI X8SE 2020 白色 单机版</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">2999</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="cart-tool">
        <div class="select-all">
          <input class="chooseAll" type="checkbox" />
          <span>全选</span>
          <div class="chosed">
            已选 0 件
          </div>
        </div>
        <div class="option"></div>
        <div class="money-box">
          <div class="sumprice">
            <em>合计￥ ：</em>
            <i class="summoney">9999</i>
          </div>
          <div class="sumbtn">
            <a class="sum-btn">结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.cart {
  width: 1080px;
  margin: 0 auto;
  .cartItem {
    height: 78px;
    // background-color: #a18181;
    // border: solid 2px red;
    line-height: 78px;
    font-size: 12px;
  }
  // h4 {
  //   margin: 9px 0;
  //   font-size: 14px;
  //   line-height: 21px;
  // }
  .cart-main {
    .cart-th {
      background: #fafafa;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }
    .detailItem {
      height: 80px;
      .ifOrAll {
        margin-top: 55px;
        margin-right: 20px;
        margin-left: 15px;
      }
      .sure {
        float: right;
        margin-top: 55px;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
          line-height: 80px;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 80px;
            height: 80px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            text-align: center;
            line-height: 40px;
          }
        }
        .cart-list-con4 {
          width: 10%;
          line-height: 80px;
        }

        .cart-list-con5 {
          width: 17%;
          display: flex;
          height: 30px;
          text-align: center;
          line-height: 14px;
          padding: 25px 0;

          .mins { 
            // height: 40px;
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            // height: 36.8px;
            float: left;
            text-align: center;
            font-size: 18px;
            line-height: 80px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: right;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            // height: 12px;
          }
        }

        .cart-list-con6 {
          width: 10%;
          line-height: 80px;
          // text-align: center;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;
          line-height: 80px;

          a {
            color: #666;
          }
        }
      }
    }
  }
  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      overflow: hidden;
      float: left;
      line-height: 80px;
      // padding: 25px 0px;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
      .chosed {
        // line-height: px;
        float: right;
        padding: 0 10px;
        line-height: 80px;
      }
    }

    .option {
      // padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        // padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .sumprice {
        height: 80px;
        width: 120px;
        line-height: 80px;
        float: left;
        margin-right: 20px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 200px;
          height: 80px;
          line-height: 80px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}

// .cartHeadListOne {
//   margin: ;
// }
// .cart.cartHead {
//   widows: 1080px;
//   height: 48px;
//   background-color: red;
//   border: 1px solid green;
// };
</style>
