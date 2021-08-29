<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <!-- 顶部 -->
      <div class="top_title">
        <div class="left_box">sad</div>
        <div class="right_box">sad</div>
      </div>
      <!-- /顶部 -->
      <!-- 二级顶部 -->
      <div  class="second_top">
        <div class="second_left">
          <div class="left_trapezoid">
            <span class="text">天气</span>
          </div>
          <div class="left_Parallelogram">
            <span class="text">平台监测</span>
          </div>
        </div>
        <div class="second_middle">
            sads
        </div>
        <div class="second_right">
          <div class="right_Parallelogram">
            <span class="text">数据可视</span>
          </div>
          <div class="right_trapezoid">
            <span class="text">时间</span>
          </div>
        </div>
      </div>
      <!-- /二级顶部 -->
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import bg from '@/assets/echarts/bg.png'
// 导入性别饼状图
import pieChart from '@/components/chart/pie.vue'
import useIndex from '@/utils/useDraw'
export default defineComponent({
  name: 'Systemstatistics',
  components: {
    pieChart,
  },
  setup() {
    const ageChart = ref('ageChart')
    let setBackground = () => {
      // 添加背景图片
      // let dom = document.querySelector('.el-card')
      // dom.style.backgroundSize = '100%'
      // dom.style.color = 'none'
      // dom.style.backgroundRepeat = 'no-repeat'
      // dom.style.backgroundImage = `url(${bg})`
    }
    // * 适配处理
    const { appRef, calcRate, windowDraw } = useIndex()
    onMounted(() => {
      setBackground()
      // todo 屏幕适应
      windowDraw()
      calcRate()
    })
    return {
      ageChart,
      appRef,
    }
  },
})
</script>
@import '@/assets/echarts/index.scss'
<style lang="scss" scoped>
#index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bg {
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
    background-image: url('../../assets/echarts/bg.png');
    background-size: cover;
    background-position: center center;
    .top_title{
      display: flex;
      justify-content: space-between;
      div{
        background-color: aliceblue;
      }
    }
    .second_top{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      .second_left{
        display: flex;
        justify-content: space-between;
        .left_trapezoid{
          width:465px;
          height: 0;
          text-align: center;
          line-height: 50px;
          border-width: 0px 50px 50px 0px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text{
            font-size: 25px;
            color: #fff;
          }
        }
        .left_Parallelogram{
          width:310px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: $ParallBgc;
          transform: skewX(45deg);
          background-color: $ParallBgc;
          .text{
            display: inline-block;
            transform: skewX(-45deg);
            font-size: 25px;
            color: #fff;
          }
        }
      }
      .second_middle{
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: aliceblue;
        font-size: 25px;
        color: #fff;
      }
      .second_right{
        display: flex;
        justify-content: space-between;
        .right_trapezoid{
          width:465px;
          height: 0;
          text-align: center;
          line-height: 50px;
          border-width: 0px 0 50px 50px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text{
            font-size: 25px;
            color: #fff;
          }
        }
        .right_Parallelogram{
          width: 310px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: $ParallBgc;
          transform: skewX(-45deg);
          background-color: $ParallBgc;
          .text{
            display: inline-block;
            transform: skewX(45deg);
            font-size: 25px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
