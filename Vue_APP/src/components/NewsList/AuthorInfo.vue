<template>
  <div class="AuthorInfo">
    <!-- 作者信息 -->
    <div class="authorInfo">
      <div class="user">
        <img src="http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg" alt="" class="avatar">
        <div class="info">
          <div class="namee">{{author}}</div>
          <div class='time'>{{time}}</div>
        </div>
      </div>

      <Follow></Follow>
    </div>
    <!-- /作者信息 -->

    <!-- 主体内容 -->
    <!-- /主体内容 -->

    <!-- 分享/评论/点赞/收藏 -->
    <div class="operation">

    </div>
    <!-- 分享/评论/点赞/收藏 -->
  </div>
</template>

<script>
import Follow from '@/components/follow.vue'
import { defineComponent, onBeforeMount, onMounted,ref, toRefs, toRef,reactive , readonly,computed } from 'vue'
export default {
  name: 'AuthorInfo',
  components: {
    Follow
  },
  props:{
    author:{
      required:true,
    },
    time:{
      require:true,
    }
  },
  setup(props,context){
    let author = props.author;
    let time = props.time;
    return {
      author,
      time
    }
  },
  
}
</script>

<style lang='scss' scoped>
.AuthorInfo{
  .authorInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .info{
        margin-left:10px;
        font-size: 14px;
        .time{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
