<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
export default defineComponent({
  name: 'pieChart',
  components: {},
  props: {
    config: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const name = props.config.id
    let chartOptions = props.config.config
    // 初始化echarts
    let initChart = () => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //  此dom为echarts图标展示dom
        let myChart = echarts.init(document.getElementById(name), 'dark')
        // 绘制图表
        let configObject = {
          title: {
            text: '数据分析',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '75%',
              data: [
                { value: 1000, name: '10岁以下' },
                { value: 735, name: '10-15岁' },
                { value: 330, name: '16-18岁' },
                { value: 214, name: '18-22岁' },
                { value: 300, name: '23-30岁' },
                { value: 464, name: '31-35岁' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        }
        Object.assign(configObject,chartOptions)
        myChart.setOption(configObject)
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
div{
  width: 100%;
  height: 100%;
}
</style>
