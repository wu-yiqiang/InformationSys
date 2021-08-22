<template>
  <div class='ListOperation'>
    <div class="ListOperation">
      <div>
        <van-icon class="iconfont icon-share" class-prefix='home'>分享</van-icon>
      </div>
      <div>
        <van-icon class="iconfont icon-pinglun1" class-prefix='home'>12</van-icon>
      </div>
      <div>
        <van-icon class="iconfont icon-dianzan" class-prefix='home'></van-icon>
      </div>
      <div>
        <van-icon class="iconfont icon-shoucang" class-prefix='home'></van-icon>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onBeforeMount, onMounted,ref, toRefs, toRef,reactive , readonly,computed } from 'vue'
export default defineComponent({
  name: 'ListOperation',
  components: {},
  setup() {
    return {
     
    }
  }
})
</script>
    
<style lang='scss' scoped>
.ListOperation{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont{
      font-size: 18px;
    }
  }
}
</style>