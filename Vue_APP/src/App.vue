<template>
  


  <router-view></router-view>

</template>

<script lang="ts">
import { Toast,Icon } from 'vant';
import { defineComponent,ref } from 'vue';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import fonts from '@/assets/font/iconfont.css';
export default defineComponent({
  name: 'App',
  components: {
    Home,
    Login,
  },

  setup() {
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
  },
  
})
</script>

<style lang='scss' scoped>

</style>
