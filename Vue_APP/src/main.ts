import { createApp } from 'vue';
import App from '@/App.vue';

// router
import router from "./router";

// store
import store from './store';

// rem
import "@/utils/rem.ts";

// common.css
// import '@/style/style.scss';

// vant
import vant from 'vant';
import 'vant/lib/index.css';

//  iconfont
import "@/assets/fonts/iconfont.css";
import Vue from 'vue'
// import VuePlayerVideo from 'vue3-player-video'
import IuVideo from 'iu-video'
import 'iu-video/lib/iu-video.css'
createApp(App)
.use(router)
.use(store)
  .use(vant)
  //.use(VuePlayerVideo)
  .use(IuVideo)
.mount('#app')