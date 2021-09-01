<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <!-- 顶部 -->
      <div class="top_title">
        <div class="line_svg">
          <div class="line">动画</div>
          <div class="svg">svg图</div>
        </div>
        <div class="middle_box">
          <span>系统监测</span>
        </div>
        <div class="line_svg">
          <div class="svg">svg图</div>
          <div class="line">动画</div>
        </div>
      </div>
      <!-- /顶部 -->
      <!-- 二级顶部 -->
      <div class="second_top">
        <div class="second_left">
          <div class="left_trapezoid">
            <span class="text">深圳 多云 26℃ 73% 北风1级</span>
          </div>
          <div class="left_Parallelogram">
            <span class="text">数据可视</span>
          </div>
        </div>
        <div class="second_middle">
          SVG图
        </div>
        <div class="second_right">
          <div class="right_Parallelogram">
            <span class="text">平台监测</span>
          </div>
          <div class="right_trapezoid">
            <span class="text">2021-08-31 周一 12:31:12</span>
          </div>
        </div>
      </div>
      <!-- /二级顶部 -->
      <!-- 主体展示内容-->
      <div class="banner_box">
        <div class="banner">
          <div class="banner_show_box">
            <div class="bgc">
              <div class="info">
                <div>
                  <span>设备总数</span>
                  <span>23355600</span>
                </div>
                <div>
                  <span>运行设备数</span>
                  <span>233556</span>
                </div>
              </div>
              <div class="info">
                <div>
                  <span>接入终端数</span>
                  <span>32343999</span>
                </div>
                <div>
                  <span>当前任务数</span>
                  <span>12377766</span>
                </div>
              </div>
            </div>
          </div>
          <div class="banner_show_box margin20Top">
            <div class="bgc">
              <pieChart :config="devieModelConfig"></pieChart>
            </div>
          </div>
        </div>
        <div class="banner_middle">
          <!-- <map-chart :config="mapConfig"></map-chart> -->
        </div>
        <div class="banner">
          <div class="banner_show_box">
            <div class="bgc">
              <list :listData="listData"></list>
            </div>
          </div>
          <div class="banner_show_box margin20Top">
            <div class="bgc">
              <list :listData="listData2"></list>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom_box">
        <div class="border">
          <div class="bgc">
            <DataTransformFitler :config="pies"></DataTransformFitler>
          </div>
        </div>
        <div class="middle">
          <div class="bgc">
            <AreaChartwithTimeAxis :config="monthflow"></AreaChartwithTimeAxis>
          </div>
        </div>
        <div class="border">
          <div class="bgc">
            <DataTransformFitler :config="pie"></DataTransformFitler>
          </div>
        </div>
      </div>
      <!-- /主体展示内容-->
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, reactive } from 'vue'
// 接入机型占比图
import pieChart from '@/components/chart/pie.vue'
// 流量折线图
import DataTransformFitler from '@/components/chart/DataTransformFitler.vue'
// 高负载列表
import List from '@/components/chart/list.vue'
import AreaChartwithTimeAxis from '@/components/chart/AreaChartwithTimeAxis.vue'
// 地图图表
import mapChart from '@/components/chart/map.vue'
import useIndex from '@/utils/useDraw'
export default defineComponent({
  name: 'Systemstatistics',
  components: {
    pieChart,
    DataTransformFitler,
    AreaChartwithTimeAxis,
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
    let pie = reactive({
      id: 'pie',
      config: {
        title: {
          text: '集群硬件性能监测',
          left: 'center',
        },
      },
    })
    let pies = reactive({
      id: 'pies',
      config: {
        title: {
          text: '集群软件性能监测',
          left: 'center',
        },
      },
    })
    let monthflow = reactive({
      id: 'monthflow',
      config: {},
    })
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
    const listData =  {
      titleArr:['序号','名字','状态', '地点','来源'],
      listArr:[
        [
          '1',
          'ubuntu',
          'running',
          'sad',
          'll'
        ],
         [
          '2',
          'deepin',
          'running',
          'sad',
          'll'
        ],
         [
          '3',
          'fedora',
          'running',
          'sad',
          'll'
        ],
         [
          '4',
          'centos',
          'running',
          'sad',
          'll'
        ],
         [
          '5',
          'kali',
          'running',
          'sad',
          'll'
        ],
         [
          '6',
          'manjaro',
          'running',
          'sad',
          'll'
        ],
         [
          '7',
          'ibuntu',
          'running',
          'sad',
          'll'
        ],
      ],
      time:2000,
      title: '高负载设备',
    }
    const listData2 =  {
      titleArr:['序号','ip','端口', '方式','来源'],
      listArr:[
        [
          '1',
          '192.168.142.255',
          '65535',
          'DDOS',
          '美国'
        ],
        [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
        [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
         [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
        [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
         [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
        [
          '1',
          '192.168.142.255',
          '正在攻击',
          'DDOS',
          '美国'
        ],
      ],
      time:2500,
      title: '入侵监测',
    }
    return {
      devieModelConfig,
      mapConfig,
      ageChart,
      monthflow,
      appRef,
      pies,
      pie,
      listData,
      listData2,
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
      // display: flex;
      // justify-content: space-between;
      div {
        display: inline-block;
        // background-color: aliceblue;
      }
      .line_svg{
        width: 814px;
         background-color:blanchedalmond;
        .line {
          width: 600px;
        }
        .svg{
          width: 200px;
          height: 70px;
        }
      }
      .middle_box{
        width: 260px;
        height: 90px;
        color: blue;
        position: relative;
        background-color: rgb(148, 231, 231);
        text-align: center;
        font-size:px;
      }
    }
    .second_top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .second_left {
        display: flex;
        justify-content: space-between;

        .left_trapezoid {
          width: 465px;
          height: 0;
          text-align: center;
          border-width: 0px 50px 50px 0px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text {
            font-size: 25px;
            color: #fff;
            line-height: 56px;
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
            line-height: 56px;
          }
        }
      }
      .second_middle {
        width: 260px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 30px;
        overflow: hidden;
        background-color: rgb(49, 61, 177);
        color: #fff;
      }
      .second_right {
        display: flex;
        justify-content: space-between;
        .right_trapezoid {
          width: 465px;
          height: 0;
          text-align: center;
          border-width: 0px 0 50px 50px;
          border-style: none solid solid;
          border-color: transparent transparent $TrapBgc;
          background-color: none;
          .text {
            font-size: 25px;
            color: #fff;
            line-height: 56px;
          }
        }
        .right_Parallelogram {
          width: 310px;
          height: 50px;
          text-align: center;
          background: $ParallBgc;
          transform: skewX(-45deg);
          background-color: $ParallBgc;
          .text {
            display: inline-block;
            transform: skewX(45deg);
            font-size: 25px;
            color: #fff;
            line-height: 56px;
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
        .banner_show_box {
          width: 500px;
          height: 300px;
          border: 2px solid rgb(63, 40, 148);
          border-radius: 10px;
          color: #fff;
          padding: 10px;

          box-shadow: 0 0 20px #0269ce inset;
          .bgc {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-color: #0c1121;
          }
          .info {
            width: 100%;
            height: 50%;
            display: flex;
            justify-items: center;
            div {
              padding: 0;
              width: 50%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              span {
                font-size: 25px;
                color: #2379f9;
              }
              span:nth-child(2) {
                font-size: 40px;
                color: #3adabf;
              }
            }
          }
        }
        .margin20Top {
          margin-top: 10px;
        }
      }
      .banner_middle {
        width: 900px;
        height: 610px;
        padding: 10px;
        margin: 0 10px;
        box-shadow: 0 0 20px #56ff56 inset;
        display: inline-block;
        border-radius: 10px;
        animation: firstdiv 0.2s linear 0.2s infinite alternate;
      }
      @keyframes firstdiv {
        0% {
          box-shadow: 0 0 0 #56ff56 inset;
        }
        25% {
          box-shadow: 0 0 5px #56ff56 inset;
        }
        50% {
          box-shadow: 0 0 10px #56ff56 inset;
        }
        75% {
          box-shadow: 0 0 15px #56ff56 inset;
        }
        100% {
          box-shadow: 0 0 20px #56ff56 inset;
        }
      }
    }
    .bottom_box {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .border {
        width: 500px;
        height: 320px;
        padding: 10px;
        border: 2px solid rgb(63, 40, 148);
        border-radius: 10px;
        box-shadow: 0 0 20px #0269ce inset;
        .bgc {
          width: 100%;
          height: 100%;
          background-color: #0c1121;
          border-radius: 10px;
        }
      }
      .middle {
        width: 870px;
        height: 320px;
        padding: 10px;
        border: 2px solid rgb(63, 40, 148);
        border-radius: 10px;
        box-shadow: 0 0 20px #0269ce inset;
        .bgc {
          width: 100%;
          height: 100%;
          background-color: #0c1121;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
