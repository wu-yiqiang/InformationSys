<template>
  <div class="Login">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="">
    </div>
    
    <div class="inputFrame account">
      <span class="iconfont  icon-yonghu"></span>
      <input type="text" placeholder="邮箱/手机号码"  spellcheck="false"> 
      <span class="iconfont  icon-chakanyan" style="visibility:hidden;"></span>
    </div>
    <div class="inputFrame password">
      <span class="iconfont  icon-mima"></span>
      <input type="password" placeholder="密码"  spellcheck="false"/>
      <span class="iconfont  icon-chakanyan"></span>
    </div>

    <div class="Btn loginBtn">登陆</div>
    <div class="Btn registerBtn">注册</div>
  </div>
</template>

<script lang="ts">
import { Toast,Icon } from 'vant';
import { defineComponent,ref } from 'vue';
// 防抖、节流、日期格式化
// import { Debounced, Throttle,DateFormate} from '../../utils/tools';
// 校验
//import { inputCheck } from '../../utils/check';
export default defineComponent({
  name: 'Login',
  components: {
    
  },

  data() {
    return {
      account:"",
      password:"",
      // check : new inputCheck(),
      // debounced: new Debounced(),
    }
  },

  setup() {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.Login {
  .logo {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 71px;
      height: 71px;
    }
  }

  .inputFrame {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 40px;
    margin:0 auto;
    margin-top: 10px;
    padding: 0 10px;
    border-radius: 20px;
    background-color: #F0F0F0;
    font-size: 16px;
    line-height: 40px;
    input {
      width: 100%;
      height: 100%;
      outline:none;
      border: none;
      background-color: #F0F0F0;
      line-height: normal;
    }
  }

  .Btn {
    width: 90%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 5px;
    background-color: aqua;
    margin-top: 20px;
    font-size: 18px;
    color: #FFF;
  }

  .loginBtn {
    background-color: red;
    opacity: 0.5;
  }

  .registerBtn {
    background-color: #F0F0F0;
  }
}
</style>