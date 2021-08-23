<template>
  <div class='Information'>
    <!-- tab切换栏 -->
    <van-tabs v-model:active="count" animated swipeable sticky>
      <van-tab v-for="(item,index) in userChannel" :title=item :key="index" class="tabList"> 
        <ShowListComponent v-for="(item,indexs) in dataPar.informationList" :key="indexs" :items="item"></ShowListComponent>
      </van-tab>
    </van-tabs>
    <!-- /tab切换栏 -->
  </div>
  
</template>

<script lang="ts">
import { Toast,Tab,Tabs } from 'vant';
import { ref, defineComponent, onMounted, reactive } from 'vue';
import ShowListComponent from '@/components/NewsList/NewsList.vue'
import axios from '@/utils/request.ts';
export default defineComponent({
  name: 'Home',

  components: {
    ShowListComponent
  },
  setup: () => {
    let dataPar = reactive({
      // 请求接口数据参数
      TypeParams:{
        key:'933372cc5c55ce8582e2c8db5e3a44a7',
        type:'top',
        page:1,
        page_size:30,
        is_filter:1,
      },
      informationList:[]
      })
    const count = ref(0);
    // const value = ref('');
    // const onSearch = (val) => Toast(val);
    const active = ref(0);
    //用户频道
    let userChannel = [
      '推荐',
      '热点',
      '国际',
      '财经',
      '科技',
      '历史',
    ];
    const onCancel = () => Toast('取消');
    let getInformation=async ()  => {
      let {data} = await axios.post(`toutiao/index?key=${dataPar.TypeParams.key}&type=${dataPar.TypeParams.type}&page=${dataPar.TypeParams.page}&page_size=${dataPar.TypeParams.page_size}&is_filter=${dataPar.TypeParams.is_filter}`)
      dataPar.informationList = data 
    };
    getInformation()
    console.log(dataPar.informationList)
    return { 
      count,
      // value,
      // onSearch,
      onCancel,
      active,
      userChannel,
      dataPar
    }
  },
  methods:{
    
  }
})
</script>
<style lang="scss" scoped>
 .Information{
   .tabList{
     height: 78vh;
     overflow: scroll;
   }
 }
</style>
