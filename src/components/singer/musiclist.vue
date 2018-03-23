<template>
 <div class="aaa">
     <h1>hahfdhafhhfghjkl;iojklghjklfghjkfghjkdfghjfghjtyuiofghjklh</h1>
     {{singerid}}
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   computed: {
     singerid(){
     
       return this.$store.state.singerid
     }
   },
 }
</script>

<style>
.aaa{
  width: 500px;
}
 
</style>
