<template>
  <div class="container" style="border-bottom-color: rgb(231, 231, 231);">
    <ul>
      <li>
        <a
          href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=YouPinPC.$Home$.icon.0.77421220"
          target="_block"
        >
          <div>
            <img
              src="https://img.youpin.mi-img.com/jianyu/efb5e1c094c3e185d2add3e49bee0366.png?w=126&amp;h=126"
              data-src="https://img.youpin.mi-img.com/jianyu/efb5e1c094c3e185d2add3e49bee0366.png?w=126&amp;h=126"
              alt="上新精选"
              style="width: 80px; height: 80px;"
            />
          </div>
          <p class="title" style="color: rgb(102, 102, 102);">上新精选</p></a
        >
      </li>
      <li>
        <a
          href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=YouPinPC.$Home$.icon.0.77421220"
          target="_block"
        >
          <div>
            <img
              src="https://img.youpin.mi-img.com/jianyu/24c86a799f3ea8ccfa675ff7563d50fb.png?w=126&amp;h=126"
              alt="小米众筹"
              style="width: 80px; height: 80px;"
            />
          </div>
          <p class="title" style="color: rgb(102, 102, 102);">小米众筹</p>
        </a>
      </li>
      <li>
        <div>
          <img
            src="https://img.youpin.mi-img.com/jianyu/912d7d210a6a5771f5946f1a8ac39014.png?w=126&amp;h=126"
            alt="有品秒杀"
            style="width: 80px; height: 80px;"
          />
        </div>
        <p class="title" style="color: rgb(102, 102, 102);">有品秒杀</p>
      </li>
      <li>
        <div>
          <img
            src="https://img.youpin.mi-img.com/jianyu/8f0e4c5855e5c8dcb669e94e9a0549d9.png?w=126&amp;h=126"
            alt="热销榜单"
            style="width: 80px; height: 80px;"
          />
        </div>
        <p class="title" style="color: rgb(102, 102, 102);">热销榜单</p>
      </li>
      <li>
        <div>
          <img
            src="https://img.youpin.mi-img.com/jianyu/cac2205702a4acc7224b6f51308c0dd5.png?w=126&amp;h=126"
            alt="小米自营"
            style="width: 80px; height: 80px;"
          />
        </div>
        <p class="title" style="color: rgb(102, 102, 102);">小米自营</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabbed",
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 30px;
  box-sizing: border-box;
  height: 198px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  width: 1080px;
  margin: 0 auto;
  ul {
    width: 100%;
    height: 148px;
    overflow: hidden;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    flex: 1;
    li {
      margin-top: 30px;

      p {
        display: block;
        width: 80px;
        margin: 20px 0 10px 0;
        text-align: center;
      }
    }
  }
}
/* 清除浮动 */
.clearfix::after {
  display: block;
  height: 0;
  content: "";
  clear: both;
  visibility: hidden;
}
</style>
