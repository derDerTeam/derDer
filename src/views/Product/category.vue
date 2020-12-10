<template>
  <div
    class="nav-container"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in categoryList"
        :key="index"
        :data-cate1="item[0].id"
        :data-cate2="item[1].id"
        :class="{ active: index === currentIndex }"
        @mouseenter="isShowDetail(item)"
      >
        <span> {{ item[0].name }} </span>/<span> {{ item[1].name }} </span>
      </li>
    </ul>
    <div class="nav-detail" v-show="isShow">
      <div>
        <div
          class="sub-cate-area"
          v-for="(item, index) in cateDetailList"
          :key="index"
        >
          <div class="cate-name">{{ item.name }}</div>
          <div
            class="sub-nav-row"
            v-for="(cate, index) in item.children"
            :key="cate.id"
          >
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" :title="cate.name">{{ cate.name }}</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"
              /></span>
              <span
                class="category-3-list"
                v-for="(c3, index) in cate.children"
                :key="c3.id"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=04cb32c2359d39831272549d9a5d1952&amp;categoryName=杀菌消毒&amp;pageFrom=category"
                  class="category-3-item hot"
                  @click="toSearch(c3)"
                  >{{ c3.smallImgCard ? c3.smallImgCard.name : "" }}</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Category",
  data() {
    return { isShow: false, currentIndex: -1 };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
    isShowDetail(item) {
      let cate1Id = item[0].id;
      let cate2Id = item[1].id;
      this.$store.dispatch("getCategory2List", {
        cate1Id: "5d3a9a6c9bbe31fc2aa3958e",
        cate2Id: "5d3a9a459bbe31fc2aa3958a",
      });
    },
    toSearch(cate) {
      this.$router.push({
        name: "search",
        query: {
          cateId: cate.id,
          cateName: cate.name,
        },
      });
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.product.categoryList || [],
      cateDetailList: (state) => state.product.cateDetailList || [],
    }),
  },
};
</script>

<style lang="less" scoped>
.active {
  background-color: saddlebrown;
}
.nav-container {
  position: absolute;
  height: 358px;
  background-color: #9f8052;
  width: 221px;
  z-index: 100;
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
  .nav-detail {
    position: absolute;
    top: 0;
    left: 221px;
    width: 857px;
    min-height: 316px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-transition: opacity 2s ease;
    -o-transition: opacity 2s ease;
    transition: opacity 2s ease;
    z-index: 1000;
    .cate-name {
      font-size: 18px;
      font-weight: 700;
      color: #805e3f;
      padding-left: 33px;
      margin-bottom: 11px;
    }
  }
}
.nav-container .nav-detail .sub-cate-area .sub-nav-row .sub-nav-item-row {
  display: flex;
  .category-2-item {
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 33px;
    padding-right: 34px;
    width: 67px;
  }
  .name {
    color: #333;
    font-weight: 700;
    width: 56px;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    text-align: justify;
    text-align-last: justify;
  }
  .icon {
    margin-left: 5px;
    width: 6px;
    height: 12px;
  }
}
.nav-container
  .nav-detail
  .sub-cate-area
  .sub-nav-row:not(:last-child)
  .category-3-list {
  border-bottom: 1px dashed #e6e6e6;
}
.nav-container
  .nav-detail
  .sub-cate-area
  .sub-nav-row
  .sub-nav-item-row
  .category-3-list {
  padding-top: 15px;
  padding-bottom: 15px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 673px;
  .category-3-item {
    margin-right: 15px;
    white-space: nowrap;
    color: #666;
  }
}
</style>
