<template>
  <ul class="nav-list">
    <li class="nav-item"><span> 有品推荐 </span>/<span> 家用电器</span></li>
    <li class="nav-item"><span> 居家餐厨 </span>/<span> 家具家装</span></li>
    <li class="nav-item"><span> 电视影音 </span>/<span> 智能家庭</span></li>
    <li class="nav-item"><span> 手机电脑 </span>/<span> 数码周边</span></li>
    <li class="nav-item"><span> 日用文创 </span>/<span> 服装配饰</span></li>
    <li class="nav-item"><span> 美妆个护 </span>/<span> 运动户外</span></li>
    <li class="nav-item"><span> 鞋靴箱包 </span>/<span> 健康保健</span></li>
    <li class="nav-item"><span> 美食酒饮 </span>/<span> 母婴亲子</span></li>
    <li class="nav-item"><span> 出行车品 </span>/<span> 宠物生活</span></li>
    <li class="nav-item"><span> 有品海购 </span>/<span> DLAB</span></li>
  </ul>
</template>

<script>
export default {
  name: "Category",
};
</script>

<style lang="less" scoped>
.nav-list {
  height: 358px;
  overflow-y: hidden;
  overflow-x: hidden;
  .nav-item {
    width: 161px;
    padding: 0 30px;
    height: 33.2px;
    line-height: 33.2px;
    color: #fff;
    font-size: 14px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    text-align: left;
    overflow: hidden;
  }
  li:nth-of-type(1) {
    margin-top: 13px;
  }
}
</style>
