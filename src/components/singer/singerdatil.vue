<template>
 <div class="zhezhao">
     <h1>{{singerid}}</h1>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
    computed: {
     singerid(){
       return this.$store.state.singerid
     }
   },

 }
</script>

<style>
.zhezhao{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 1;
}
 
</style>
