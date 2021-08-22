<template>
  <div class='ContentBody'>
    <div class="title">{{title}}</div>
    <div class="img">
      <img :src="picture1" alt="" >
      <img :src="picture2" alt="" >
      <img :src="picture3" alt="" >
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onBeforeMount, onMounted,ref, toRefs, toRef,reactive , readonly,computed } from 'vue'
export default defineComponent({
  name: 'ContentBody',
  components: {},
  props:{
    picture1:{
      
    },
    picture2:{
      
    },
    picture3:{
      
    },
    title:{
      required:true
    }
  },
  setup() {
    return {
      
    }
  }
})
</script>
    
<style lang='scss' scoped>
.ContentBody{
  .title{
    font-size: 16px;
    margin:10px 0;
    text-align: justify;
  }
  .img{
    display: flex;
    justify-content: center;
    img{
      width: 33%;
    }
  }
}
</style>