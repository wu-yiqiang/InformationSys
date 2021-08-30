<template>
  <div class="List">
    <div class="title">高负载设备</div>
    <div class="table_header">
      <div>编号</div>
      <div>名称</div>
      <div>状态</div>
      <div>名称</div>
      <div>状态</div>
    </div>
    <ul class="ul1">
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
      <li class="showList">
        <div>1</div>
        <div>1</div>
        <div>runniing</div>
        <div>1阿斯顿</div>
        <div>1阿斯顿</div>
      </li>
    </ul>
    <ul class="ul2"></ul>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'List',
  components: {},
  setup() {
    /**
     * 定时轮播
     */
    let lunbo = () => {
      // 获取当前li标签的高度
      const liHeight = document.querySelectorAll('.showList')
      return liHeight ? liHeight : liHeight[0].offsetHeight
    }
    // 设置事件监听
    let setEventListern = (t,height) => {
      var ul1 = document.querySelector('.ul1')
      var ul2 = document.querySelector('.ul2')
      var ulbox = document.querySelector('.List')
      ul2.innerHTML = ul1.innerHTML
      ulbox.scrollTop = 0 // 开始无滚动时设为0
      var timer = setInterval(rollStart, t) // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
      // 鼠标移入div时暂停滚动
      ulbox.onmouseover = function() {
        clearInterval(timer)
      }
      // 鼠标移出div后继续滚动
      ulbox.onmouseout = function() {
        timer = setInterval(rollStart(height), t)
      }
    }
    // 开始滚动
    let rollStart = (height) => {
      // 上面声明的DOM对象为局部对象需要再次声明
      var ul1 = document.querySelector('.ul1')
      var ul2 = document.querySelector('.ul2')
      var ulbox = document.querySelector('.List')
      // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
      if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0
      } else {
        ulbox.scrollTop++
      }
    }
    onMounted(() => {
      let height = lunbo()
      setEventListern(2000,height)
    })
    return {}
  },
})
</script>

<style lang="scss" scoped>
.List {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  overflow: hidden;
  border-radius: 40px;
  .title {
    height: 10%;
    font-size: 20px;
    text-align: center;
    color: #c3cbde;
  }
  .table_header {
    height: 17%;
    font-size: 20px;
    color: aliceblue;
    display: flex;
    background-color: #171c33;
    div {
      display: flex;
      width: 20%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  ul {
    height: 73%;
    padding: 0;
    list-style: none;
    overflow: hidden;
    margin: 0;
    li {
      box-sizing: border-box;
      height: 1/6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #171c33;
      font-size: 18px;
      color: #fff;
      div {
        display: flex;
        width: 20%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    li:nth-child(2n) {
      background-color: #0f1325;
    }
  }
}
</style>
