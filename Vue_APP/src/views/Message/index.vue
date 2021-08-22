<template>
  <div class='Video'>
    <!-- 视频列表 -->
    消息
    <!-- /视频列表 -->
  </div>
  
</template>

<script lang="ts">
import { Toast,Tab,Tabs } from 'vant';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',

  components: {

  
  },
  data() {
    // 用户频道列表
    tabList : []
  },
  setup: () => {
    const count = ref(0);
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
    }
  }
})
</script>
<style lang="scss" scoped>
 
</style>
