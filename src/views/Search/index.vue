<template>
 <div>
    <Top></Top>
    <Header></Header>
    <div class="searchContainer">
     <div class="searchContent">
      <div class="searchTit"> 为您找到54条数据</div>
      <!-- 品牌内容 -->
       <div class="goodsList clearFix">
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
       </div>
       <div class="goodsList clearFix">
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
       </div>
       <div class="goodsList clearFix">
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/001.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
       </div>
     </div>
       <!-- 分页器 -->
       <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      
    
  </div>
  <FixedBar></FixedBar>
  <Footer></Footer>
 </div>
</template>

<script>
  export default {
    name:'Search'
  }
</script>

<style lang="less" scoped>
.searchContainer{
  
   width: 1080px;
    margin: 0 auto;
    // text-align: center;
  .searchContent{
    width: 1080px;
    margin: 0 auto;
    .searchTit{
      font-size: 14px;
      margin: 30px 0 10px 0;
    }
    .goodsList{
     
     .clearFix::after{
        content:"";
        display: block;
        clear:both;
      }
      .goodsItem{
         cursor: pointer;
        float: left;
        width:262px ;
        height: 267px;
        background-color: #fff;
        text-align: center;
        margin-right: 5px;
        margin-bottom: 5px;
      }
     
      img{
        width: 195px;
        height: auto; 
      }
      p{
        text-align: center;
        font-size: 16px;
        // cursor: pointer;
      }
      span{
        display: block;
        margin-top: 8px;
        color: #A92112;
      }
    }
    
  }
}
</style>