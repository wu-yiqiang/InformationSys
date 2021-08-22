<template>
  <div class="Home">
    <!-- 顶部搜索栏 -->
    <div class="searchBox">
        <van-icon class="iconfont icon-zhibo van-tabbar-item--active" class-prefix='home'></van-icon>
        <van-search v-model="inputValue" placeholder="请输入搜索关键词"   />
        <van-icon class="iconfont icon-Cloudupload-Filled van-tabbar-item--active" class-prefix='home'></van-icon>
    </div>
    <!-- /顶部搜索栏 -->

    <router-view></router-view>

       <!-- 底部切换栏 -->
    <van-tabbar v-model="active" >
      <van-tabbar-item  to="/home" >
        <van-icon class="iconfont icon-Home1" class-prefix='home'></van-icon>
        <div >首页</div>
      </van-tabbar-item>
      <van-tabbar-item   to="/video">
        <van-icon class="iconfont icon-video" class-prefix='home'></van-icon>
        <div>视频</div>
      </van-tabbar-item>
      <van-tabbar-item  to="/message">
        <van-icon class="iconfont icon-xiaoxi" class-prefix='home'></van-icon>
        <div>消息</div>
      </van-tabbar-item>
      <van-tabbar-item  to="/livebroadcast">
        <van-icon class="iconfont icon-zhibo" class-prefix='home'></van-icon>
        <div>直播</div>
      </van-tabbar-item>
      <van-tabbar-item  to="/user">
        <van-icon class="iconfont icon-yonghu" class-prefix='home'></van-icon>
        <div>用户</div>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /底部切换栏-->
  </div>
  
</template>

<script lang="ts">
import { Toast } from 'vant';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',

  components: {

    // 咨询列表组件
    ShowListComponent: () => import ('@/components/NewsList/NewsList.vue'),
  },
  data() {
    // 用户频道列表
    tabList : []
  },
  setup: () => {
    const count = ref(0);
    let inputValue = ref('');
    // const value = ref('');
    // const onSearch = (val) => Toast(val);
    const active = ref(0);
    const onCancel = () => Toast('取消');
    return { 
      count,
      // value,
      // onSearch,
      onCancel,
      active,
      inputValue
    }
  }
})
</script>
<style lang="scss" scoped>
  .searchBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 10px;
    position: sticky;
    top: 0;
    .iconfont{
      font-size: 30px;
    }
    .van-search{
      flex: 1;
    }
  }


  .van-tabbar {
    .van-tabbar-item {
      .van-tabbar-item__text {
        i{
          display: block;
          text-align: center;
          font-size: 20px;
        }
        div {
          font-size: 15px;
        }
      }
    }
  }
</style>
