<template>
    <div class="contair">
        <myslide :sign="signs" :current="index"></myslide>  
        <div class="main">
           <tophead></tophead >
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
         signs:'logistics',
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
        if(router=="dis_start" || router=="dis_ing" || router=="dis_end" || router=="dis_details"){
           //document.querySelectorAll(".slider li a")[0].className="";
           this.index=2;
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