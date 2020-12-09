<template>
  <div>
    <Top></Top>
    <Header></Header>
    <div class="bannerContainer">
      <div class="leftBanner">
        <Category></Category>
      </div>
      <div class="rightBanner">
        <SliderLoop
          :bannerList="bannerList"
          class="bannerContainer"
        ></SliderLoop>
      </div>
    </div>
    <Tabbed></Tabbed>
    <Crowd></Crowd>
    <Seckill :bannerList="[1, 1, 2, 3, 4, 5]"></Seckill>
    <News :bannerList="[1, 1, 2, 3, 4, 5]"></News>
    <Recommend></Recommend>
    <Footer></Footer>
  </div>
</template>

<script>
import Category from "./category.vue";
import Tabbed from "./tabbed";
import Crowd from "./crowd";
import Seckill from "./seckill";
import News from "@/views/Product/news";
import Recommend from "@/views/Product/recommend";
export default {
  name: "Product",
  data() {
    return {
      bannerList: [
        {
          id: 1,
          imgUrl:
            "https://img.youpin.mi-img.com/test/577750a5a3ad543ded7ea6da51c5ebdd.jpeg?w=1080&h=450",
        },
        {
          id: 2,
          imgUrl:
            "https://img.youpin.mi-img.com/test/a4a6cf98d6f9b836cd9e1f4482c1ba98.png?w=1080&h=450",
        },
        {
          id: 3,
          imgUrl:
            "https://img.youpin.mi-img.com/test/8b1131d1b913b992a76f7eea24ed371d.jpeg?w=1080&h=450",
        },
        {
          id: 4,
          imgUrl:
            "https://img.youpin.mi-img.com/test/568f57a2b342972d0022916966b2b6a7.jpeg?w=1080&h=450",
        },
        {
          id: 5,
          imgUrl:
            "https://img.youpin.mi-img.com/test/577750a5a3ad543ded7ea6da51c5ebdd.jpeg?w=1080&h=450",
        },
        {
          id: 6,
          imgUrl:
            "https://img.youpin.mi-img.com/test/577750a5a3ad543ded7ea6da51c5ebdd.jpeg?w=1080&h=450",
        },
        {
          id: 7,
          imgUrl:
            "https://img.youpin.mi-img.com/test/577750a5a3ad543ded7ea6da51c5ebdd.jpeg?w=1080&h=450",
        },
      ],
    };
  },
  components: { Category, Tabbed, Crowd, Seckill, News, Recommend },
};
</script>

<style lang="less" scoped>
.bannerContainer {
  width: 1080px;
  height: 358px;
  margin: 0 auto;
  .leftBanner {
    position: absolute;
    height: 358px;
    background-color: #9f8052;
    width: 221px;
    z-index: 100;
  }
  .rightBanner {
    width: 859px;
    float: right;
    height: 358px;
    background-color: skyblue;
    .bannerContainer {
      width: 859px;
      height: 358px;
    }
  }
}
</style>
