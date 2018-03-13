<template>
<div>
<mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in imgList" :key="index">
   <a :href="item.linkUrl"><img :src="item.picUrl" alt="" class="a"></a> 
  </mt-swipe-item>
</mt-swipe>
</div>
 
</template>

<script>
import {getRecommend} from '@/api/recommend.js'

export default {
    data(){
      return{
        imgList:[]
      }
    },
    created () {
     
    },
    mounted () {
      this.getbannerapi();
    },
  methods: {
    getbannerapi(){
           getRecommend().then((res)=>{
                this.imgList=res.data.slider;
                console.log("aa")
           })
       }
       
  }
}

</script>

<style>
.mint-swipe{
  width: 100%;
  height: 3rem;
}
.mint-swipe-item{
  background: red;
  width: 100%;
}
.mint-swipe img{
  width: 100%;
}
.mint-swipe-indicators{
  bottom:0.06rem;
}
.mint-swipe-indicator{
  margin:0 3px !important;
}
</style>
