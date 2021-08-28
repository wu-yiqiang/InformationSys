<template>
  <div class="userStatistic">
    <div class="frist_box">
      <!-- 频道统计图 -->
      <bar-chart :id="ageCharts"></bar-chart>
      <!-- 性别统计图 -->
      <pie-chart :id="genderCharts"></pie-chart>
    </div>
    <!-- 第二层 -->
    <div class="second_box">
      <timeBarChart :id="timeBarChart"></timeBarChart>
      <timeBarChart :id="timeBarCharts"></timeBarChart>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
// 导入频道直方图
import barChart from '@/components/chart/bar.vue'
// 导入性别饼状图
import pieChart from '@/components/chart/pie.vue'
// 用户时分布直方图
import timeBarChart from '@/components/chart/timeBar.vue'
export default defineComponent({
  name: 'template',
  components: {
    barChart,
    pieChart,
    timeBarChart,
  },
  setup() {
    const ageCharts = ref('ageCharts')
    const genderCharts = ref('genderCharts')
    const timeBarChart = ref('timeBarChart')
    const timeBarCharts = ref('timeBarCharts')
    /**
     * 查询元素宽高
     */
    let queryWidthHeight = () => {
      let dom = document.querySelector('.userStatistic')
      let domwidth = dom.offsetWidth
      let domheight = dom.offsetHeight
      return {
        domwidth,
        domheight,
      }
    }
    onMounted(() => {
      let { domwidth, domheight } = queryWidthHeight()
    })
    return {
      ageCharts,
      genderCharts,
      timeBarChart,
      timeBarCharts,
    }
  },
})
</script>
<style lang="scss" scoped>
.userStatistic {
  width: 100%;
  height: 100%;
  .frist_box {
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-around;
    #ageCharts {
      width: 50%;
      height: 100%;
    }
    #genderCharts {
      width: 50%;
      height: 100%;
    }
  }
  .second_box {
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: space-around;
    #timeBarChart {
      width: 50%;
      height: 100%;
    }
    #timeBarCharts {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
