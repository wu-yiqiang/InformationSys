<template>
  <div class='VideoList'>
  
    <!-- 播放器 -->
    <IuVideo :dataSource="dataSource" title="基本使用" ref="videoRef" />
    <!-- /播放器 -->
    <!-- 播放控制 -->
    <div class="viideoTitle">
      sdad
    </div>
    <!-- <img src="@/" alt=""> -->
    <!-- /播放控制 -->

    <!-- 作者信息 -->
    <div class="authorInfo">
      <div class="author">
        <img :src=avaAddr alt="" class="avatar">
        <span class="name">{{userName}}</span>
        <van-icon class="iconfont icon-guanzhu" class-prefix='home'></van-icon>
      </div>

      <div class="icons">
        <van-icon class="iconfont icon-pinglun" class-prefix='home'>{{commentCount}}</van-icon>
        <van-icon class="iconfont icon-shoucang" class-prefix='home'></van-icon>
      </div>
    </div>
    <!-- /作者信息 -->
  </div>
</template>

<script lang="ts">
import { url } from 'inspector';
import { ref, defineComponent ,reactive,onMounted} from 'vue';
// import VuePlayerVideo from 'vue3-player-video'
export default defineComponent({
  name: 'video-list',
  components: {
    // VuePlayerVideo,
  },
  props:{
    videoAddr:{
      require:true,
      type:String,
    },
    avaAddr:{
      require:true,
      type:String,
    },
    userName:{
      require:true,
      type:String,
    },
    commentCount:{
      require:true,
      type:Number,
    },
    playerId:{
      required:true,
      type:Number,
    }
  },
  setup(props,context){
    const videoRef = ref(null)
    const dataSource = reactive({
      type:'video/mp4',
      url:'https://v-cdn.zjol.com.cn/276992.mp4',
    })
    return {
      videoRef,
      dataSource
    }
  }
})
</script>
<style lang="scss" scoped>
 .VideoList {
   height: 100%;
   padding:0 10px;
   margin-bottom: 10px;
   position: relative;
   .mse {

   }
   .viideoTitle{
     position: absolute;
     top:0;
     left:10px;
     font-size: 16px;
   }
   .authorInfo {
     display: flex;
     justify-content: space-between;
     align-items: center;
     .author {
       display: flex;
       align-items: center;
       .avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
       }
       .name {
          font-size: 16px;
          margin: 0 10px;
       }
       .iconfont{
         font-size: 18px;
       }
     }
     .icons {
       display: flex;
       align-items: center;
       .iconfont {
         font-size: 18px;
       }
       .iconfont:nth-child(1) {
         margin-right: 25px;
       }
     }
   }
   video {
     width: 100%; 
   }
 }
</style>
