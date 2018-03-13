<template>
 <div>
   <h2 class="singerhot">热门歌单推荐</h2>
    <div class="list" v-for="(item,index) in DiscList" :key="index">
      <ul>
        <li><img  v-lazy="item.imgurl" alt=""></li>
        <li>
          <h3>{{item.creator.name}}</h3>
          <p>{{item.dissname}}</p>
        </li>
      </ul>
    </div>
 </div>
</template>

<script>
import { getDiscList} from '@/api/recommend.js'
import {ERR_OK} from '@/api/config.js'
 export default {
   data () {
     return {
         DiscList:[]
     }
   },
   mounted () {
     this.getListapi();  
   },
   methods: {
       getListapi(){
         console.log('aa')
            getDiscList().then((res) => {         
            this.DiscList = res.data.list;
              console.log(this.DiscList)
            
          
        })
   }
 }
 }
</script>

<style>
.singerhot{
  text-align: center;
  margin-top: 0.4rem !important;
}
.list{
  margin-top: 0.4rem;

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
