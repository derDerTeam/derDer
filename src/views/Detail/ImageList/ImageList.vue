<template>
  <div class="swiper-container" ref="imgSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imgList" :key="img.id">
        <img
          :src="img.Url"
          :class="{ active: defaultIndex === index }"
          @click="changeDefaultIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  props:['imglist'],
  data() {
    return {
      defaultIndex: 0,
      imgList: [
        {
          id: 1,
          url:
            "https://img.youpin.mi-img.com/shopmain/5da137f17dd9ae560629d3a8dc6bfeb4.jpg?w\u003d1080\u0026h\u003d1620",
        },
        {
          id: 2,
          url:
            "https://img.youpin.mi-img.com/shopmain/a9cedf81f2f762fc08f1123a9a298c41.jpg?w\u003d1080\u0026h\u003d2005",
        },
        {
          id: 3,
          url:
            "https://img.youpin.mi-img.com/shopmain/1a75afad8784440b691a61c15b1d57ab.jpg?w\u003d1080\u0026h\u003d1279",
        },
        {
          id: 4,
          url:
            "https://img.youpin.mi-img.com/shopmain/cd717c17cd84ae584da45934af99169d.jpg?w\u003d1080\u0026h\u003d1153",
        },
        {
          id: 5,
          url:
            "https://img.youpin.mi-img.com/shopmain/5da137f17dd9ae560629d3a8dc6bfeb4.jpg?w\u003d1080\u0026h\u003d1620",
        },
        {
          id: 6,
          url:
            "https://img.youpin.mi-img.com/shopmain/a9cedf81f2f762fc08f1123a9a298c41.jpg?w\u003d1080\u0026h\u003d2005",
        },
        {
          id: 7,
          url:
            "https://img.youpin.mi-img.com/shopmain/1a75afad8784440b691a61c15b1d57ab.jpg?w\u003d1080\u0026h\u003d1279",
        },
        {
          id: 8,
          url:
            "https://img.youpin.mi-img.com/shopmain/cd717c17cd84ae584da45934af99169d.jpg?w\u003d1080\u0026h\u003d1153",
        },
      ],
    };
  },
  methods: {
    changeDefaultIndex(index) {
      this.defaultIndex = index;
      this.$bus.$emit("changeDefaultIndex", index);
    },
  },
  watch: {
    imgList: {
      immediate: true,
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.imgSwiper, {
            slidesPerView: 5,
            slidesPerGroup: 5,
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
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
