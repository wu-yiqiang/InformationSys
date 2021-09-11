<template>
  <div class="home">
    <!-- 选项 -->
    <el-card class="box-card oneLine">
      <el-row :gutter="24">
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text"></div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="short-cut">
            <div class="graphic"></div>
            <div class="text">待办实现</div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- /选项 -->
    <div class="twoLine">
      <!-- 日历 -->
      <el-card class="box-card calendar">
        考勤记录
        <Calendar class-name="select-mode" :remarks="remarks" monFirst="true" />
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
import { defineComponent, ref } from 'vue'
import Calendar from 'mpvue-calendar'
export default defineComponent({
  name: 'home',
  components: {
    Calendar,
  },
  data() {
    const remarks = ref({ '2021-1-13': 'some tings' })
    return {
      remarks,
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
    width: 100%;
    .el-card {
      display: flex;
      .short-cut {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 10px;
        .graphic {
          width: 40px;
          height: 40px;
          background-color: aqua;
          border-radius: 20px;
        }
        .text {
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
  .twoLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    .calendar {
      width: 25%;
      ::v-deep .el-card__body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    .workToDo {
      width: 65%;
    }
  }
}
</style>
