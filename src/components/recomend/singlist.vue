<template>
<div>
  
        <div class="bpp">
          <div class="main">
            <div class="div" ref="div">
                <div class="list" >
                   <h1 class="singerhot">{{gequ}}</h1>
                  <ul v-for="(item,index) in DiscList" :key="index">
                    <li><img  v-lazy="item.imgurl" alt=""></li>
                    <li>
                      <h3>{{item.creator.name}}</h3>
                      <p>{{item.dissname}}</p>
                    </li>
                  </ul>
                </div>
            </div>
         </div>
        </div>
</div>
 
</template>

<script>
import { getDiscList} from '@/api/recommend.js'
import BScroll from 'better-scroll'
 export default {
   data () {
     return {
       gequ:'',
         DiscList:[]
     }
   },
   mounted () {
     this.getListapi();  
     this.$nextTick(()=>{
       this.scroll=new BScroll(this.$refs.div,{
         click:true,
         scrollY:true,
       })
     })
     
   },
   methods: {
       getListapi(){
         console.log('aa')
            getDiscList().then((res) => {    
              this.gequ="热门歌单推荐"     
            this.DiscList = res.data.list;
            
              console.log(this.DiscList)
            
          
        })
   }
 }
 }
</script>

<style>

.bpp{
  display: flex;
  background: yellow;
} 
.main{
  flex:1;
  display: block;
  position: relative;
  overflow: hidden;
}
.div{
  width: 100%;
  height: 8rem;
  background: red;
}
.list{
  position: initial;
  width: 100%;
  margin-top: 0.4rem;

}
.singerhot{
  text-align: center;
  margin-top: 0.4rem !important;
}

.list ul{
  overflow: hidden;
  padding: 0.2rem !important;
}
.list ul li{
  float: left; 
}
.list ul li:first-child{ 

  width: 1.4rem;
  height: 1.4rem;
  /* background: red; */
}
.list ul li:last-child{
  padding-left: 0.4rem;
  width: 5rem;
}
 .list ul li:first-child img{
   width: 1.4rem;
 }
  .list ul li {
    line-height: 0.68rem;
    font-size: 0.3rem !important;
  }
  .list ul li p{
    color: gray;
    font-size: 0.28rem;
  }
  image[lazy=loading] {
  width: 40px;
  height:40px;
  margin: auto;
}
</style>
