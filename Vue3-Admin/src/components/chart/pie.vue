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
    id: {
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
        let myChart = echarts.init(document.getElementById(name))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '用户群体分析',
            // subtext: '纯属虚构',
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
              radius: '70%',
              data: [
                { value: 1000, name: '10岁以下' },
                { value: 735, name: '10-15岁' },
                { value: 330, name: '16-18岁' },
                { value: 214, name: '18-22岁' },
                { value: 300, name: '23-30岁' },
                { value: 464, name: '31-35岁' },
                { value: 400, name: '36-40岁' },
                { value: 364, name: '31-35岁' },
                { value: 300, name: '36-40岁' },
                { value: 784, name: '41-45岁' },
                { value: 300, name: '46-50岁' },
                { value: 784, name: '51-55岁' },
                { value: 300, name: '56-60岁' },
                { value: 984, name: '66-70岁' },
                { value: 700, name: '71-75岁' },
                { value: 600, name: '76-80岁' },
                { value: 300, name: '80岁以上' },
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
