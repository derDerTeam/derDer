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
    <Seckill
      :seckillList="seckillList"
      :nH="nH"
      :nM="nM"
      :nS="nS"
      :nD="nD"
    ></Seckill>
    <News></News>
    <Recommend></Recommend>
    <FixedBar></FixedBar>
    <Footer></Footer>
  </div>
</template>

<script>
import FixedBar from "../../components/FixedBar";
import Category from "./category.vue";
import Tabbed from "./tabbed";
import Crowd from "./crowd";
import Seckill from "./seckill";
import News from "@/views/Product/news";
import Recommend from "@/views/Product/recommend";
import { daojishi } from "@/utils/dateUtils";
import { mapState } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      nD: "",
      nH: "",
      nM: "",
      nS: "",
      skList: {},
    };
  },
  components: { Category, Tabbed, Crowd, Seckill, News, Recommend, FixedBar },
  mounted() {
    //获取banner数据
    this.getBannerList();
    this.getSeckillList();
  },
  methods: {
    getBannerList() {
      this.$store.dispatch("getBannerList");
    },
    getSeckillList() {
      this.$store.dispatch("getSeckillList");
    },
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.product.bannerList || [],
      seckillList: (state) => state.product.seckillList || [],
    }),
  },
  watch: {
    seckillList: {
      handler(newValue, oldValue) {
        if (newValue.date) {
          daojishi(this);
        }
      },
    },
  },
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
