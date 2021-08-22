<template>
  <div class="homePage">
    <!-- 顶部搜索栏 -->
    <!-- <div class="searchBox">
       <van-search v-model="value" placeholder="请输入搜索关键词" @click-input="toRouter('/search')"/>
    </div> -->
    <!-- /顶部搜索栏 -->

    <!-- 标签导航 -->
    <!-- <van-tabs v-model:active="active" animated swipeable :before-change="tabbeforeChange()">
      <van-tab v-for="index in 8" title="'标签 ' + index" :key="index">
        内容
      </van-tab>
    </van-tabs> -->
    <!-- /标签导航 -->

    <!-- 底部导航栏 -->
    <!-- <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">资讯</van-tabbar-item>
      <van-tabbar-item icon="search" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/livebroadcast">直播</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="user">用户</van-tabbar-item>
    </van-tabbar> -->
    <!-- /底部导航栏 -->

    <!-- 上传弹出框 -->
    <van-popup  round position="bottom" :style="{ height: '30%' }">
      <!-- 选择文章 -->
      <div class="upload-type" ></div>
      <!-- /选择文章 -->

      <!-- 选择图片 -->
      <div class="upload-type" ></div>
      <!-- /选择图片 -->

      <!-- 选择视频 -->
      <div class="upload-type" ></div>
      <!-- /选择视频 -->
    </van-popup>
  </div>
</template>

<script lang="ts" setup="props">
// import { ref } from 'vue';
// import { Search,List,Toast } from 'vant';
// 列表展示项组件
// import  ListComponents  from '@/components/List/list.vue'

export default {
  name: "Home",

  components: {},

  // 定义属性
  model: {},

  props: {},

  // data () {
  //   return {
  //     // 上传作品类型控制位
  //     selectUploadFlag: "",
  //     // 上传页面弹出层控制位
  //     uploadFlag:"",
  //   }
  // },

  setup() {
    // let value = ref('');

    // tab标签栏选项
    // let active = ref(0);

    // 点击事件
    // const onClickTab = ({ title }) => Toast(title);
    let tabbeforeChange = (index : number) => {
      //
    }
    return {
      // value,
      // active,
      // onClickTab,
      // tabbeforeChange,
    };
  },

  computed: {},

  // 监控data中的数据变化
  watch: {},

  // 方法集合
  // methods: {
    // 路由跳转
    // toRouter(route: string,param: any) {
    //   this.$router.push({
    //     path : route,
    //     params : param
    //   })
    // },
    // 上传作品
    // publishWork() {
    //   // 弹出选择上传类型页面
    //   this.uploadFlag = "1"
    // },
    // 选择上传的作品类型并跳转到相应的路由
    // selectUploadType (type : string) {
    //   this.selectUploadFlag = type
    //   this.selectUploadFlag == "1" ?  this.toRouter('/add/artical',"") :  this.selectUploadFlag == "2" ?  this.toRouter('/add/image','') : this.selectUploadFlag == "3" ? this.toRouter('/add/video','') : ''
    // }
  // },
};
</script>

<style lang='scss'>
// .homePage {
//   // 顶部搜索框

//   // 弹出选择层
//   .van-popup {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     .upload-type {
//       width: 30%;
//     }
//   }  

// }
</style>
