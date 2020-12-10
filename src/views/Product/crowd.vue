<template>
  <div class="container">
    <div class="h-sec-top">
      <h2 class="h-subTit">小米有品众筹<span>永远好奇 永远年轻</span></h2>
      <span class="h-more" data-src="" data-target="_blank" href="javascript:;"
        ><span>更多</span
        ><a
          class="m-icons m-icons-more more-icon"
          data-src=""
          href="javascript:;"
        ></a
      ></span>
    </div>
    <div class="m-sec-main mt1 clearfix">
      <div
        class="home-good-item  m-tag-a item-pos0 home-good-item-big   no-ml"
        data-src="https://www.xiaomiyoupin.com/detail?gid=138647"
        data-target="_blank"
      >
        <div class="item-inner" style="background-color: rgb(249, 243, 233);">
          <router-link to="/detail">
            <img
              class="pro-img"
              src="https://img.youpin.mi-img.com/shopmain/427b8614ed4b3250bd43729b24a70b50.png?w=800&amp;h=800"
              data-src="https://img.youpin.mi-img.com/shopmain/427b8614ed4b3250bd43729b24a70b50.png?w=800&amp;h=800"
              alt=""
              style="margin-top: 0px;"
            />
            <div class="pro-text">
              <p class="pro-info" :title="crowd1.title">
                {{ crowd1.title }}
              </p>
              <p class="pro-desc" :title="crowd1.desc">
                {{ crowd1.desc }}
              </p>
              <p class="pro-price">
                <span class="tag">¥</span><span>{{ crowd1.price }}</span
                ><span class="pro-flag">起</span>
              </p>
            </div>
          </router-link>
        </div>
        <div class="m-progress-wrap-con">
          <div class="m-bar-con">
            <div class="m-bar" style="width: 33%;"></div>
          </div>
          <div class="m-progress-info clearfix">
            <div class="fl m-suppory">
              <span class="sup-num">{{ crowd1.number }}</span
              >人支持
            </div>
            <div class="progress-tag-con"></div>
            <div class="fr m-persent">
              <div>
                <span class="m-num">{{ crowd1.baifenbi }}</span
                ><span class="m-num-flag">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="home-good-item  m-tag-a item-pos1   "
        data-src="https://www.xiaomiyoupin.com/detail?gid=138205"
        data-target="_blank"
      >
        <div class="item-inner" style="background-color: rgb(248, 248, 248);">
          <img
            class="pro-img"
            src="https://img.youpin.mi-img.com/shopmain/27ebd93f79555ba07c1075b776fb40fb.png?w=800&amp;h=800"
            data-src="https://img.youpin.mi-img.com/shopmain/27ebd93f79555ba07c1075b776fb40fb.png?w=800&amp;h=800"
            alt=""
            style="margin-top: 0px;"
          />
          <div class="pro-text">
            <p class="pro-info" :title="crowd2.title">
              {{ crowd2.title }}
            </p>
            <p class="pro-price">
              <span class="tag">¥</span><span>{{ crowd2.price }}</span>
            </p>
          </div>
        </div>
        <div class="m-progress-wrap-con">
          <div class="m-bar-con">
            <div class="m-bar" style="width: 515%;"></div>
          </div>
          <div class="m-progress-info m-progress-info-small clearfix">
            <div class="fl m-suppory">
              <span class="sup-num">{{ crowd2.number }}</span
              >人支持
            </div>
            <span class="progress-tag-con fl"
              ><span
                class="common-tag common-tag-text"
                style="background-color: rgb(246, 39, 0);"
                v-if="crowd2.isBoom"
                >爆</span
              ></span
            >
            <div class="fr m-persent">
              <div>
                <span class="m-num">{{ crowd2.baifenbi }}</span
                ><span class="m-num-flag">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="home-good-item  m-tag-a item-pos2   "
        data-src="https://www.xiaomiyoupin.com/detail?gid=138494"
        data-target="_blank"
      >
        <div class="item-inner" style="background-color: rgb(248, 248, 248);">
          <img
            class="pro-img"
            src="https://img.youpin.mi-img.com/shopmain/3f9fe4b59235c92f4dcc1819566046da.png?w=800&amp;h=800"
            data-src="https://img.youpin.mi-img.com/shopmain/3f9fe4b59235c92f4dcc1819566046da.png?w=800&amp;h=800"
            alt=""
            style="margin-top: 0px;"
          />
          <div class="pro-text">
            <p class="pro-info" :title="crowd3.title">
              {{ crowd3.title }}
            </p>
            <p class="pro-price">
              <span class="tag">¥</span><span>{{ crowd3.price }}</span
              ><span class="pro-flag">起</span>
            </p>
          </div>
        </div>
        <div class="m-progress-wrap-con">
          <div class="m-bar-con">
            <div class="m-bar" style="width: 254%;"></div>
          </div>
          <div class="m-progress-info m-progress-info-small clearfix">
            <div class="fl m-suppory">
              <span class="sup-num">{{ crowd3.number }}</span
              >人支持
            </div>
            <span class="progress-tag-con fl"
              ><span
                class="common-tag common-tag-text"
                style="background-color: rgb(254, 207, 0);"
                v-if="crowd3.isHot"
                >热</span
              ></span
            >
            <div class="fr m-persent">
              <div>
                <span class="m-num">{{ crowd3.baifenbi }}</span
                ><span class="m-num-flag">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "crowd",
  mounted() {
    this.getCrowdList();
  },
  methods: {
    getCrowdList() {
      this.$store.dispatch("getCrowdList");
    },
  },
  computed: {
    ...mapState({
      crowdList: (state) => state.product.crowdList || [],
    }),
    ...mapGetters(["crowd1", "crowd2", "crowd3"]),
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1080px;
  margin: 35px auto 0;
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
      }
    }
  }
  .home-good-item {
    float: left;
    width: 266px;
    .item-inner {
      position: relative;
      width: 266px;
      height: 210px;
      background: #f3f0e9;
    }
    .pro-img,
    .home-good-item .pro-img1 {
      position: absolute;
      right: 15px;
      bottom: 10px;
      width: 130px;
      height: 130px;
      z-index: 4;
    }
    .pro-text {
      position: relative;
      z-index: 6;
      padding-top: 25px;
      padding-left: 15px;
    }
    .pro-info {
      color: #333;
      margin-top: 0;
      font-size: 20px;
      line-height: 24px;
      height: 24px;
    }
    .pro-price {
      font-size: 20px;
      line-height: 24px;
      height: 24px;
      overflow: hidden;
      color: #a92112;
      margin-top: 11px;
    }
  }
  .home-good-item-big {
    width: 537px;
    .item-inner {
      position: relative;
      width: 537px;
      height: 210px;
      background: #f3f0e9;
      .pro-img,
      .home-good-item-big .pro-img1 {
        position: absolute;
        right: 15px;
        bottom: 10px;
        width: 215px;
        height: 215px;
        z-index: 4;
      }
    }
    .pro-text {
      position: relative;
      z-index: 6;
      padding-top: 25px;
      padding-left: 23px;
      .pro-info {
        color: #333;
        margin-top: 0;
        font-size: 20px;
        line-height: 24px;
        height: 24px;
      }
      .pro-desc {
        color: #999;
        font-size: 16px;
        line-height: 20px;
        height: 20px;
        margin-top: 8px;
      }
      .pro-price {
        font-size: 24px;
        line-height: 28px;
        height: 28px;
        overflow: hidden;
        color: #a92112;
        margin-top: 16px;
      }
    }
  }

  .m-progress-wrap-con {
    .m-bar-con {
      width: 100%;
      height: 3px;
      overflow: hidden;
      background: #e3e1e2;
      .m-bar {
        width: 0;
        height: 100%;
        background: url(../../assets/images/bar.jpg) 0 0 no-repeat;
      }
    }
    .m-progress-info {
      margin-top: 10px;
      .m-suppory {
        color: #999;
        font-size: 15px;
        margin-left: 20px;
        float: left;
        .sup-num {
          margin-right: 6px;
          color: #a92112;
          font-size: 18px;
        }
      }
      .progress-tag-con {
        text-align: center;
        height: 18px;
        padding-top: 2px;
        padding-bottom: 2px;
        overflow: hidden;
        display: inline-block;

        .common-tag-img,
        .progress-tag-con .common-tag-text {
          height: 18px;
          border-radius: 2px;
          vertical-align: bottom;
        }
        .common-tag-text {
          padding: 0 6px;
          color: #fff;
          font-size: 13px;
          line-height: 18px;
        }
      }
      .m-persent {
        margin-right: 15px;
        color: #a92112;
        font-size: 18px;
        float: right;
      }
    }
  }
}
// .home-good-item {
//   float: left;
//   width: 266px;
// }
.m-icons-more {
  width: 30px;
  height: 30px;
  background-position: 0 -1125px;
}
.m-tag-a {
  cursor: pointer;
}
.m-icons {
  display: inline-block;
  background-image: url(../../assets/images/yp-icons.png);
}
.clearfix::after {
  display: block;
  height: 0;
  content: "";
  clear: both;
  visibility: hidden;
}
</style>
