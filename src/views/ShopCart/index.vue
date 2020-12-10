<template>
  <div>
    <div>
      <Top></Top>
      <Header></Header>
    </div>
    <div class="line"></div>
    <div class="cart">
      <div class="cartItem">首页 > 购物车</div>
      <div>
        <div class="cart-main">
          <div class="cart-th">
            <div class="cart-th1">
              <input
                type="checkbox"
                :checked="isAllChecked"
                @click="changeAllChecked(isAllChecked)"
              />
              <span>全选</span>
            </div>
            <div class="cart-th2">商品信息</div>
            <div class="cart-th3">单价</div>
            <div class="cart-th4">数量</div>
            <div class="cart-th5">金额</div>
            <div class="cart-th6">操作</div>
          </div>
          <div class="detailItem">
            <input
              class="ifOrAll"
              type="checkbox"
              :checked="isAllChecked"
              @click="changeAllChecked(isAllChecked)"
            />
            <span>有品精选</span>
            <span class="sure">已免运费</span>
          </div>
          <div class="cart-body">
            <ul
              class="cart-list"
              v-for="(item, index) in shopCartList"
              :key="item.id"
            >
              <li class="cart-list-con1">
                <input
                  type="checkbox"
                  :checked="item.isChecked"
                  @click="chengChecked(item)"
                  name="chk_list"
                />
              </li>
              <li class="cart-list-con2">
                <img :src="item.goodsUrl" />
                <div class="item-msg">
                  <router-link to="/detail">{{ item.title }}</router-link>
                </div>
              </li>
              <li class="cart-list-con4">
                <span class="price">￥{{ item.price }}</span>
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
                <a
                  href="javascript:void(0)"
                  @click="
                    item.number > 1 ? (item.number -= 1) : (item.number = 1)
                  "
                  class="mins"
                  >-</a
                >
                <input
                  autocomplete="off"
                  type="text"
                  :value="item.number"
                  minnum="1"
                  class="itxt"
                />
                <a
                  href="javascript:void(0)"
                  @click="item.number += 1"
                  class="plus"
                  >+</a
                >
              </li>
              <li class="cart-list-con6">
                <span class="sum">￥399</span>
              </li>
              <li class="cart-list-con7">
                <a href="#none" class="sindelet" @click="deleteShop(index)"
                  >删除</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="cart-tool">
          <div class="select-all">
            <input
              class="chooseAll"
              :checked="isAllChecked"
              type="checkbox"
              @click="changeAllChecked(isAllChecked)"
            />
            <span>全选</span>
            <div class="chosed">已选 {{ totalNumer }} 件</div>
          </div>
          <div class="option"></div>
          <div class="money-box">
            <div class="sumprice">
              <em>合计: ￥</em>
              <i class="summoney">{{ totalPrice }}</i>
            </div>
            <!-- <div class="sumpriceOne">
              <em>总额: ￥</em>
              <i class="summoneyOne">9999</i>
            </div>
            <div class="sumpriceTwo">
              <em>立减: ￥</em>
              <i class="summoneyTwo">9999</i>
            </div> -->
            <div class="sumbtn">
              <a class="sum-btn" @click="toTrade">结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Top from "../../components/Top";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "shopCart",
  components: {
    Top,
    Footer,
    Header,
  },
  data() {
    return {};
  },
  mounted() {
    this.getShopCartList();
  },
  methods: {
    getShopCartList() {
      this.$store.dispatch("getShopCartList");
    },
    //删除单项
    deleteShop(index) {
      this.$store.dispatch("deleteShop", index);
    },
    //修改单个商品的选中
    chengChecked(item) {
      this.$store.dispatch("chengChecked", item);
    },
    //修改全部商品
    changeAllChecked(flag) {
      this.$store.dispatch("changeAllChecked", !flag);
    },
    // 修改购物车商品数量
  },
  computed: {
    ...mapState({
      shopCartList: (state) => state.shopCart.shopCartList || [],
    }),
    totalNumer() {
      return this.shopCartList.reduce((pre, item) => {
        pre += item.number;
        return pre;
      }, 0);
    },
    totalPrice() {
      return this.shopCartList.reduce((pre, item) => {
        pre += item.number * item.price;
        return pre;
      }, 0);
    },
    isAllChecked() {
      return this.shopCartList.every((item) => item.isChecked);
    },
    toTrade() {
      localStorage.setItem("shopCartList", JSON.stringify(this.shopCartList));
      this.$router.push("/trade");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.line {
  border-top: solid 1px #e7e7e7;
}
.cart {
  width: 1080px;
  margin: 0 auto;
  .cartItem {
    height: 78px;
    // background-color: #a18181;
    line-height: 78px;
    font-size: 14px;
  }
  // h4 {
  //   margin: 9px 0;
  //   font-size: 14px;
  //   line-height: 21px;
  // }
  .cart-main {
    .cart-th {
      background: #fafafa;
      color: #999;
      border: 0px solid #ddd;
      // padding: 10px;
      overflow: hidden;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      padding-left: 10px;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;
        // background-color: #999999;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
          margin-left: 15px;
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
      font-size: 14px;
      .ifOrAll {
        margin-top: 55px;
        margin-right: 20px;
        margin-left: 10px;
      }
      .sure {
        float: right;
        margin-top: 55px;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
      border-left: 0px;
      border-right: 0px;

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
            font-size: 14px;
            text-align: center;
            padding-top: 20px;
            // line-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: wrap;
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
            font-size: 12px;
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
    background-color: #fafafa;
    overflow: hidden;
    border: 1px solid #ddd;
    margin-top: 100px;
    position: sticky;
    bottom: 0;
    left: 0;

    .select-all {
      overflow: hidden;
      float: left;
      margin-left: 10px;
      font-size: 18px;

      span {
        vertical-align: middle;
        line-height: 80px;
      }

      input {
        overflow: hidden;
        vertical-align: middle;
        margin-right: 30px;
      }
      .chosed {
        float: right;
        padding: 0 10px;
        line-height: 80px;
        text-align: center;
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
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;

      .sumprice {
        height: 80px;
        width: 120px;
        line-height: 80px;
        float: left;
        margin-right: 20px;
        font-size: 20px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }
      // .sumpriceOne {
      //   float: left;
      // }
      // .sumpriceTwo {
      //   float: left;
      // }

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
