<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
export default defineComponent({
  name: 'timeAxis',
  components: {},
  props: {
    id: {
      required: true,
    },
  },
  setup(props) {
    const name = props.id
    // 初始化echarts
    var myChart
    let initChart = data => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        // 此dom为echarts图标展示dom
        myChart = echarts.init(document.getElementById(name))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '近24小时集群性能',
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
            formatter: function(params) {
              params = params[0]
              var date = new Date(params.name)
              return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
              )
            },
            axisPointer: {
              animation: false,
            },
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false,
            },
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              name: '模拟数据',
              type: 'line',
              showSymbol: false,
              hoverAnimation: false,
              data: data,
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
      setInterval(function() {
        var data = []
        var now = +new Date(2000, 9, 3)
        var oneDay = 24 * 3600 * 1000
        var value = Math.random() * 1000
        function randomData() {
          now = new Date(+now + oneDay)
          value = value + Math.random() * 21 - 10
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value),
            ],
          }
        }

        for (var i = 0; i < 100; i++) {
          data.push(randomData())
        }
        myChart.setOption({
          series: [
            {
              data: data,
            },
          ],
        })
      }, 2000)
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
