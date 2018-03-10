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
         signs:'blast',
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
        if(router=="bla_xg"){
          this.index=2
        }
        else if(router=="civil" || router=="civil_i_details" || router =="civil_buy" || router == "civil_buycheck" || router == "civil_get" || router == "civil_consume" || router=="civil_refund" ||  router=="civil_die"){
          this.index=3;
        }
        if(router=="blast_home" || router =="blast_plan"){
          this.index=4
        }
        else if(router=="blast_video" || router=="blast_videolist" || router =="blast_update" || router =="blast_look"){
          this.index=6;
        }
        else if(router=="blast_completed" || router=="completed_add" || router=="completed_see" || router=="completed_details"){
          this.index=7;
        }
        else if(router=="blast_all" || router=="all_add" || router=="all_see" || router=="all_details"){
          this.index=8;
        }else{
          this.index=null
        }
    
        
      }
    },
    watch: {
      '$route':"router"
    }
  }

</script>