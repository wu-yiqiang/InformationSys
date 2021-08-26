<template>
  <div class="userStatistic">
    <bar-chart :id="ageCharts" :echarts="echarts"></bar-chart>
    <div id="genderCharts">性别统计图</div>
  </div>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  toRefs,
  toRef,
  reactive,
  readonly,
  computed,
} from 'vue'
// 导入echarts
import * as echarts from 'echarts'
// 导入直方图
import barChart from '@/components/chart/bar.vue'
export default defineComponent({
  name: 'template',
  components: {
    barChart,
  },
  setup() {
    const id = 'ageCharts'
    return {
      id,
      echarts,
    }
  },
})
</script>
<style lang="scss" scoped>
.userStatistic {
  #echart {
    width: 50%;
    height: 300px;
  }
  #genderCharts {
    width: 50%;
    height: 50%;
  }
}
</style>
