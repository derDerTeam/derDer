<template>
  <div class="cart">
    <div class="cartItem">购物车</div>
    <div>
      <h4>全部商品</h4>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">全选</div>
          <div class="cart-th2">商品信息</div>
          <div class="cart-th3">单价（元）</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">金额（元）</div>
          <div class="cart-th6">操作</div>
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
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input autocomplete="off" type="text" value="1" minnum="1" class="itxt" />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">399</span>
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
              <input autocomplete="off" type="text" value="1" minnum="1" class="itxt" />
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
.cart {
  width: 1080px;
  margin: 0 auto;
  .cartItem {
    height: 60px;
    background-color: #a18181;
    border: solid 2px red;
    line-height: 60px;
  }
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    .cart-th {
      background: #f5f5f5;
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
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
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
            height: 35px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

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
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
      .chosed {
        line-height: 26px;
        float: right;
        padding: 0 10px;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      

      .sumprice {
        width: 200px;
        line-height: 52px;
        float: left;
        padding: 0 10px;
        // text-align: center;

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
          width: 96px;
          height: 52px;
          line-height: 52px;
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
