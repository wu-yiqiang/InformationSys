<template>
  <div class="Systemstatistics">
    <div class="main_box">
      <!-- 顶部 -->
      <div class="top_title">
        <div class="left_box">sad</div>
        <div class="middle_box">数据可视化大屏</div>
        <div class="right_box">sad</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import bg from '@/assets/echarts/bg.png'
// 导入性别饼状图
import pieChart from '@/components/chart/pie.vue'
export default defineComponent({
  name: 'Systemstatistics',
  components: {
    pieChart,
  },
  setup() {
    const ageChart = ref('ageChart')
    let setBackground = () => {
      // 添加背景图片
      // let dom = document.querySelector('.el-card')
      // dom.style.backgroundSize = '100%'
      // dom.style.color = 'none'
      // dom.style.backgroundRepeat = 'no-repeat'
      // dom.style.backgroundImage = `url(${bg})`
    }
    onMounted(() => {
      setBackground()
    })
    return {
      ageChart,
    }
  },
})
</script>

<style lang="scss" scoped>
.Systemstatistics {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0) url('../../assets/echarts/bg.png') no-repeat 100%
    100%;
  //版心
  .main_box {
    padding: 20px 30px;
    .top_title{
      display: flex;
      justify-content: space-between;
      div{
        background-color: aliceblue;
      }
    }
  }
}
</style>
