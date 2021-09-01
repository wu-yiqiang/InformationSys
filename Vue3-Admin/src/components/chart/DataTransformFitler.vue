<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
// json数据 
import jsondata from '@/data/life-expectancy-table.json'
export default defineComponent({
  name: 'DataTransformFitler',
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
    var myChart
    let initChart = data => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        // 此dom为echarts图标展示dom
        myChart = echarts.init(document.getElementById(name), 'dark')
        // 绘制图表
        let configObject = {
          dataset: [
            {
              id: 'dataset_raw',
              source: jsondata,
            },
            {
              id: 'dataset_since_1950_of_germany',
              fromDatasetId: 'dataset_raw',
              transform: {
                type: 'filter',
                config: {
                  and: [
                    { dimension: 'Year', gte: 1950 },
                    { dimension: 'Country', '=': 'Germany' },
                  ],
                },
              },
            },
            {
              id: 'dataset_since_1950_of_france',
              fromDatasetId: 'dataset_raw',
              transform: {
                type: 'filter',
                config: {
                  and: [
                    { dimension: 'Year', gte: 1950 },
                    { dimension: 'Country', '=': 'France' },
                  ],
                },
              },
            },
          ],
          title: {
            text: '集群性能监测',
            left: 'center',
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category',
            nameLocation: 'middle',
          },
          yAxis: { 
            type: 'category',
            name: '使用率',
          },
          series: [
            {
              type: 'line',
              datasetId: 'dataset_since_1950_of_germany',
              showSymbol: false,
              encode: {
                x: 'Year',
                y: 'Income',
                itemName: 'Year',
                tooltip: ['Income'],
              },
            },
            {
              type: 'line',
              datasetId: 'dataset_since_1950_of_france',
              showSymbol: false,
              encode: {
                x: 'Year',
                y: 'Income',
                itemName: 'Year',
                tooltip: ['Income'],
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
      // setInterval(function() {
      //   myChart.setOption({
      //     series: [
      //       {
      //         data: data,
      //       },
      //     ],
      //   })
      // }, 2000)
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
