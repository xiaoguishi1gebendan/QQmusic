<template>
<div>
    <div class="tabs">
      <router-link  class="tabchild" to='recommend'>推荐</router-link>
     <router-link class="tabchild" to='singer'>歌手</router-link>
     <router-link class="tabchild" to="rank">排行</router-link>
     <router-link  class="tabchild" to="search">搜索</router-link>
    
    </div>
     <router-view></router-view>
</div>
 
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>
.tabs{
     width: 100%;
    overflow: hidden;
}
.tabchild{
    float: left;
    width: 25%;
    text-align: center;
    color: gray;
    text-decoration: none;
    font: 15px/30px "";
    box-sizing: border-box
}
 .router-link-active{
     border-bottom: 2px solid #31C27C;
     color:#31C27C;
 }
</style>
