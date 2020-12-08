<template>
  <div class="nav-container">
    <ul
      class="nav-list"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
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
    <div class="nav-detail" v-show="isShow">
      <div>
        <div class="sub-cate-area">
          <div class="cate-name">日用文创</div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="为你推荐">为你推荐</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=04cb32c2359d39831272549d9a5d1952&amp;categoryName=杀菌消毒&amp;pageFrom=category"
                  class="category-3-item hot"
                  >杀菌消毒</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d8e69065d27023b4226ce180de84e223&amp;categoryName=新品推荐&amp;pageFrom=category"
                  class="category-3-item hot"
                  >新品推荐</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=fea45365e0f68c8f77a45aa01ad1143e&amp;categoryName=热卖爆品&amp;pageFrom=category"
                  class="category-3-item hot"
                  >热卖爆品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=57870a5ecfabd6f06f099bb0006af472&amp;categoryName=充值中心&amp;pageFrom=category"
                  class="category-3-item "
                  >充值中心</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/w/mifans?_rt=weex&amp;pageid=3044"
                  class="category-3-item hot"
                  >促销活动</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="清洁用具">清洁用具</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=92947701442a254cee1b1fb3d22a6a19&amp;categoryName=清洁电器&amp;pageFrom=category"
                  class="category-3-item hot"
                  >清洁电器</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b868ecc50620cfb649b74b12e28b10b5&amp;categoryName=拖把/扫把&amp;pageFrom=category"
                  class="category-3-item "
                  >拖把/扫把</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=8f44ceaf0bad4c3361cb2a7c27025514&amp;categoryName=水桶&amp;pageFrom=category"
                  class="category-3-item "
                  >水桶</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=1eff9a845fb7a3b1f7fd80338a69987d&amp;categoryName=垃圾桶&amp;pageFrom=category"
                  class="category-3-item "
                  >垃圾桶</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b7d33cf65bf7bd69544f0b8664ac6253&amp;categoryName=垃圾袋&amp;pageFrom=category"
                  class="category-3-item "
                  >垃圾袋</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=897eeb2105f97f92250f13244f77e2a7&amp;categoryName=一次性清洁用品&amp;pageFrom=category"
                  class="category-3-item "
                  >一次性清洁用品</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="日化洗涤">日化洗涤</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=09810a4d69a9392fcc28dbf8fb3e0e2c&amp;categoryName=衣物护理&amp;pageFrom=category"
                  class="category-3-item "
                  >衣物护理</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=5ae17e9cfa3c808b4ceaa66d4a7e8d63&amp;categoryName=厨房清洁&amp;pageFrom=category"
                  class="category-3-item "
                  >厨房清洁</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=172fd68e05f67e624b96d73ab4bd50fc&amp;categoryName=卫浴清洁&amp;pageFrom=category"
                  class="category-3-item "
                  >卫浴清洁</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=83df46548a49410186caef1b7e4cfd03&amp;categoryName=家电清洁&amp;pageFrom=category"
                  class="category-3-item "
                  >家电清洁</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=6b6b128002770e055dc41b3268b97185&amp;categoryName=除味/消毒&amp;pageFrom=category"
                  class="category-3-item hot"
                  >除味/消毒</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="日用杂货">日用杂货</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=9082915adeb902fb878a1a822ba9789f&amp;categoryName=桌面风扇&amp;pageFrom=category"
                  class="category-3-item hot"
                  >桌面风扇</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=5e0c42c4f5a3d949311426527bc5bd77&amp;categoryName=驱虫用品&amp;pageFrom=category"
                  class="category-3-item hot"
                  >驱虫用品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=38b198d211e3d4a917878a454920779a&amp;categoryName=卫浴用品&amp;pageFrom=category"
                  class="category-3-item "
                  >卫浴用品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=bbd133d3dcb4d8305ced4b920be3044a&amp;categoryName=雨具&amp;pageFrom=category"
                  class="category-3-item "
                  >雨具</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=011522068280b2485fa8da4b36256891&amp;categoryName=保暖防护&amp;pageFrom=category"
                  class="category-3-item "
                  >保暖防护</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=978ec802267206b8ad6d494ec206a897&amp;categoryName=手电筒&amp;pageFrom=category"
                  class="category-3-item "
                  >手电筒</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3bff89f9666dd84ab4dc46bd762fd5f6&amp;categoryName=晾晒&amp;pageFrom=category"
                  class="category-3-item "
                  >晾晒</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=91f1c7b8713d4f1c9317cacb4c61b5f3&amp;categoryName=旅行配件&amp;pageFrom=category"
                  class="category-3-item "
                  >旅行配件</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="纸品湿巾">纸品湿巾</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=04b8dd573935d697e356719f19cb2eaa&amp;categoryName=抽纸&amp;pageFrom=category"
                  class="category-3-item hot"
                  >抽纸</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d22b7056760a5b69fc9ad178bae762c8&amp;categoryName=卷纸&amp;pageFrom=category"
                  class="category-3-item "
                  >卷纸</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=8e95a27059ed50a201538c61785e8768&amp;categoryName=湿巾&amp;pageFrom=category"
                  class="category-3-item "
                  >湿巾</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=c23cd2157cc155d9ac9fc529048a14e9&amp;categoryName=湿厕纸&amp;pageFrom=category"
                  class="category-3-item "
                  >湿厕纸</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=ebd90414eceb1f6a8b0671ef9f307869&amp;categoryName=手帕纸&amp;pageFrom=category"
                  class="category-3-item "
                  >手帕纸</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=fd0cea2b6cf6152b833e78d363dfab3b&amp;categoryName=厨房用纸&amp;pageFrom=category"
                  class="category-3-item "
                  >厨房用纸</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="文创礼品">文创礼品</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=fdc3dbf485fcec728fffffeed933f5b6&amp;categoryName=创意礼品&amp;pageFrom=category"
                  class="category-3-item "
                  >创意礼品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=6f034bc57d78b76b65ee6c996b60de27&amp;categoryName=工艺礼品&amp;pageFrom=category"
                  class="category-3-item "
                  >工艺礼品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=fb1252bc5d93bda0d29c3b5ee5f40a02&amp;categoryName=邮币收藏&amp;pageFrom=category"
                  class="category-3-item hot"
                  >邮币收藏</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=5049787b594b989325eb8e6c59240792&amp;categoryName=棋牌桌游&amp;pageFrom=category"
                  class="category-3-item "
                  >棋牌桌游</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=dcb31c6a4bfed33a2b505f31c3ac3e9b&amp;categoryName=手办及IP周边&amp;pageFrom=category"
                  class="category-3-item "
                  >手办及IP周边</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=0d929ef7683f88c3dad8ca956ba89106&amp;categoryName=装饰字画&amp;pageFrom=category"
                  class="category-3-item "
                  >装饰字画</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="工具">工具</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=76f1ba22ff8e27a70b560f6e7febd4a2&amp;categoryName=电动工具&amp;pageFrom=category"
                  class="category-3-item "
                  >电动工具</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=4aa2c6d1d0be88a495e7657e90b5ee60&amp;categoryName=工具箱&amp;pageFrom=category"
                  class="category-3-item "
                  >工具箱</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=e359ba31bfcf1433e59163cda6e3a1ac&amp;categoryName=安防工具&amp;pageFrom=category"
                  class="category-3-item "
                  >安防工具</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=332531d32acf1ce4386bf00e0cb597eb&amp;categoryName=手动工具&amp;pageFrom=category"
                  class="category-3-item "
                  >手动工具</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=1675fd25e56a4bb58c40f47048600950&amp;categoryName=测量工具&amp;pageFrom=category"
                  class="category-3-item "
                  >测量工具</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="办公文具">办公文具</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=2670014d1377c723ad83bcd0565351a2&amp;categoryName=笔类&amp;pageFrom=category"
                  class="category-3-item "
                  >笔类</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3e5f1f6791b8fa6d2aa5764f4a32c64b&amp;categoryName=学生文具&amp;pageFrom=category"
                  class="category-3-item "
                  >学生文具</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=98791a9328a92b2405851d6913afdbaf&amp;categoryName=本册便签&amp;pageFrom=category"
                  class="category-3-item "
                  >本册便签</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=67ca99200b3c753dea7031f661c669f2&amp;categoryName=办公设备&amp;pageFrom=category"
                  class="category-3-item "
                  >办公设备</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="收纳用品">收纳用品</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=a448fc41eb777b2f4c28e1198ca54056&amp;categoryName=收纳袋/包&amp;pageFrom=category"
                  class="category-3-item "
                  >收纳袋/包</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=0c1dc2f4ae6c217557b9dea7912c74db&amp;categoryName=收纳架/篮&amp;pageFrom=category"
                  class="category-3-item "
                  >收纳架/篮</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=34fdcb82252bf79e9236891af8da53cc&amp;categoryName=收纳盒/箱&amp;pageFrom=category"
                  class="category-3-item "
                  >收纳盒/箱</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="乐器">乐器</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b1692a310bcaa51f002fdfdcf57006cb&amp;categoryName=吉他/尤克里里&amp;pageFrom=category"
                  class="category-3-item "
                  >吉他/尤克里里</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=011acbf080f77386eb6a25b013ba64a1&amp;categoryName=电钢琴&amp;pageFrom=category"
                  class="category-3-item "
                  >电钢琴</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=5f02faa083750fb057cfa27feb8eef47&amp;categoryName=打击乐器&amp;pageFrom=category"
                  class="category-3-item "
                  >打击乐器</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="图书音像">图书音像</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=7762dce0bde8126353e61ede18a891c8&amp;categoryName=人文社科&amp;pageFrom=category"
                  class="category-3-item "
                  >人文社科</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=73add9cb3dd235f32077ad07522c3963&amp;categoryName=经管励志&amp;pageFrom=category"
                  class="category-3-item "
                  >经管励志</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d98f916c8cf0d796e685cc4f514d5715&amp;categoryName=历史文学&amp;pageFrom=category"
                  class="category-3-item "
                  >历史文学</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=050109fe5e987a870b1e8941e39b1852&amp;categoryName=时尚生活&amp;pageFrom=category"
                  class="category-3-item "
                  >时尚生活</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="sub-cate-area">
          <div class="cate-name">服装配饰</div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="热门精选">热门精选</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=2a849e5223dcae80259567e56f4fe75d&amp;categoryName=男装榜单&amp;pageFrom=category"
                  class="category-3-item hot"
                  >男装榜单</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=6720a1c9f2f0f16aacc721bbb6bb209a&amp;categoryName=家居服榜单&amp;pageFrom=category"
                  class="category-3-item hot"
                  >家居服榜单</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=e5fbb4d36453fefa8b2f925e478c6e30&amp;categoryName=女装榜单&amp;pageFrom=category"
                  class="category-3-item hot"
                  >女装榜单</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=bef82118eff11a5a563b4bf9cad99bdc&amp;categoryName=配饰榜单&amp;pageFrom=category"
                  class="category-3-item hot"
                  >配饰榜单</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/w/spchome?_rt=weex&amp;id=fegs2boRcfNOkuQYP0jR-w"
                  class="category-3-item "
                  >服装定制</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=7da2e3081bb20105c406a29ba82702c3&amp;categoryName=热销机械表&amp;pageFrom=category"
                  class="category-3-item hot"
                  >热销机械表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=0cb1c793e2bec878d00a4082c94c9101&amp;categoryName=新品热卖&amp;pageFrom=category"
                  class="category-3-item hot"
                  >新品热卖</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=c3dd5cdab9e21864c8973c209304c296&amp;categoryName=大牌服饰&amp;pageFrom=category"
                  class="category-3-item hot"
                  >大牌服饰</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=cacc2d943172556f5e43afcc82faa0f0&amp;categoryName=初冬潮搭配&amp;pageFrom=category"
                  class="category-3-item hot"
                  >初冬潮搭配</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="衣服">衣服</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=6ce677f8792b2c491ba78e97dad874c9&amp;categoryName=T恤/POLO&amp;pageFrom=category"
                  class="category-3-item "
                  >T恤/POLO</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d3c2679fe351d3377c89620c9623b5c4&amp;categoryName=商务衬衫&amp;pageFrom=category"
                  class="category-3-item "
                  >商务衬衫</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b1e078aee32c04b6299b7c97b86eb3f7&amp;categoryName=休闲衬衫&amp;pageFrom=category"
                  class="category-3-item "
                  >休闲衬衫</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=58697ce1c7987d8e6a3e8bd07f6d7884&amp;categoryName=卫衣&amp;pageFrom=category"
                  class="category-3-item "
                  >卫衣</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=feff200a1e4590e07aeb1870d0df2c39&amp;categoryName=夹克/风衣&amp;pageFrom=category"
                  class="category-3-item "
                  >夹克/风衣</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=07d9b7172c9ef73f54f54dcf757b5da8&amp;categoryName=毛衫/针织衫&amp;pageFrom=category"
                  class="category-3-item "
                  >毛衫/针织衫</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=cf8c85397d3bcd6fc930db19d00f3516&amp;categoryName=西服西裤&amp;pageFrom=category"
                  class="category-3-item "
                  >西服西裤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d649c3b7017960b4eb2a4c83d8f0eb93&amp;categoryName=羽绒服/棉服&amp;pageFrom=category"
                  class="category-3-item "
                  >羽绒服/棉服</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="裤装">裤装</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=0c16e8842e7700f43958dd141d059189&amp;categoryName=休闲裤&amp;pageFrom=category"
                  class="category-3-item "
                  >休闲裤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d0b09afee964b29a03662b65cfeee47b&amp;categoryName=牛仔裤&amp;pageFrom=category"
                  class="category-3-item "
                  >牛仔裤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d8a828b9b87cbf7aed1b1924ccefa443&amp;categoryName=短裤&amp;pageFrom=category"
                  class="category-3-item "
                  >短裤</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="女装">女装</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=79a78c11125080705a97f447b0bdaee5&amp;categoryName=棉羽绒&amp;pageFrom=category"
                  class="category-3-item hot"
                  >棉羽绒</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=777c9977d0fdcb2ecd46fee9d3810084&amp;categoryName=风衣大衣&amp;pageFrom=category"
                  class="category-3-item "
                  >风衣大衣</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d0fffab9432fa2aa90dfc7e09808c27c&amp;categoryName=西服/夹克&amp;pageFrom=category"
                  class="category-3-item hot"
                  >西服/夹克</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=7d8471b173da65e34af7698470dee3d7&amp;categoryName=毛衣针织&amp;pageFrom=category"
                  class="category-3-item hot"
                  >毛衣针织</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=05552f0193649e194f0bbea8842144b3&amp;categoryName=裤装&amp;pageFrom=category"
                  class="category-3-item "
                  >裤装</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=30fd130b48b91ce04667d9f7e09f76e7&amp;categoryName=连衣裙&amp;pageFrom=category"
                  class="category-3-item "
                  >连衣裙</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=eda7bcc95121a282340fcf846269015d&amp;categoryName=衬衫/T恤&amp;pageFrom=category"
                  class="category-3-item "
                  >衬衫/T恤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=685b3d17843a37486b3f8d74a0c92c6d&amp;categoryName=半身裙&amp;pageFrom=category"
                  class="category-3-item "
                  >半身裙</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="内衣">内衣</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=838b78c7f68ea69ef6d8eb8c95ebf553&amp;categoryName=保暖内衣&amp;pageFrom=category"
                  class="category-3-item hot"
                  >保暖内衣</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=f2a3d8d9914dee1d0543c298c025cf99&amp;categoryName=男士内裤&amp;pageFrom=category"
                  class="category-3-item "
                  >男士内裤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=6ff3ace9f590c4b07d17e0feb4ece07d&amp;categoryName=女士内裤&amp;pageFrom=category"
                  class="category-3-item "
                  >女士内裤</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=e48da45ac53a0a745b8e45754d72b5df&amp;categoryName=家居服&amp;pageFrom=category"
                  class="category-3-item "
                  >家居服</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=a52a1c63d68b855bde546688045fb8c0&amp;categoryName=打底T恤/背心/吊带&amp;pageFrom=category"
                  class="category-3-item "
                  >打底T恤/背心/吊带</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=8dc275d8e20d8d08f4fefd94b984b0af&amp;categoryName=文胸&amp;pageFrom=category"
                  class="category-3-item "
                  >文胸</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=45d943fe70cd59a00d4ee53c16a5b306&amp;categoryName=男士袜子&amp;pageFrom=category"
                  class="category-3-item "
                  >男士袜子</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=a3b81dc0dd63e427f5cfa9f9a02c2903&amp;categoryName=女士袜子&amp;pageFrom=category"
                  class="category-3-item "
                  >女士袜子</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="珠宝">珠宝</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=dc5eb0defc3b722f1e48a042b88dbc79&amp;categoryName=黄金&amp;pageFrom=category"
                  class="category-3-item hot"
                  >黄金</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=129d9d425795e5f0d0590023f8d3cf1b&amp;categoryName=K金&amp;pageFrom=category"
                  class="category-3-item "
                  >K金</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=24178ff188edd97fa4b94fa558275514&amp;categoryName=银饰&amp;pageFrom=category"
                  class="category-3-item "
                  >银饰</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=0c30f82b3e994f6252163ce652ca8522&amp;categoryName=钻石&amp;pageFrom=category"
                  class="category-3-item "
                  >钻石</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=cc988972edd2f40b5ef0e3f47ae40fd4&amp;categoryName=珍珠&amp;pageFrom=category"
                  class="category-3-item "
                  >珍珠</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=33befcb36047f6ee18b3ae20366cc74e&amp;categoryName=投资金银&amp;pageFrom=category"
                  class="category-3-item hot"
                  >投资金银</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3c095c9bd0f2427a692364f2702234ef&amp;categoryName=文玩珠串&amp;pageFrom=category"
                  class="category-3-item "
                  >文玩珠串</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=e2308de3780ce1702170e30abdc8a715&amp;categoryName=翡翠玉石&amp;pageFrom=category"
                  class="category-3-item hot"
                  >翡翠玉石</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b91bd7b24db5be78b5b7246225dabba7&amp;categoryName=时尚饰品&amp;pageFrom=category"
                  class="category-3-item "
                  >时尚饰品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=a642af11625ff3bc43475d4afabecb50&amp;categoryName=祈福转运珠&amp;pageFrom=category"
                  class="category-3-item hot"
                  >祈福转运珠</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=cbef1d507009ba87c733fe1242298249&amp;categoryName=特卖会&amp;pageFrom=category"
                  class="category-3-item "
                  >特卖会</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=d020c1b065bb11598e69f664b6fc0e2c&amp;categoryName=12.12精选热礼&amp;pageFrom=category"
                  class="category-3-item hot"
                  >12.12精选热礼</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="首饰">首饰</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=ae0cc11e1f9faf870a3c001294ae323f&amp;categoryName=项链&amp;pageFrom=category"
                  class="category-3-item "
                  >项链</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=683a50428bae0ac3d7a9a02313a3caca&amp;categoryName=戒指&amp;pageFrom=category"
                  class="category-3-item "
                  >戒指</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=836fe30f53793afc115a4663e3eb9cc6&amp;categoryName=耳饰&amp;pageFrom=category"
                  class="category-3-item "
                  >耳饰</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=4f61b2b631cd1be7a4e76bff89ecbc2b&amp;categoryName=手链&amp;pageFrom=category"
                  class="category-3-item "
                  >手链</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=ede5481156a9d813808c8ce19709880b&amp;categoryName=新品&amp;pageFrom=category"
                  class="category-3-item hot"
                  >新品</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=72934c0052fb1a436ea6758c82fd3e31&amp;categoryName=轻定制&amp;pageFrom=category"
                  class="category-3-item "
                  >轻定制</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="手表">手表</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=07c1c799c1201fef196df6fbea508477&amp;categoryName=机械表&amp;pageFrom=category"
                  class="category-3-item hot"
                  >机械表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=2d064af9c5a82272cbfe8b7007c87584&amp;categoryName=石英表&amp;pageFrom=category"
                  class="category-3-item "
                  >石英表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3415b52aa6ffc14459aac7cbe5ecc5dc&amp;categoryName=光动能&amp;pageFrom=category"
                  class="category-3-item hot"
                  >光动能</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=541bbdfe693622153aebb8044c9a4d79&amp;categoryName=男表&amp;pageFrom=category"
                  class="category-3-item hot"
                  >男表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=f4fd80a9ad47f8130ee6f6598ce2a4d2&amp;categoryName=女表&amp;pageFrom=category"
                  class="category-3-item hot"
                  >女表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=26cabe835da53372ed2ca615689cc942&amp;categoryName=情侣表&amp;pageFrom=category"
                  class="category-3-item "
                  >情侣表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=7c946596d558fce4ddad90053033f523&amp;categoryName=瑞士名表&amp;pageFrom=category"
                  class="category-3-item hot"
                  >瑞士名表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=de42e55211ce220747ca005aeb16343f&amp;categoryName=日韩腕表&amp;pageFrom=category"
                  class="category-3-item "
                  >日韩腕表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=43d407e4ea0e46d0207c8726c7d8ed87&amp;categoryName=欧美腕表&amp;pageFrom=category"
                  class="category-3-item "
                  >欧美腕表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3a1ad1b93b1691d1c3379032fbf6550e&amp;categoryName=经典国表&amp;pageFrom=category"
                  class="category-3-item "
                  >经典国表</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=494bb32c19a9df9591842773446cb326&amp;categoryName=有品精选&amp;pageFrom=category"
                  class="category-3-item hot"
                  >有品精选</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="眼镜">眼镜</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=f4a860346a190c836a19d7e4abaecee7&amp;categoryName=TOP5推荐&amp;pageFrom=category"
                  class="category-3-item hot"
                  >TOP5推荐</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=cf7d903f988923ad5cea2962947f1c4f&amp;categoryName=近视镜&amp;pageFrom=category"
                  class="category-3-item hot"
                  >近视镜</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=81bb191829e33c5c3d03001c77f4a1c4&amp;categoryName=智能变色&amp;pageFrom=category"
                  class="category-3-item "
                  >智能变色</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=46d9d5a9fea4914332c7077bad2f33b9&amp;categoryName=感恩季推荐&amp;pageFrom=category"
                  class="category-3-item "
                  >感恩季推荐</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=8f8a7b955f8f25d9576e100b1b5ebe95&amp;categoryName=防蓝光&amp;pageFrom=category"
                  class="category-3-item hot"
                  >防蓝光</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b68d458ae49af1765ad606b71d031456&amp;categoryName=太阳镜&amp;pageFrom=category"
                  class="category-3-item "
                  >太阳镜</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b9197225e1c6af3ce0b5ad37038fd17b&amp;categoryName=老花镜&amp;pageFrom=category"
                  class="category-3-item "
                  >老花镜</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=11a06e36016c8e1fb58a3ab0b5dbe1bf&amp;categoryName=夹片&amp;pageFrom=category"
                  class="category-3-item "
                  >夹片</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=3772c66022391811916f89ab24909819&amp;categoryName=其他&amp;pageFrom=category"
                  class="category-3-item "
                  >其他</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="配饰">配饰</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=9ed4cd9ab715be30b2094878460578d9&amp;categoryName=皮带&amp;pageFrom=category"
                  class="category-3-item "
                  >皮带</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=04dd975b4114ad660f7fd2e2ef648735&amp;categoryName=帽子&amp;pageFrom=category"
                  class="category-3-item "
                  >帽子</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=13efa263cbd1ef810aabc9de6c3b80bc&amp;categoryName=围巾手套&amp;pageFrom=category"
                  class="category-3-item "
                  >围巾手套</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="大牌服饰">大牌服饰</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=2da432ed07a1ed766917b60dd5c3652a&amp;categoryName=Armani&amp;pageFrom=category"
                  class="category-3-item "
                  >Armani</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=4a463bc3e3aa9b48f1ae19d5627b8cfd&amp;categoryName=EA7&amp;pageFrom=category"
                  class="category-3-item "
                  >EA7</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=e808cbbf28cde6d977897e8e3d127bfa&amp;categoryName=Hugo Boss&amp;pageFrom=category"
                  class="category-3-item "
                  >Hugo Boss</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=95a3c27fea4b356637cc3cd8a3e43a8b&amp;categoryName=Champion&amp;pageFrom=category"
                  class="category-3-item "
                  >Champion</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=b4fd6817dde19b44ae4c616737440563&amp;categoryName=Versace&amp;pageFrom=category"
                  class="category-3-item "
                  >Versace</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=4597623376032a9ed4daa32cae7e4115&amp;categoryName=Kenzo&amp;pageFrom=category"
                  class="category-3-item "
                  >Kenzo</a
                ><a
                  data-src="https://www.xiaomiyoupin.com/search?queryId=1657be6e87691d6f25627a186ae9d707&amp;categoryName=Zegna&amp;pageFrom=category"
                  class="category-3-item "
                  >Zegna</a
                ></span
              >
            </div>
          </div>
          <div class="sub-nav-row">
            <div class="sub-nav-item-row">
              <span class="category-2-item"
                ><span class="name" title="热门品牌">热门品牌</span
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVCQkYwOUNEQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVCQkYwOUREQUFDMTFFOTg4MjdGMkE2NzI5QzVEMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NUJCRjA5QURBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUJCRjA5QkRBQUMxMUU5ODgyN0YyQTY3MjlDNUQwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po++138AAACLSURBVHjaYjQ2Nl7CwMBQAcRPGJAAExBPBuI1QCyKLnESiNuAeAMQc8EkWKD0JiDmB+JlQBwGxL+YkHQvBuITQDwPiBmRJUCgA4hfgoxGlwCBfyC7WdAEQc6WBOJYZIloILYC4hAg/g+T8APiLCB2BbkI5lxzIK4BYm8g/obswWwgDgLi18iWAQQYAI8wFjnp4CZ5AAAAAElFTkSuQmCC"
                  class="icon"/></span
              ><span class="category-3-list"
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=TCSMAdU-xdQFHQyTGyc2VA&amp;hideNavBar=1&amp;spmref=YouPin_A.$Detail$_109805.brand.0.55003734&amp;sbh=32"
                  class="category-3-item "
                  >90分</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=XIm14gTDDVvc7wmnJfVcrg&amp;hideNavBar=1&amp;spmref=YouPin_A.$Detail$_109900.brand.0.99576147&amp;sbh=32"
                  class="category-3-item "
                  >棉花史密斯</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=WzUuXg2OgjzMbd4ycEhK4w&amp;hideNavBar=1&amp;spmref=YouPin_A.$Detail$_108553.brand.0.81970724&amp;sbh=32"
                  class="category-3-item "
                  >码尚</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=bL8AEo-ZPX0CvaLX15cJAA&amp;hideNavBar=1&amp;useWebkit=1"
                  class="category-3-item "
                  >轻派</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=_H3SlhB2vjhO6ZjV-uBqbw&amp;hideNavBar=1&amp;spmref=YouPin_A.$Detail$_107747.brand.0.61844725&amp;sbh=32"
                  class="category-3-item "
                  >MITOWNLIFE</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=kYPA18xKn5wouYtkBxyVyg&amp;hideNavBar=1&amp;spmref=YouPin_A.$Detail$_108268.brand.0.53610670&amp;sbh=32"
                  class="category-3-item "
                  >DMN</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/api/zhaoshang/shop?id=Y6j65XIs2df5KfUIkUT-Ng&amp;hideNavBar=1&amp;useWebKit=1"
                  class="category-3-item "
                  >Mikeboy</a
                ><a
                  data-src="https://app.xiaomiyoupin.com/flagshipstore?id=509&amp;title=365WEAR"
                  class="category-3-item "
                  >365wear</a
                ><a
                  data-src="https://app.xiaomiyoupin.com/flagshipstore?id=648&amp;title=COMO LIVING"
                  class="category-3-item "
                  >COMOLIVING</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/api/zhaoshang/shop?id=ifdAqH5sHh3M8SrNuQoVYQ&amp;hideNavBar=1&amp;useWebKit=1"
                  class="category-3-item "
                  >螃蟹秘密</a
                ><a
                  data-src="https://app.xiaomiyoupin.com/flagshipstore?id=913&amp;title=海盗船"
                  class="category-3-item "
                  >海盗船</a
                ><a
                  data-src="https://app.xiaomiyoupin.com/flagshipstore?id=1217&amp;title=SUNSHINE JOB"
                  class="category-3-item "
                  >阳光乔布</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/api/zhaoshang/shop?id=pn3Vsmem-TvwQ0mP4tamtg&amp;hideNavBar=1&amp;useWebKit=1"
                  class="category-3-item "
                  >周大福</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=K3y9qO0TzCvMABWHTECaGg&amp;hideNavBar=1&amp;useWebkit=1"
                  class="category-3-item "
                  >赛菲尔</a
                ><a
                  data-src="https://m.xiaomiyoupin.com/app/shop/pages/shopcenter/c/1.html?id=mU8K0VJj4eiiiGHdPp5Ljw&amp;hideNavBar=1&amp;useWebkit=1"
                  class="category-3-item "
                  >CIGA Design</a
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
export default {
  name: "Category",
  data() {
    return { isShow: false };
  },
};
</script>

<style lang="less" scoped>
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
