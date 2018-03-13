<template>
 <div>
singer
 </div>
</template>

<script>
import {getSingerList} from "../../api/singer.js"


 export default {
   data () {
     return {
      
       Singerindex:[]
     }
   },
   mounted () {
     this._getSingerList();
   },
   methods: {
     _getSingerList(){
       getSingerList().then((res)=>{
         var  SingerList=[];
         SingerList=res.data.list;
          // 定义热歌部分
          const HOTTITLE="热歌"
          var hot={
                    title:HOTTITLE,
                    item:[]
                  };
          // 补充热歌部分，前十的数据歌手为热歌歌手
          const HOTLEN=10;
          SingerList.forEach((ite,index)=>{
            if(index<HOTLEN){
              hot.item.push({
              id:ite.Fsinger_mid,
              name:ite.Fsinger_name,
              imgsrc:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${ite.Fsinger_mid}.jpg?max_age=2592000`
            })
            }
             // A-Z的歌手组合
          var key=ite.Findex;
          if(!this.Singerindex[key]){
            this.Singerindex[key]={
              title:key,
              item:[]
            }
          }
          this.Singerindex[key].item.push({
            id:ite.Fsinger_mid,
              name:ite.Fsinger_name,
              imgsrc:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${ite.Fsinger_mid}.jpg?max_age=2592000`
          })
          })
          this.Singerindex.push(hot);
        
          this.Singerindex.sort((a,b)=>{
            if (a.toString().toLowerCase() > b.toString().toLowerCase()) {
            return 1;
              }else{
                return -1;
              }
          })
            console.log( this.Singerindex);
         





       })
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
