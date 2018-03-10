<template>
  <div class="slider">
    <div class="had">海梁科技</div>
    <div class="nav">
      <happy-scroll>
        <ul :style="{'height':hei+'px'}">
          <li v-for="(i,index) in slides" :class="{'drap':i.children,'curs':current==index}">
            <router-link :to="{'name':i.router}" class="firt" :class="{'router-link-exact-active':current==index}">
              <div class="tit">
                <i class="iconfont" v-html="i.ico"></i> {{i.tit}}
                <i class="triangle"></i>
              </div>
            </router-link>
            <dl v-if='i.children'>
              <dd v-for="j in i.children">
                <router-link :to="{'name':j.router}">
                  <div class="tit">{{j.tit}}</div>
                </router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </happy-scroll>
    </div>
  </div>
</template>

<script>
  import router from "./../assets/js/slide-router"
  import {
    HappyScroll
  } from 'vue-happy-scroll'
  import 'vue-happy-scroll/docs/happy-scroll.css'
  export default {
    props: ["sign", "current"],
    data() {
      return {
        hei: document.body.scrollHeight - 108,
        slides: []
      }
    },
    mounted() {
      let routes = router.router;
      switch (this.sign) {
        case "blast":
          this.slides = routes.blast;
          break;
        case "depot":
          this.slides = routes.depot;
          break;
        case "logistics":
          this.slides = routes.logistics;
          break;
        case "police":
          this.slides = routes.police;
          break;
        case "project":
          this.slides = routes.project;
          break;
        case "system":
          this.slides = routes.system;
          break;
      }
      console.log(this.slides)
    },
    components: {
      HappyScroll
    },
    watch: {
    }
  }
</script>
