<template>
  <div class='Video'>

    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
      <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
          <!-- 视频列表 -->
          <videoList v-for="(item,index) in state.videolist" :key="item" :videoAddr="item.videoUrl" :avaAddr="item.useravater" :userName="item.username" :commentCount="item.commentscount" :playerId="index">

          </videoList>
          <!-- /视频列表 -->
      </van-list>
    </van-pull-refresh>

  </div>
  
</template>

<script lang="ts">
import { Toast,Tab,Tabs } from 'vant';
import { ref, defineComponent,reactive } from 'vue';
import videoList from '@/components/VideoList/VideoList.vue'
export default defineComponent({
  name: 'Home',

  components: {
    
    videoList,
  
  },
  data() {
    // 视频信息列表
     
  },
  setup: () => {
    
    const count = ref(0);
    // const value = ref('');
    // const onSearch = (val) => Toast(val);
    const active = ref(0);
    const onCancel = () => Toast('取消');

    const state = reactive({
      videolist: [
         {
          videoUrl:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
          useravater:'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
          username:'sad',
          commentscount:12,
        },
        {
          videoUrl:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4',
          useravater:'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg',
          username:'狗东西',
          commentscount:22,
        },
        {
          videoUrl:'https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4',
          useravater:'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg',
          username:'阿斯顿沙',
          commentscount:2,
        },
        {
          videoUrl:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4',
          useravater:'http://g.hiphotos.baidu.com/image/pic/item/55e736d12f2eb938d5277fd5d0628535e5dd6f4a.jpg',
          username:'首都华盛顿',
          commentscount:12,
        },
        {
          videoUrl:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
          useravater:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg',
          username:'是社会',
          commentscount:12,
        },
        {
          videoUrl:'https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4',
          useravater:'http://b.hiphotos.baidu.com/image/pic/item/9d82d158ccbf6c81b94575cfb93eb13533fa40a2.jpg',
          username:'个体经济',
          commentscount:18,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4',
          useravater:'http://a.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a292d2472199d25bc315d607c7c.jpg',
          username:'即可将',
          commentscount:199,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/14/mp4/190314223540373995.mp4',
          useravater:'http://b.hiphotos.baidu.com/image/pic/item/e824b899a9014c08878b2c4c0e7b02087af4f4a3.jpg',
          username:'的方法的',
          commentscount:78,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/14/mp4/190314102306987969.mp4',
          useravater:'http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg',
          username:'是社会',
          commentscount:88,
        },
        {
          videoUrl:'https://www.w3schools.com/html/movie.mp4',
          useravater:'http://a.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee5080c8142ff5e0fe99257e19.jpg',
          username:'山东省寿光',
          commentscount:42,
        },
        {
          videoUrl:'https://v-cdn.zjol.com.cn/277003.mp4',
          useravater:'http://f.hiphotos.baidu.com/image/pic/item/4034970a304e251f503521f5a586c9177e3e53f9.jpg',
          username:'和国家和',
          commentscount:99,
        },
        {
          videoUrl:'https://v-cdn.zjol.com.cn/276996.mp4',
          useravater:'http://a.hiphotos.baidu.com/image/pic/item/e824b899a9014c087eb617650e7b02087af4f464.jpg',
          username:'上海市',
          commentscount:100,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319125415785691.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383210_8779.jpg',
          username:'和考核合格后',
          commentscount:123,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383242_9576.jpg',
          username:'共和国解放后的',
          commentscount:142,
        },
        {
          videoUrl:'https://vfx.mtime.cn/Video/2019/01/15/mp4/190115161611510728_480.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383166_2224.jpg',
          username:'上海电视动画1',
          commentscount:1291,
        },
        {
          videoUrl:'https://vfx.mtime.cn/Video/2019/08/24/mp4/190824113155647173.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383242_9576.jpg',
          username:'是德国的观点看',
          commentscount:66,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/17/mp4/190317150237409904.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383248_3693.jpg',
          username:'的方法的和',
          commentscount:19900,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383264_4787.jpg',
          username:'事实上',
          commentscount:777,
        },
        {
          videoUrl:'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383165_7197.jpg',
          username:'海关监管法规',
          commentscount:342,
        },
        {
          videoUrl:'https://v-cdn.zjol.com.cn/277000.mp4',
          useravater:'https://img-my.csdn.net/uploads/201407/26/1406383091_3119.jpg',
          username:'精神病医院院长',
          commentscount:896,
        },
      ],
      loading: false,
      finished: false,
      refreshing: false,
    });

    // 上拉刷新
    const onLoad = () => {
      setTimeout(() => {
        if (state.refreshing) {
          state.videolist = [];
          state.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          state.videolist.push(state.videolist.length + 1);
        }
        state.loading = false;
        if (state.videolist.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    }

    // 下拉加载
    const onRefresh = () => {
      // 清空列表数据
      state.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      onLoad();
    };

    return { 
      count,
      // value,
      // onSearch,
      active,
      state,
      onLoad,
      onCancel,
      onRefresh
    }
  }
})
</script>
<style lang="scss" scoped>
.Video {
  height: 90vh;
  overflow: scroll;
  & .videoList{
    margin-bottom: 10px;
  }
}
</style>
