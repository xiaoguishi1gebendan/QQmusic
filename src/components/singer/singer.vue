<template>
 <div>
   <singer-datil></singer-datil>
  <singers></singers>
 </div>
</template>

<script>
import Singers from "./singers.vue"
import SingerDatil from "./singerdatil.vue"
 export default {
   components: {
      Singers,
      SingerDatil
   }
 }
</script>
