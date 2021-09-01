<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
export default defineComponent({
  name: 'AreaChartwithTimeAxis',
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
        var base = +new Date(1988, 9, 3)
        var oneDay = 24 * 3600 * 1000

        var data = [[base, Math.random() * 300]]

        for (var i = 1; i < 30; i++) {
          var now = new Date((base += oneDay))
          data.push([
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round((Math.random() - 0.5) * 20 + data[i - 1][1]),
          ])
        }
        let configObject = {
          tooltip: {
            trigger: 'axis',
            position: function(pt) {
              return [pt[0], '10%']
            },
          },
          title: {
            left: 'center',
            text: '近30天日均流量趋势',
          },
          grid: {
            x: 80,
            y: 60,
            x2: 80,
            y2: 60,
            // width: {totalWidth} - x - x2,
            // height: {totalHeight} - y - y2,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc',
          },
          toolbox: {
            feature: {
              //dataZoom: {
              //   yAxisIndex: 'none',
              // },
              //restore: {},
              //saveAsImage: {},
            },
          },
          xAxis: {
            type: 'time',
            boundaryGap: false,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 20,
            },
            {
              start: 0,
              end: 20,
            },
          ],
          series: [
            {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              areaStyle: {},
              data: data,
            },
          ],
        }
        Object.assign(configObject, chartOptions)
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
div {
  width: 100%;
  height: 100%;
}
</style>
