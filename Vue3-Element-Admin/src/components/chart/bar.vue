<template>
  <div :id="name"></div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
// 导入echarts
import * as echarts from 'echarts'
export default defineComponent({
  name: 'barChart',
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
        // 此dom为echarts图标展示dom
        let myChart = echarts.init(document.getElementById(name))
        // 绘制图表
        myChart.setOption({
          title: { text: '用户频道统计', left: 'center' },
          tooltip: {},
          xAxis: {
            data: ['历史', '财经', '军事', '健康', '科技', '体育'],
          },
          yAxis: {},
          series: [
            {
              name: '用户量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 200],
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
