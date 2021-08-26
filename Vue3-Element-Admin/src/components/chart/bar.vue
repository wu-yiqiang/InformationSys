<template>
  <div id="echart"></div>
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
  nextTick,
} from 'vue'
export default defineComponent({
  name: 'barChart',
  components: {},
  props: {
    id: {
      required: true,
    },
    echarts: {
      required: true,
    },
  },
  setup(props) {
    const name = props.id
    // 初始化echarts
    let initChart = () => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //  此dom为echarts图标展示dom
        const echarts = props.echarts
        let myChart = echarts.init(document.getElementById('echart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '总用户量' },
          tooltip: {},
          xAxis: {
            data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8'],
          },
          yAxis: {},
          series: [
            {
              name: '用户量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        })
        window.onresize = function() {
          //自适应大小
          myChart.resize()
        }
      })
    }
    onMounted(() => {
      initChart()
    })
    return {
      name,
    }
  },
})
</script>

<style lang="scss" scoped>
#echart {
  width: 100%;
  // height: 100%;
}
</style>
