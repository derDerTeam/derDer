<template>
 <div>
    <Top></Top>
    <Header></Header>
    <div class="searchContainer">
      
       <!-- 有商品数据 -->
      <div class="searchContent">
         <div class="searchTit"> 为您找到54条数据</div>
         <!-- 品牌内容 -->
       <div class="goodsList clearFix" >
         <router-link to="/detail">
               <div class="goodsItem">
                  <img src="https://img.youpin.mi-img.com/shopmain/55442f5624d8a9fa6cf18606f907be23.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
                  <p>云米自动波轮洗衣机5.5kg</p>
                  <span><i>￥</i>678</span>
               </div>
            </router-link>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/46d71f901b78fe0847dc3ab6bf62290f.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/55c83daa2293fc3bb5e929a90aadd97a.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/2949b8ef8a23d5adbad86b304b192f2c.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
         </div>
         <div class="goodsList clearFix">
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/c0e8a45d5175b81dfd6e2ecb38ae522c.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/f8c437f56aafed294d2abf128243e968.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/c24641b6406c34f4ca2ffe64c0a0c14b.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/c0e8a45d5175b81dfd6e2ecb38ae522c.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
         </div>
         <div class="goodsList clearFix">
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/f8c437f56aafed294d2abf128243e968.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/46d71f901b78fe0847dc3ab6bf62290f.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/f8c437f56aafed294d2abf128243e968.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
            <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/46d71f901b78fe0847dc3ab6bf62290f.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
               <p>云米自动波轮洗衣机5.5kg</p>
               <span><i>￥</i>678</span>
            </div>
         </div>
     </div>

      <!-- 没有商品数据 -->
      <div class="noGoods">
         <!-- 头部信 -->
         <div class="noData">
             <img src="./images/006.jpg" alt="">
            <p>抱歉，暂无商品数据</p>
            <!-- <a href="#">继续逛</a> -->
            <router-link to="/">继续逛</router-link>
         </div>

         <!-- 推荐商品列表数据 -->
       <div class="recommend">
         <p>为您推荐</p>
         <div class="recommendGoods">
            <!-- 品牌内容 -->
            <div class="goodsList clearFix" >
               <router-link to="/detail">
                     <div class="goodsItem">
                        <img src="https://img.youpin.mi-img.com/shopmain/46d71f901b78fe0847dc3ab6bf62290f.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
                        <p>云米自动波轮洗衣机5.5kg</p>
                        <span><i>￥</i>678</span>
                     </div>
                  </router-link>
                  <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/c24641b6406c34f4ca2ffe64c0a0c14b.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
                     <p>云米自动波轮洗衣机5.5kg</p>
                     <span><i>￥</i>678</span>
                  </div>
                  <div class="goodsItem">
                     <img src="https://img.youpin.mi-img.com/shopmain/f8c437f56aafed294d2abf128243e968.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
                     <p>云米自动波轮洗衣机5.5kg</p>
                     <span><i>￥</i>678</span>
                  </div>
                  <div class="goodsItem">
               <img src="https://img.youpin.mi-img.com/shopmain/c24641b6406c34f4ca2ffe64c0a0c14b.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800" alt="">
                     <p>云米自动波轮洗衣机5.5kg</p>
                     <span><i>￥</i>678</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
       
     

       <!-- 分页 -->
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
      
    },
   methods:{
      
   }
    
  }
</script>

<style lang="less" scoped>
   div{
    background-color: #F2F2F2;
      //外层容器
      .searchContainer{
      
         width: 1080px;
         margin: 0 auto;
         
         //没有商品数据
         .noGoods{
            // height: 600px;
            .noData{
               text-align: center;
               margin-top: 80px;
               margin-bottom: 100px;
               p{
                  margin: 20px 0;
               }
               a{
                  font-size: 14px;
                  padding: 3px 25px;
                  border: 1px solid #333;
                  margin-bottom: 50px;
               }
            }
            .recommend{
               text-align: center;
               p{
                  font-size: 14px;
                  // margin-bottom: 40px;
               }
               .recommendGoods{
                  margin-top: 40px;
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
            
            }
         }


         //有商品数据
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
         //分页器
         .search-pagination{
            margin-bottom: 90px;
            text-align: center;
            margin-top: 30px;
         }
      }
   }
</style>