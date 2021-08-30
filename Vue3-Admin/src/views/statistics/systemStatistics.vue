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
      <div class="second_top">
        <div class="second_left">
          <div class="left_trapezoid">
            <span class="text">天气</span>
          </div>
          <div class="left_Parallelogram">
            <span class="text">大数据平台监测</span>
          </div>
        </div>
        <div class="second_middle">
          是服务
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
      <!-- 主体展示内容-->
      <div class="banner_box">
        <div class="banner">
          <div>
            <div class="info">
              <div>设备总数</div>
              <div>运行设备数</div>
            </div>
            <div class="info">
              <div>接入终端数</div>
              <div>当前任务</div>
            </div>
          </div>
          <div>
            <pieChart :config="devieModelConfig"></pieChart>
          </div>
        </div>
        <div class="banner_middle">
          <map-chart :config="mapConfig"></map-chart>
        </div>
        <div class="banner">
          <div>
            <list></list>
          </div>
          <div></div>
        </div>
      </div>

      <div class="bottom_box">
        <div class="border"></div>
        <div class="middle">
          <timeAxis :id="pies"></timeAxis>
        </div>
        <div class="border">
          集群性能
        </div>
      </div>
      <!-- /主体展示内容-->
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, reactive } from 'vue'
// 导入接入机型占比图
import pieChart from '@/components/chart/pie.vue'
// 导入流量折线图
import timeAxis from '@/components/chart/AreaChartwithTimeAxis.vue'
// 导入高负载列表
import List from '@/components/chart/list.vue'
// 地图图表
import mapChart from '@/components/chart/map.vue'
import useIndex from '@/utils/useDraw'
export default defineComponent({
  name: 'Systemstatistics',
  components: {
    pieChart,
    timeAxis,
    List,
    mapChart,
  },
  setup() {
    let devieModelConfig = reactive({
      id: 'devieModel',
      config: {
        title: {
          text: '接入设备',
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
            type: 'pie',
            radius: '70%',
            // label: {
            //   normal: {
            //     show: true,
            //     position: 'inside',
            //     formatter: '{d}%', //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
            //     textStyle: {
            //       align: 'center',
            //       baseline: 'middle',
            //       fontFamily: '微软雅黑',
            //       fontSize: 15,
            //       fontWeight: 'bolder',
            //     },
            //   },
            // },
            data: [
              { value: 1000, name: 'linux' },
              { value: 735, name: 'android' },
              { value: 330, name: 'wdinrdo' },
              { value: 214, name: 'mac' },
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
      },
    })
    let mapConfig = reactive({
      id: 'map',
      config: {},
    })
    const pies = ref('pies')
    const ageChart = ref('ageChart')
    let setBackground = () => {
      // 添加背景图片
      let dom = document.querySelector('body')
      dom.style.backgroundColor = '#000'
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
      devieModelConfig,
      mapConfig,
      ageChart,
      appRef,
      pies,
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
    .top_title {
      display: flex;
      justify-content: space-between;
      div {
        background-color: aliceblue;
      }
    }
    .second_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      .second_left {
        display: flex;
        justify-content: space-between;
        .left_trapezoid {
          width: 465px;
          height: 0;
          text-align: center;
          line-height: 50px;
          border-width: 0px 50px 50px 0px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text {
            font-size: 25px;
            color: #fff;
          }
        }
        .left_Parallelogram {
          width: 310px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: $ParallBgc;
          transform: skewX(45deg);
          background-color: $ParallBgc;
          .text {
            display: inline-block;
            transform: skewX(-45deg);
            font-size: 25px;
            color: #fff;
          }
        }
      }
      .second_middle {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: aliceblue;
        font-size: 25px;
        color: #fff;
      }
      .second_right {
        display: flex;
        justify-content: space-between;
        .right_trapezoid {
          width: 465px;
          height: 0;
          text-align: center;
          line-height: 50px;
          border-width: 0px 0 50px 50px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text {
            font-size: 25px;
            color: #fff;
          }
        }
        .right_Parallelogram {
          width: 310px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: $ParallBgc;
          transform: skewX(-45deg);
          background-color: $ParallBgc;
          .text {
            display: inline-block;
            transform: skewX(45deg);
            font-size: 25px;
            color: #fff;
          }
        }
      }
    }
    .banner_box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .banner {
        display: inline-block;
        div {
          width: 500px;
          height: 300px;
          border: 1px solid rgb(63, 40, 148);
          border-radius: 10px;
          .info {
            width:100%;
            height: 50%;
            div{
              display: inline-block;
              width: 50%;
              height: 50%;
            }
          }
        }
        div:nth-child(2) {
          margin-top: 20px;
        }
      }
      .banner_middle {
        width: 900px;
        height: 624px;
        background-color: skyblue;
        display: inline-block;
      }
    }
    .bottom_box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .border {
        width: 500px;
        height: 300px;
        background-color: azure;
      }
      .middle {
        width: 890px;
        margin: 0 10px;
        background-color: #0c1121;
        border: 1px solid rgb(63, 40, 148);
        border-radius: 10px;
      }
    }
  }
}
</style>
