<template>
  <div class="home">
    <div class="oneLine">
      <!-- 日历 -->
      <el-card class="box-card calendar">
        <el-calendar v-model="value"></el-calendar>
      </el-card>
      <!-- 日历 -->

      <!-- 我的待办 -->
      <el-card class="box-card workToDo">
        我的待办
      </el-card>
      <!-- 我的待办 -->
    </div>

    <!-- 通知栏 -->
    <el-card class="box-card workToDo">
      通知栏
    </el-card>
    <!-- 通知栏 -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home',
  data() {
    return {
      value: new Date(),
    }
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.home {
  color: $mainColor;
  height: 100%;
  .oneLine {
    display: flex;
    justify-content: space-around;
    height: 100%;
    .calendar {
      height: 30%;
      width: 40%;
    }
    .workToDo {
      width: 40%;
    }
  }
}
</style>
