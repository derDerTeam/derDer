<template>
 <div>
    <Top></Top>
    <Header></Header>
    <div class="searchContainer">
      
       <!-- 有商品数据 -->
      <div class="searchContent" v-if="keyword">
         <div class="searchTit" > 为您找到{{total}}条数据</div>
         <!-- 品牌内容 -->
       <div class="goodsList  clearFix" >
         <!-- <router-link to="/detail"> -->
            <div class="goodsItem clearFix"  v-for="(good,index) in goodsList" :key="good.id" @click="toDetail">
               <img :src="good.url" alt="">
               <p>{{good.name}}</p>
               <span><i>￥</i>{{good.price}}</span>
            </div>
            <!-- </router-link> -->
         </div>
        
     </div>

      <!-- 没有商品数据 -->
      <div class="noGoods" v-else >
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
            <div class="goodsList clearFix">
               <router-link to="/detail">
                     <div class="goodsItem"   v-for="(item,index) in search" :key="item.index">
                        <img :src="item.data.goods.imgSquare" alt="">
                        <p>{{item.data.goods.name}}</p>
                        <span><i>￥</i>{{item.data.goods.gid}}</span>
                     </div>
                  </router-link>
               </div>
            </div>
         </div>
      </div>
       
       <!-- <div>
          
       </div> -->
       <!-- 分页
       <div class="search-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
       -->
       
  </div>
  <FixedBar></FixedBar>
  <Footer></Footer>
 </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Pagination from './Pagination'
  export default {
    name:'Search',
    props:['keyword'],
    data(){
      return{
         isShow:true,
         goodsList:[
            {
               id:1,
               url:'https://img.youpin.mi-img.com/shopmain/cf28d14ccbdf277876ffcbcea70fe4ca.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:135
            },
            {
               id:2,
               url:'https://img.youpin.mi-img.com/shopmain/f18a3247c248eb907c40d8b2e7d3bcdf.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'美的AAA级健康读写台灯',
               price:566
            },
            {
               id:3,
               url:'https://img.youpin.mi-img.com/shopmain/8bbecefb998b37875641501d45a0543a.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'华趣国AA级遥控触控落地灯',
               price:565
            },
            {
               id:4,
               url:'https://img.youpin.mi-img.com/shopmain/fdaa598c8019f88d25abfd342ca2c6bc.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'露得清维A醇肤色修护晚霜',
               price:1323
            },
            {
               id:5,
               url:'https://img.youpin.mi-img.com/shopmain/cf28d14ccbdf277876ffcbcea70fe4ca.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'周大福天然A货翡翠玉石男女手饰',
               price:599
            },
            {
               id:6,
               url:'https://img.youpin.mi-img.com/shopmain/cf28d14ccbdf277876ffcbcea70fe4ca.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小米10 青春版 5G',
               price:966
            },
            {
               id:7,
               url:"https://img.youpin.mi-img.com/shopmain/0c33f90cd572d163a74dd256a890570f.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800",
               name:'哆啦A梦十二星座香薰',
               price:4621
            },
            {
               id:8,
               url:'https://img.youpin.mi-img.com/shopmain/f0134e31a98b0123c27a4263adde2d87.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'哆啦A梦太阳能旋转香薰',
               price:6262
            },
            {
               id:9,
               url:'https://img.youpin.mi-img.com/shopmain/cf28d14ccbdf277876ffcbcea70fe4ca.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:895
            },
            {
               id:10,
               url:'https://img.youpin.mi-img.com/shopmain/a8a93803119875c4948951de8bd1269c.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:562
            },
            {
               id:11,
               url:'https://img.youpin.mi-img.com/shopmain/bab309cb1107f9749e3d98cfed952b45.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:4626
            },
            {
               id:12,
               url:'https://img.youpin.mi-img.com/shopmain/ecdba85bbf29ec08ac14f3fdb4232b88.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:654
            },
            {
               id:13,
               url:'https://img.youpin.mi-img.com/shopmain/72614268b07639f9329139db8d1175ea.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:995
            },
            {
               id:14,
               url:'https://img.youpin.mi-img.com/shopmain/004c2c579a87859c68a52e65c6bdc1a6.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'小白智能看护灯',
               price:4546
            },
             {
               id:15,
               url:'https://img.youpin.mi-img.com/shopmain/2dd1d6c4151c10d3752211b3e68cba8a.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'哆啦A梦十二星座香薰',
               price:4621
            },
            {
               id:16,
               url:'https://img.youpin.mi-img.com/shopmain/b9c90b8ec8372c84dd23120499a644ae.png@base@tag=imgScale&F=webp&h=800&w=800?w=800&h=800',
               name:'哆啦A梦太阳能旋转香薰',
               price:6262
            },
         ],
         total:16,
      }
    },
    mounted(){
     this.getSearchList()
    },
   methods:{
     
     //封装函数
      getSearchList() {
      this.$store.dispatch("getSearchList");
    },



      //跳转到详情页
    toDetail(){
       this.$router.push('/detail')
     },

   },
  computed:{
     ...mapState({search:state=>state.search.searchList}),
   //   ...mapGetters(['goods'])
  } ,
  components:{
     Pagination
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
            margin-bottom: 200px;
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
                  text-decoration: none;
                 
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
                     height: 267px;
                     box-shadow: 0px 1px 4px rgba(0,0,0,0.5),
                           0px 0px 20px rgba(0,0,0,0.4) inset;

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
            margin-bottom: 150px;
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
               width:260px ;
               height: 267px;
               background-color: #fafafa;
               text-align: center;
               margin-right: 5px;
               margin-bottom: 6px;
               transition: all 0.5s;
               .clearFix::after{
               content:"";
               display: block;
               clear:both;
               }
               }
               .goodsItem:hover{
               // height: 265px;
               box-shadow: 0px 1px 4px rgba(0,55,55,0.5),
                     0px 0px 20px rgba(0,0,0,0.3) inset;

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