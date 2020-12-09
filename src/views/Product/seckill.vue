<template>
  <div class="container clearfix">
    <div class="h-sec-top clearfix">
      <div class="trap-top-main fl">
        <span class="h-subTit fl"
          >有品秒杀<span class="timestr"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODE4NDU0MzZBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODE4NDU0MzdBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTg0NTQzNEExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTg0NTQzNUExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjQBja0AAANrSURBVHja7JhbSFRRFIbPMZWKykwjJQgs0Ihq6KXMKAfKQNOKohJ6kIh66/YmlUXY5SEqSSroRaSHSssiFYuKktJqXlKE6GqPJuS1C5jJ9G/4J1bDuextI/nQgo9ZM2fvdf69zz5rrz12OBy2xpPFR5yauSn/XMzWzh4rzhpn5icoHTwA30G5R7vT4Bs/3ewU29wDM90a2ZE15PDIFoEGMIffu0GaS5wfIAH85KeTDYBp9D+AQvBa95GtBS1CzBDYI65ngAPgFngjRKg1+Q7c5vUM0Uf1H6Y/D7SC1ToztANcFgu+F2wET8AqUMZAtsaSUMEfguOgmf1ugiReVwJ3giteM1QpxKjRZoNX4DqDrtEUY7Gdav+Y/dvACvCR19XMnvFb1OfAINdPDpgIXqoBiDZqrdSDXSDAEdv8DPD3erb7vUQYJ46DVIu7H1zUXdQWg6vRTRePoAYc5drxsyxwjGJssbhzQbtpHlKvfJMQowIVgWJNMRbbFbNfP39LYtx00zxULTr1cFSNo8xDql+QcSKDrTYRtBnk0R8BW5ymWNg+MBns92jTzrgj/J7HuFqCjgj/PHjk82gSovdGF1NvaYX4XqYjaBlYTP8rc0gs7QTjRnaDbD9BG4Rfz8QYS+tj3Iit9xOUI/y6MdrU61zu5ygoS/ihMRIUcrmfo6Bk4Xdr3mBY+Gka7T+53M+3HkrUFDQk/BdgocFs2X6C+oQ/WzPobtZEFkuWpyxh3EzOYq+fILktzNcUdJUCesX20MhSxsmWCP+tn6BW4a8zmPpm5pT3IklWuLQtFH6Ln6A7wlcb4wwDUap+Ws480+MiKJlxZa7zFPQcdNCfAg4bvtKfmexSWaZE2yHGtXifZzpvmTxh7OVOHwvLjdqAy3U311pwn/4E1sGBvxSj+t9gPIvxa03qoRKRwFJYORaMUkwBK4ZUkRhLTAu0LpDPStFi5ajq7GsgU1NIJts3iIw8wLhdnmd7F1MdJ0Vl1W0stJr4RoZ4ivgCpvIstpQLO9/hHoncUNtMBZWCk/TVKeSuOHnEs04uMnhstRSpBniBa6nS5JGViZNGKWcmyLO+7n84kYNikIM56FUt+s1QFdjOIJdENm7mY9kEVoIFYBbP7YPMQx086aqjdqeIeVaIqTL9s+H//0N/zNB4sV8CDACpgNIYcitWCgAAAABJRU5ErkJggg=="
              alt=""
            /><span>09:00场</span></span
          ></span
        >
        <div class="countdown fl">
          <div class="h-countdown-wrap">
            <span class="time-item-home hour">12</span
            ><span class="m-countdown-dot-home">:</span
            ><span class="time-item-home minute">34</span
            ><span class="m-countdown-dot-home">:</span
            ><span class="time-item-home second">16</span>
          </div>
        </div>
      </div>
      <span class="h-more" data-src="" data-target="_blank" href="javascript:;"
        ><span>更多</span
        ><a
          class="m-icons m-icons-more more-icon"
          data-src=""
          href="javascript:;"
        ></a
      ></span>
    </div>
    <div class="swiper-container" id="mySwiper" ref="bannerSwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in bannerList"
          :key="banner.id"
        >
          <!-- <img :src="banner.imgUrl" /> -->
          <div class="m-goods-item-container  pro-item-trap margin-left-0">
            <div class="bigtrap-img-tag-container">
              <div class="small-item-img">
                <div
                  class="m-product-image-container undefined"
                  style="width: 266px; height: 266px;"
                  data-src="https://img.youpin.mi-img.com/shopmain/2dcf036cc890a229a8dd309699885233.jpg"
                >
                  <div
                    class="img-container"
                    style="width: 266px; height: 266px;"
                  >
                    <img
                      src="https://img.youpin.mi-img.com/shopmain/2dcf036cc890a229a8dd309699885233.jpg"
                      data-src="https://img.youpin.mi-img.com/shopmain/2dcf036cc890a229a8dd309699885233.jpg"
                      alt="2020西湖龙井"
                      style="width: 266px; height: 266px;"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bigtrap-box">
              <p class="pro-info" title="2020西湖龙井">2020西湖龙井</p>
              <p class="pro-price">
                <span class="pro-unit">¥</span><span class="m-num">299</span
                ><span class="pro-flag">起</span>
                <span class="market-price"
                  ><span class="pro-unit">¥</span>
                  <span class="m-num">599</span></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Seckill",
  props: ["bannerList"],
  watch: {
    bannerList: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          //swiper
          new Swiper(this.$refs.bannerSwiper, {
            // loop: true, // 循环模式选项
            slidesPerView: 4,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },
            // autoplay: true,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1080px;
  margin: 0 auto;
  padding-top: 40px;
  .h-sec-top {
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
    .h-subTit {
      color: #333;
      font-size: 28px;
      font-weight: 400;
      .timestr {
        margin-left: 12px;
      }
      .timestr img {
        width: 18px;
        height: 18px;
        vertical-align: -15%;
      }
      span {
        margin-left: 3px;
        font-size: 18px;
        color: #a92112;
      }
    }
  }
  .trap-top-main .countdown {
    height: 23px;
    margin-left: 6px;
    position: relative;
    top: 12px;
    .h-countdown-wrap .time-item-home {
      display: inline-block;
      width: 23px;
      height: 23px;
      line-height: 23px;
      margin: 0 3px;
      color: #fff;
      text-align: center;
      font-size: 15px;
      background: #b04337;
    }
    .h-countdown-wrap .m-countdown-dot-home {
      display: inline-block;
      font-size: 15px;
      color: #b04337;
    }
    .h-countdown-wrap .time-item-home {
      display: inline-block;
      width: 23px;
      height: 23px;
      line-height: 23px;
      margin: 0 3px;
      color: #fff;
      text-align: center;
      font-size: 15px;
      background: #b04337;
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
    .m-icons {
      display: inline-block;
      background-image: url(../../assets/images/yp-icons.png);
    }
    .m-icons-more {
      background-position: 0 -1124px;
    }
  }
  .fl {
    float: left;
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
    .bigtrap-img-tag-container {
      width: 266px;
      height: 266px;
      position: relative;
      .small-item-img {
        display: block;
        width: 100%;
        text-align: center;
        overflow: hidden;
        background: #f8f8f8;
      }
    }
    .bigtrap-box {
      background: #faf6ef;
      padding-top: 13px;
      padding-bottom: 15px;
      .pro-info {
        color: #333;
        font-size: 19px;
        line-height: 23px;
        height: 23px;
        margin-top: 0;
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
        }
        .pro-flag,
        .pro-ori,
        .pro-unit {
          font-size: 12px;
        }
        .market-price {
          text-decoration: line-through;
          color: #333;
          margin-left: 5px;
          .pro-unit {
            font-size: 9px;
          }
          .m-num {
            font-size: 14px;
          }
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
