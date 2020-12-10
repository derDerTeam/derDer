<template>
  <div class="container clearfix">
    <div class="h-sec-top clearfix">
      <h2 class="h-subTit">每日新品<span>每天10点 惊喜不断</span></h2>
      <span class="h-more" data-src="" data-target="_blank" href="javascript:;"
        ><span>更多</span
        ><a
          class="m-icons m-icons-more more-icon"
          data-src=""
          href="javascript:;"
        ></a
      ></span>
    </div>
    <div class="m-sec-main mt1">
      <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide swiper-slide-active"
            style="width: 266.25px; margin-right: 5px;"
            v-for="(item, index) in newsList"
            :key="item.id"
          >
            <div
              class="m-goods-item-container new-item-container first pro-item-sec margin-left-0"
              data-src="https://www.xiaomiyoupin.com/detail?gid=138463"
              data-target="_blank"
            >
              <div class="small-item-img">
                <div
                  class="m-product-image-container undefined"
                  style="width: 266px; height: 266px;"
                  data-src="https://img.youpin.mi-img.com/shopmain/a1dd3b2f4aa4164cedd370ac0d171809.jpg"
                >
                  <div
                    class="img-container"
                    style="width: 266px; height: 266px;"
                  >
                    <img
                      :src="item.imgUrl"
                      data-src="https://img.youpin.mi-img.com/shopmain/a1dd3b2f4aa4164cedd370ac0d171809.jpg"
                      alt="无线宠物饮水机"
                      style="width: 266px; height: 266px;"
                      @click="toDetail(item)"
                    />
                  </div>
                </div>
              </div>
              <div class="m-goods-common-box">
                <p class="pro-info" :title="item.tital">{{ item.tital }}</p>
                <p class="pro-desc" :title="item.desc">
                  {{ item.desc }}
                </p>
                <p class="pro-price">
                  <span class="pro-unit">¥</span
                  ><span class="m-num">{{ item.price }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next m-icons m-icons-next-hover"></div>
        <div
          class="swiper-button-prev m-icons m-icons-forward-hover swiper-button-disabled"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapState } from "vuex";
export default {
  name: "News",
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$store.dispatch("getNewsList");
    },
    toDetail(item) {
      this.$router.push({
        name: "detail",
        query: {
          id: item.id,
        },
      });
    },
  },
  computed: {
    ...mapState({
      newsList: (state) => state.product.newsList,
    }),
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1080px;
  margin: 0 auto;
  margin-top: 60px;
  padding-bottom: 28px;
  .h-sec-top {
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
    .h-subTit {
      color: #333;
      font-size: 28px;
      font-weight: 400;
      span {
        margin-left: 12px;
        font-size: 14px;
        color: #999;
      }
    }
    .h-more {
      position: absolute;
      right: 0;
      top: 6px;
      height: 30px;
      color: #999;
      cursor: pointer;
      .more-icon {
        height: 30px;
        width: 30px;
        background-image: url(../../assets/images/yp-icons.png);
        background-size: 85px 2585px;
        background-position: 0 -1134px;
      }
    }
  }
  .m-goods-item-container {
    position: relative;
    float: left;
    width: 266px;
    margin-left: 5px;
    text-align: center;
    background: #fff;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    cursor: pointer;
    .small-item-img {
      display: block;
      width: 100%;
      text-align: center;
      overflow: hidden;
      background: #f8f8f8;
    }
    .m-goods-common-box {
      padding-top: 13px;
      padding-bottom: 10px;
      .pro-info {
        color: #333;
        font-size: 19px;
        line-height: 23px;
        height: 23px;
      }
      .pro-desc {
        color: #666;
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        margin-top: 8px;
      }
      .pro-price {
        margin-top: 11px;
        margin-bottom: 0;
        height: 26px;
        line-height: 26px;
        color: #a92112;
        .pro-unit {
          font-size: 15px;
        }
        .m-num {
          font-size: 22px;
          line-height: 26px;
          color: #a92112;
        }
      }
    }
  }
}
.swiper-slide {
  position: relative;
  top: 0;
  &:hover {
    transition: all 0.5s linear;
    top: -2px;
    box-shadow: 10px 20px 3px 6px #eee;
  }
}
</style>
