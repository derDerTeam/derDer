<template>
  <div>
    <Top></Top>
    <Header></Header>
    <div class="wrap">
      <div class="wrapper">
        <!-- 面包屑 -->
        <div class="m-secondary-navigator">
          <!-- 跳转到首页 -->
          <span>
            <a href="https://www.xiaomiyoupin.com/">首页</a>
            <i>></i>
          </span>
          <!-- 跳转到购物车 -->
          <span>
            <a href="https://trade.xiaomiyoupin.com/tr/cart">购物车</a>
            <i>></i>
          </span>
          <!-- 本页确认页 -->
          <span>
            <a href="#">确认页</a>
          </span>
        </div>
      
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrap {
  clearfix:after {
    clear: both;
    content: "";
    display: table;
  }
  .wrapper {
    display: block;
    border-top: 1px solid #e7e7e7;
    position: relative;
    margin: 0 auto 100px;
    width: 1073px;
    min-height: 400px;
//  面包屑 
    .m-secondary-navigator {
      padding: 30px 0;
      width: 100%;
      display: block;
      float: none;
      background: transparent repeat 0 0 none;
      font-size: 13px;

      span{
        i{
          
        }
        a {
          margin: 0 6px;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
    
  }
}
</style>
