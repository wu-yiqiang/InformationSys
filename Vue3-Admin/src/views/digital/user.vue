<template>
  <div class="template">
    <el-card class="box-card">
      <el-form ref="form" :model="sizeForm" :inline="true">
        <el-form-item>
          <el-input
            placeholder="ip"
            v-model="ip"
            clearable
            @change="check"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="ip"
            v-model="ip"
            clearable
            @change="check"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="ip"
            v-model="ip"
            clearable
            @change="check"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="ip"
            v-model="ip"
            clearable
            @change="check"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="ip"
            v-model="ip"
            clearable
            @change="check"
          ></el-input>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="180"
          sortable
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="账号"
          width="180"
          sortable
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="标题"
          sortable
          align="center"
        ></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'template',
  components: {},
  setup() {
    let tableData = reactive([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
    ])
    let ip = ref('')
    let tips = ref(1)
    let check = () => {
      // let reg = /^(?:(?:(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5]))\.){3}(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5]))(?:\|(?:(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5]))\.){3}(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5])))*)$/
      // if (ip.value) {
      //   if (new RegExp(reg).test(ip.value)) {
      //   } else {
      //   }
      // }
    }
    return {
      account: ref(''),
      tableData,
      article: ref(''),
      date: ref(''),
      ip,
      check,
      tips,
    }
  },
})
</script>
<style lang="scss" scoped>
.ip-input {
  >>> input {
    border: 1px solid red;
    border-radius: 2px;
  }
}
.tips {
  visibility: hidden;
}
</style>
