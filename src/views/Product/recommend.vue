<template>
  <div class="container">
    <div class="h-sec-top clearfix">
      <h2 class="h-subTit">专属推荐<span></span></h2>
    </div>
    <div class="m-product-list  clearfix">
      <div
        class="m-goods-item-container  pro-item-category"
        :class="{ first: index % 4 === 0 || index === 0 }"
        data-src="https://www.xiaomiyoupin.com/detail?gid=137231"
        data-target="_blank"
        v-for="(recommend, index) in recommendList"
        :key="recommend.id"
      >
        <div class="category-img-container">
          <div class="product-img">
            <div
              class="m-product-image-container undefined"
              data-src="https://img.youpin.mi-img.com/shopmain/7387face5887e41de764f83cb23c46a1.png@base@tag=imgScale&amp;F=webp&amp;h=800&amp;w=800?w=800&amp;h=800"
              style="width: 264px; height: 198px;"
            >
              <div
                class="img-container"
                style="padding-left: 35px; padding-right: 35px; padding-bottom: 3px; width: 194px; height: 195px;"
              >
                <img
                  :src="recommend.imgUrl"
                  data-src="https://img.youpin.mi-img.com/shopmain/7387face5887e41de764f83cb23c46a1.png@base@tag=imgScale&amp;F=webp&amp;h=800&amp;w=800?w=800&amp;h=800"
                  alt="Redmi K30S 至尊纪念版"
                  style="height: 195px; width: 195px; margin-left: -0.5px;"
                  @click="toDetail(item)"
                />
              </div>
            </div>
          </div>
          <p class="pro-desc">{{ recommend.desc }}</p>
        </div>
        <div v-if="recommend.isOption === 'true'" class="m-goods-pro-tag-con">
          {{ recommend.optionNum }}色可选
        </div>
        <div class="category-box">
          <div class="m-goods-common-tag-con">
            <span
              v-if="recommend.isNew === 'true'"
              class="common-tag common-tag-text"
              style="background-color: rgb(141, 186, 109);"
              >新品</span
            ><span
              v-if="recommend.isMe === 'true'"
              class="common-tag common-tag-text"
              style="background-color: rgb(255, 103, 1);"
              >小米自营</span
            >
            <span
              v-if="recommend.isKill === 'true'"
              class="common-tag common-tag-text"
              style="background-color: rgb(217, 107, 108);"
              >有品秒杀</span
            >
            <span
              v-if="recommend.isSpecial === 'true'"
              class="common-tag common-tag-text"
              style="background-color: rgb(217, 107, 108);"
              >特价</span
            >
          </div>
          <p class="pro-info" title="Redmi K30S 至尊纪念版">
            {{ recommend.tital }}
          </p>
          <p class="pro-price">
            <span class="pro-unit">¥</span
            ><span class="m-num">{{ recommend.price }}</span
            ><span class="pro-flag">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Recommend",
  data() {
    return {};
  },
  mounted() {
    this.getRecommendList();
  },
  methods: {
    getRecommendList() {
      this.$store.dispatch("getRecommendList");
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
      recommendList: (state) => state.product.recommendList,
    }),
  },
};
</script>

<style lang="less" scoped>
.container {
  margin-top: 50px;
  width: 1080px;
  margin: 0 auto;
  .h-sec-top {
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
    .h-subTit {
      color: #333;
      font-size: 28px;
      font-weight: 400;
    }
  }
  .pro-item-category {
    width: 264px;
    padding-bottom: 0;
    margin-bottom: 5px;
    border: 1px solid #e7e7e7;
    background: none;
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
    box-sizing: border-box;
    .m-goods-common-tag-con {
      text-align: center;
      height: 20px;
      padding-top: 2px;
      padding-bottom: 2px;
      width: 100%;
      overflow: hidden;
      .common-tag-text {
        padding: 0 6px;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        border-radius: 2px;
        vertical-align: bottom;
      }
    }
    .m-goods-pro-tag-con {
      position: absolute;
      padding: 3px;
      left: 8px;
      top: 8px;
      width: 16px;
      line-height: 18px;
      font-size: 15px;
      text-align: center;
      word-wrap: break-word;
      border-radius: 4px;
      border: 1px solid #9f8052;
      background-color: transparent;
      color: #9f8052;
    }
    .category-img-container {
      width: 100%;
      .product-img {
        width: 100%;
        height: 198px;
        overflow: hidden;
        .img-container {
          overflow: hidden;
          display: inline-block;
        }
      }
      .pro-desc {
        color: #845f3f;
        font-size: 16px;
        line-height: 20px;
        height: 20px;
        margin-top: 0;
      }
    }
    .category-box {
      margin-top: 18px;
      padding: 13px 0 10px;
      background: #f8f8f8;
      .m-goods-common-tag-con {
        text-align: center;
        height: 20px;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100%;
        overflow: hidden;
      }
      .pro-info {
        color: #333;
        margin-top: 10px;
        font-size: 18px;
        line-height: 22px;
        height: 22px;
      }
      .pro-price {
        margin-top: 11px;
        margin-bottom: 0;
        height: 22px;
        line-height: 22px;
        color: #a92112;
        .pro-unit {
          margin-right: 5px;
          font-size: 13px;
        }
        .m-num {
          font-size: 20px;
        }
        .pro-unit {
          font-size: 12px;
        }
      }
    }
  }
}

.m-goods-item-container.first {
  margin-left: 0;
}
</style>
