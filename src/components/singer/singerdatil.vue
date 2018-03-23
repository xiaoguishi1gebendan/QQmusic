<template>
<transition name="slide" >
  <div class="zhezhao" >
    <music-list></music-list>
 </div>
</transition>
 
</template>

<script>
import MusicList from './musiclist.vue'
import {getSingerDetail} from '../../api/singer.js'


export default {
  components: {
    MusicList
  }
}
</script>

<style>
.zhezhao{
 position: fixed;
  background: #000;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.slide-enter{
  left: 100%;
}
.slide-enter-active{
  transition: all 0.5s ;
}
.slide-enter-to{
  left:0;
}
.slide-leave{
  left:0;
}
.slide-leave-active{
  transition: all 0.5s;
}
.slide-leave-to{
  left:100%;
}
</style>
