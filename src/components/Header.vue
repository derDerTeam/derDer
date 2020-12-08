<template>
  <div class="top">
    <div class="headerContainer clearfix">
      <div class="rightNav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.top {
  height: 48px;
  background-color: #333;
  font-size: 14px;
  position: relative;
  z-index: 105;
  .headerContainer {
    width: 1080px;
    margin: 0 auto;
  }
}
</style>
