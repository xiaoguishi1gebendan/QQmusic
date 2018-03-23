<template>
 <div>
    <mt-index-list>
      <mt-index-section v-for="(item,index) in arrlist" :key="index" :index="item.title">
        <mt-cell v-for="(ite,inde) in item.arr" :key="inde" >
          <div @click="geItemId(ite)">
            <img v-lazy="ite.imgarc" alt="">
            <span>{{ite.name}}</span>
          </div>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
   <router-view></router-view>
 </div>
</template>

<script>
import {getSingerList} from "../../api/singer.js"
import {getSingerDetail} from '../../api/singer.js'


 export default {
   data () {
     return {
       arrlist:[ ]
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
         console.log(SingerList)
         
        //  数据重组
      SingerList.forEach((ele,index) => {
        this.arrlist.push(ele.Findex);
      });
       for(var i = 0; i <this.arrlist.length; i++){
          for( var j = i + 1; j < this.arrlist.length; j++){
            if(this.arrlist[i] == this.arrlist[j]){
              this.arrlist.splice(j,1);
              j--;
            }
          }
        }
        var reg=/[a-z,A-Z]/g;
        this.arrlist=this.arrlist.join("").match(reg)
        // console.log(reg.exec(this.arrlist.join("")))
          this.arrlist.sort();

      // 把所有字符的都组成对象放到数组里
      var Singerindex=[];
        SingerList.forEach((item,index)=>{
          Singerindex.push({
               title:item.Findex,
               arr:[]
             })
        })
      // 相同的字符的对象去重
      for(var i = 0; i < Singerindex.length; i++){
          for( var j = i + 1; j < Singerindex.length; j++){
            if(Singerindex[i].title == Singerindex[j].title){
              Singerindex.splice(j,1);
              j--;
            }
          }
        }

      // 排序
      var arr=[];
      for(var i=0;i<this.arrlist.length;i++){
        for(var j=0;j<Singerindex.length;j++){
          if(this.arrlist[i]==Singerindex[j].title){
            this.arrlist[i]=Singerindex[j]
          }
        }
      }
  

      this.arrlist.forEach((ite,inde)=>{
        SingerList.forEach((itee,indee)=>{
            if(ite.title==itee.Findex){
              ite.arr.push({
                name:itee.Fsinger_name,
                id:itee.Fsinger_mid,
                imgarc:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${itee.Fsinger_mid}.jpg?max_age=2592000`
              })
            }
        })
      })

    console.log(this.arrlist)
         })
     },
       geItemId(ite){
       this.$router.push({
            path:`/singer/${ite.id}`
          })
          this.$store.commit('getSingerId',ite);
          console.log(ite)
          this._getSingerDetail(ite.id)
      },

      //点击获取相应跳转详情页面的数据
       _getSingerDetail(id){
          getSingerDetail(id).then((res)=>{
            this.$store.state.getSingerDatil=[];
            res.data.list.forEach(item => {
            this.$store.state.getSingerDatil.push(
              {
                songname:item.musicData.songname,
                albumname:`${this.$store.state.singer.name}·${item.musicData.albumname}`
              }
            )
            });
          this.$store.commit('getSingerDatil',this.$store.state.getSingerDatil)
           console.log(this.$store.state.getSingerDatil)
          })
         
    }

   },
   components: {

   }
 }
</script>
<style>

.mint-cell-title{
  color: gainsboro;
 
}
 .mint-indexlist-nav{
    color: gainsboro ;
 }
 .mint-indexsection-index{
   color: gainsboro;
 }
 .mint-cell-wrapper div{
   float: left;
 }
 .mint-cell-title{
   flex: none;
 }
 .mint-indexsection-index{
   background-color:#333;
    border: none;
    padding: 0.2rem 0.4rem;
 }
 .mint-cell-wrapper{
background-image:none;
padding: 0.2rem 0.4rem;
 }
 .mint-indexlist-nav{
   border-left: none;
   background: #000;
   height: 8.8rem;
 }
 .mint-cell{
   background: transparent;
   background: #222;
 }
 .mint-indexlist-nav{
   display: block;
   border-radius: 0.4rem;
   width: 0.5rem;
   padding-top: 0.4rem;
   margin-top: 1.4rem !important;
  right:0.2rem !important;
 }
 .mint-cell:last-child{
   background-image:none;
 }
 .mint-cell img{
   width: 60px;
    vertical-align: middle;
    border-radius: 50%;
    
 }
 .mint-cell-value span{
   padding-left: 0.3rem;
 }
 
</style>
