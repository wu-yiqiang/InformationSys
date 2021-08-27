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
    ids: {
      required: true,
    },
    echartss: {
      required: true,
    },
    width: {
      required: true,
    },
    height: {
      required: true,
    },
  },
  setup(props) {
    const name = props.ids
    console.log(name)
    // 初始化echarts
    let initChart = () => {
      let newPromise = new Promise(resolve => {
        resolve()
      })
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //  此dom为echarts图标展示dom
        let myChart = echarts.init(document.getElementById(name))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
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
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' },
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

<style lang="scss" scoped></style>
