<template>
  <div class="userStatistic">
    <div class="top_box">
      <!-- 频道统计图 -->
      <bar-chart
        :id="id"
        :echarts="echarts"
        :width="width"
        :height="height"
      ></bar-chart>
      <!-- 性别统计图 -->
      <pie-chart
        :ids="ids"
        :echarts="echarts"
        :width="width"
        :height="height"
      ></pie-chart>
    </div>
    <!-- 第二层 -->
    <div class="top_box">
      <!-- <bar-chart :id="ageCharts" :echarts="echarts"></bar-chart> -->
      <div id="genderCharts">sdd</div>
      <div id="genderCharts">性别sdss统计图</div>
    </div>
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
// 导入频道直方图
import barChart from '@/components/chart/bar.vue'
// 导入性别饼状图
import pieChart from '@/components/chart/pie.vue'
export default defineComponent({
  name: 'template',
  components: {
    barChart,
    pieChart,
  },
  setup() {
    const id = ref('ageCharts')
    const ids = ref('genderChart')
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
      id,
      ids,
    }
  },
})
</script>
<style lang="scss" scoped>
.userStatistic {
  width: 100%;
  height: 100%;
  .top_box {
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
}
</style>
