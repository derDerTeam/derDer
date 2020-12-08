<template>
  <div>
    <Top></Top>
    <Header></Header>
    <div class="bannerContainer">
      <div class="leftBanner">
        <Category></Category>
      </div>
      <div class="rightBanner">
        <SliderLoop :bannerList="bannerList"></SliderLoop>
      </div>
    </div>
    <Tabbed></Tabbed>
    <Crowd></Crowd>
    <Footer></Footer>
  </div>
</template>

<script>
import Category from "./category.vue";
import Tabbed from "./tabbed";
import Crowd from "./crowd";
export default {
  name: "Product",
  data() {
    return {
      bannerList: [],
    };
  },
  components: { Category, Tabbed, Crowd },
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
  }
}
</style>
