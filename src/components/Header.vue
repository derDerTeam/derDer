<template>
  <div class="S-header">
    <div class="container">
      <div class="S-header-center">
        <div class="title"></div>

        <div class="nav">
          <ul class="clearfix">
            <li>
              <a
                href="https://m.xiaomiyoupin.com/w/secbuy?_rt=weex&activity_id=5"
                target="_block"
                >限时抢购</a
              >
            </li>
            <li>
              <a href="https://m.xiaomiyoupin.com/w/mifans?_rt=weex&pageid=3154"
                >企业采购</a
              >
            </li>
          </ul>
        </div>

        <div class="cart" @click="goCart">
          <a class="cart-icon"></a>
          <span class="cart-count">{{ count }}</span>
        </div>

        <div class="seach">
          <i class="seach-icon"></i>
          <div class="input">
            <input
              type="text"
              v-model="keyword"
              placeholder="搜一搜"
              @change.enter="toSearch"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      count: 0,
      keyword: "",
    };
  },
  methods: {
    goCart() {},
    toSearch() {
      if (this.keyword === "") {
        return;
      }
      let location = {
        path: "/search/" + this.keyword,
      };
      if (this.$route.query) {
        location.query = this.$route.query;
      }
      this.$router.push(location);
    },
  },
};
</script>

<style lang="less" scoped>
.S-header {
  width: 100%;
  height: 51px;
  padding-top: 20px;
  margin-bottom: 5px;
  // border-bottom: 1px solid #eee;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 101;
  .container {
    width: 1080px;
    margin: 0 auto;
    .S-header-center {
      width: 100%;

      .title {
        float: left;
        width: 123px;
        height: 51px;
        background: url(../assets/images/logo.png) 50% no-repeat;
        background-size: 100%;
      }
      .nav {
        float: left;
        width: 560px;
        overflow: hidden;

        ul {
          width: 100%;
          padding-left: 140px;

          li {
            float: left;
            margin-right: 32px;
            height: 51px;
            line-height: 57px;
            font-size: 18px;
            color: #666;
          }

          li:hover {
            color: #845f3f;
            cursor: pointer;
          }
        }
      }
      .seach {
        float: right;
        width: 296px;
        // height: 32px;
        padding-left: 35px;
        padding-top: 9px;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;
        position: relative;
        margin-right: 20px;

        .seach-icon {
          display: block;
          width: 30px;
          height: 30px;
          position: absolute;
          left: -4px;
          top: 10px;
          background-image: url(../assets/images/yp-icons-cart.png);
          background-position: 0 -1474px;
        }
        .seach-icon:hover {
          background-position: 0 -1440px;
          cursor: pointer;
        }

        .input {
          width: 245px;
          height: 32px;
          line-height: 32px;

          input {
            width: 100%;
            border: none;
            color: #333;
            font-size: 14px;
            outline: none;
          }
        }
      }
      .cart {
        float: right;
        right: 6px;
        top: 18px;
        position: relative;
        width: 30px;
        height: 30px;

        .cart-icon {
          display: inline-block;
          width: 100%;
          height: 100%;
          background-position: 0 -1202px;
          background-image: url(../assets/images/yp-icons-cart.png);
        }
        .cart-icon:hover {
          background-position: 0 -1168px;
        }
        .cart-count {
          position: absolute;
          right: -6px;
          top: -3px;
          width: 21px;
          border-radius: 8px;
          line-height: 17px;
          display: block;
          text-align: center;
          color: #fff;
          font-size: 12px;
          background-color: #c00000;
        }
      }
    }
  }
}
</style>
