<template>
  <div class="List">
    <div class="top_box">
      <div class="title">{{listData.title}}</div>
      <div class="table_header">
         <div v-for="(item, index) in listData.titleArr" :key="index">{{ item}}</div>
      </div>
    </div>
    <div class="show_list" ref="show_list">
      <ul class="ul1" ref="ul1">
        <li class="showList" v-for="(items, indexs) in listData.listArr" :key="indexs" ref='showList'>
          <div v-for="(item, index) in items" :key="index">{{item}}</div>
        </li>
      </ul>
      <ul class="ul2" ref="ul2">
        <li class="showList" v-for="(items, indexs) in listData.listArr" :key="indexs">
           <div v-for="(item, index) in items" :key="index">{{ item}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'List',
  components: {},
  props: {
    listData: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    let listData = reactive(props.listData)
    const state = reactive({
    	show_list: null,
      ul1: null,
      ul2m: null,
      showList: null,
    })
    /**
     * 设置事件监听
     */
    let setEventListern = t => {
      var ulbox = state.show_list
      // ul2.innerHTML = ul1.innerHTML
      // 开始无滚动时设为0
      ulbox.scrollTop = 0
      var timer = setInterval(rollStart, t)
      // 鼠标移入div时暂停滚动
      ulbox.onmouseover = function() {
        clearInterval(timer)
      }
      // 鼠标移出div后继续滚动
      ulbox.onmouseout = function(height) {
        timer = setInterval(rollStart(height), t)
      }
    }
    // 开始滚动
    let rollStart = () => {
      // 上面声明的DOM对象为局部对象需要再次声明
      let ul1 = state.ul1
      let ulbox = state.show_list
      const liHeight = state.showList
      let height = liHeight.offsetHeight
      // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
      if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0
      } else {
        ulbox.scrollTop += height
      }
    }
    onMounted(() => {
      setEventListern(props.listData.time)
    })
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      listData,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.List {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  //overflow: hidden;
  border-radius: 10px;
  .top_box {
    position: sticky;
    z-index: 9999;
    height: 25%;
    .title {
      height: 1/3;
      font-size: 24px;
      text-align: center;
      color: #f3891b;
    }
    .table_header {
      height: 2/3;
      font-size: 20px;
      color: aliceblue;
      display: flex;
      background-color: #171c33;
      display: flex;
      div {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  .show_list {
    height: 75%;
    overflow: hidden;
    ul {
      width: 100%;
      height: 100%;
      padding: 0;
      list-style: none;
      margin: 0;
      li {
        box-sizing: border-box;
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0f1325;
        font-size: 20px;
        color: #fff;
        div {
          display: flex;
          flex: 1;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
      li:nth-child(2n) {
        background-color: #171c33;
      }
    }
  }
}
</style>
