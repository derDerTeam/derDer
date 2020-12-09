<template>
 <div>
    <Top></Top>
    <Header></Header>
    <div class="searchContainer">
     <div class="searchContent">
      <div class="searchTit"> 为您找到54条数据</div>
      <!-- 品牌内容 -->
       <div class="goodsList clearFix" >
        <router-link to="/detail">
            <div class="goodsItem">
               <img src="./images/001.jpg" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
          </router-link>
          <div class="goodsItem">
             <img src="./images/002.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/003.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
          <div class="goodsItem">
             <img src="./images/004.jpg" alt="">
             <p>云米自动波轮洗衣机5.5kg</p>
             <span><i>￥</i>678</span>
          </div>
       </div>
       <div class="goodsList clearFix">
          <div class="goodsItem">
             <img src="./images/005.jpg" alt="">
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
       <div class="search-pagination">
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
    name:'Search',
    data(){
      //  show: true
    },
   methods:{
      
   }
    
  }
</script>

<style lang="less" scoped>
div{
  background-color: #F2F2F2;
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
        transition: all 0.5s;
      
      }
      .goodsItem:hover{
        height: 260px;
        box-shadow: 0px 1px 4px rgba(0,0,0,0.3),
				0px 0px 20px rgba(0,0,0,0.1) inset;

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
  .search-pagination{
   margin-bottom: 90px;
   text-align: center;
   margin-top: 30px;
 }
}
}
</style>