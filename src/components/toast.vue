<template>
  <div class="toast">
     <div class="img">
        <img :src="img" alt="">
     </div>
     <a href="javascript:void(0);" class="tosub" @click="tosub">审查无误，确认提交</a>
  </div>
</template>
<script>
   export default {
     data(){
       return {
          prop:["img"]
       }
     },
     methods:{
        tosub(){
          this.$emit("tosub")
        }
     }
   }
</script>
