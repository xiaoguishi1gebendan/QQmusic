<template>
 <div class="singername">
   
   
    <h6 ><span @click="back" class="lt">&lt</span> <span>{{singer.name}}</span></h6>
    <div class="img">
        <img :src="singer.imgarc" alt="">
    </div>

   <div class="bpp">
          <div class="main">
            <div class="div1" ref="div">
                <div class="list1" >
                    <ul v-for="(item,index) in getSingerDatil" :key="index">
                    <li>
                      <p>{{item.songname}}</p>
                      <p>{{item.albumname}}</p>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
     </div>
      
     
 
 
 
 </div>
</template>

<script>
import BScroll from 'better-scroll'
 export default {
   mounted () {
     setTimeout(() => {
       this.scroll=new BScroll(this.$refs.div,{
         click:true,
         scrollY:true,
       })
     }, 100);
   },
  methods: {
    back(){
     this.$router.go(-1);
     this.$store.state.getSingerDatil=[{songname: '', albumname: ''}];
    }
  },
   computed: {
     singer(){
        return this.$store.state.singer;
     },
     getSingerDatil(){
       return this.$store.state.getSingerDatil;
     },
     
   },
 }
</script>

<style>
.singername{
  width: 7.6rem;
}
.singername .img{
  /* position: absolute; */
  /* z-index: 0; */
  width: 100%;
  height:5.4rem;
  overflow: hidden;
}
.singername .img img{
  width: 100%;
}
.singername h6{
  position: absolute;
  width: 7.5rem;
  text-align: center;
  font-size: 0.3rem;
  line-height: 1rem;
}
.lt{
  color: #ffd432;
  position: absolute;
  left: 0.4rem;
  font-size: 0.6rem;
}
.singername ul{
 margin-top: 400px;
 padding-left: 0.6rem;
 z-index: 1;
}
.singername ul li{
  margin-top: 0.4rem !important;
}
.singername ul li p:nth-child(1){
  line-height: 0.6rem;
  color: #fff;
}
.singername ul li p:nth-child(2){
  color: #646464;
}
.div1{
  width: 100%;
  height: 7.4rem;
  overflow: hidden;
}
.list1{
  position: initial;
  width: 100%;
  }

</style>
