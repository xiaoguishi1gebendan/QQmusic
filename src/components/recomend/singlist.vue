<template>
 <div>
    <div class="list" v-for="(item,index) in DiscList" :key="index">
      <ul >
        <li><img :src="item.imgurl" alt=""></li>
        <li>
          <h3>{{item.dissname}}</h3>
          <p>{{item.creator.name}}</p>
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
.list ul{
  overflow: hidden;
 margin-top: 30px !important;
  padding: 0;
}
.list ul li{
  float: left;
}
.list ul li:first-child{ 
  width: 30px;
  height: 30px;
  background: red;
}
 .list ul li:first-child img{
   width: 30px;
 }
</style>
