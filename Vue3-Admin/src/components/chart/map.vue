<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
import 'echarts-gl'
export default defineComponent({
  name: 'mapChart',
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
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    var app = {};
    var dataCount = 0;
    var CHUNK_COUNT = 230;
    let initChart = idx => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //  此dom为echarts图标展示dom
        
        if (idx >= CHUNK_COUNT) {
          return
        }
        var dataURL = ROOT_PATH + '/data/asset/data/gps/gps_' + idx + '.bin'
        var xhr = new XMLHttpRequest()
        xhr.open('GET', dataURL, true)
        xhr.responseType = 'arraybuffer'

        xhr.onload = function(e) {
          var rawData = new Int32Array(this.response)
          var data = new Float32Array(rawData.length)
          var addedDataCount = rawData.length / 2
          for (var i = 0; i < rawData.length; i += 2) {
            data[i] = rawData[i + 1] / 1e7
            data[i + 1] = rawData[i] / 1e7
          }

          myChart.appendData({
            seriesIndex: 0,
            data: data,
          })

          initChart(idx + 1)
        }

        xhr.send()
        // 绘制图表
        let configObject = {
          backgroundColor: '#000',
          title: {
            text: '10000000 GPS Points',
            left: 'center',
            textStyle: {
              color: '#fff',
            },
          },
          geo: {
            map: 'world',
            roam: true,
            label: {
              emphasis: {
                show: false,
              },
            },
            silent: true,
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111',
              },
              emphasis: {
                areaColor: '#2a333d',
              },
            },
          },
          series: [
            {
              name: '弱',
              type: 'scatterGL',
              progressive: 1e6,
              coordinateSystem: 'geo',
              symbolSize: 1,
              zoomScale: 0.002,
              blendMode: 'lighter',
              large: true,
              itemStyle: {
                color: 'rgb(20, 15, 2)',
              },
              postEffect: {
                enable: true,
              },
              silent: true,
              dimensions: ['lng', 'lat'],
              data: new Float32Array(),
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
      myChart = echarts.init(document.getElementById(name))
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
