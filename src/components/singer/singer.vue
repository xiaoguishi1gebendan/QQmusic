<template>
 <div>
  
  <singers></singers>
   <!-- <singer-datil></singer-datil> -->
   <router-view></router-view>
 </div>
</template>

<script>
import Singers from "./singers.vue"
// import SingerDatil from "./singerdatil.vue"
 export default {
   components: {
      Singers,
      // SingerDatil
   }
 }
</script>
