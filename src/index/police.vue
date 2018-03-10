<template>
    <div class="contair">
        <myslide :sign="signs" :current="index"></myslide>  
        <div class="main">
           <tophead></tophead>
           <div class="compt" :style="{'height':hei+'px'}">
              <happy-scroll>
                <router-view></router-view>
              </happy-scroll>
           </div>
        </div> 
    </div>
</template>
<script>
  import slide from "../components/slide";
  import head from "../components/head";
  import { HappyScroll } from 'vue-happy-scroll'
  import 'vue-happy-scroll/docs/happy-scroll.css'
  //import footer from "../components/footer"
  export default {
    data() {
      return {
         signs:'police',
         index:null,
         hei:document.body.scrollHeight - 108
      }
    },
    components: {
        "myslide": slide,
        "tophead": head,
        HappyScroll
    },
    mounted(){
      this.router();
    },
    methods:{
      router(){
        let router=this.$route.name;
        if(router=="pol_admin" || router=="pol_home" || router=="pol_replace" || router=="pol_destroy"){
           //document.querySelectorAll(".slider li a")[0].className="";
           this.index=3;
        }
        else{
          this.index=null
       
        }
      }
    },
    watch: {
      '$route':"router"
    }
  }

</script>