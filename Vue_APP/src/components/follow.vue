<template>
  <div class="follow">
    关注
  </div>  
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: 'Follow',
  components: {},
  // 定义属性
  model: {},
  props: {},
  data () {
    return {}
  },
  setup() {

  }
}
</script>

<style lang='scss' scoped>
.follow{
  display: flex;
  justify-items: center;
  align-items: center;
  padding:0 15px;
  border:1px solid gray;
  border-radius: 2px;
  font-size: 12px;
  height: 25px;
}
</style>
