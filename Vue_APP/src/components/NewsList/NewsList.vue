<template>
  <!-- 显示文字和图片 -->
  <div class="ShowListComponent" >
    <!-- 作者信息 -->
    <AuthorInfo :author="items.author_name" :time="items.date"></AuthorInfo>
    <!-- /作者信息 -->

    <!-- 主体内容区域 -->
    <ContentBody :title="items.title" :picture1="items.thumbnail_pic_s" :picture12="items.thumbnail_pic_s02" :picture13="items.thumbnail_pic_s03" ></ContentBody>
    <!-- /主体内容区域 -->
    
    <!-- 底部内容 -->
    <ListOperation></ListOperation>
    <!-- /底部内容 -->
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import AuthorInfo from '@/components/NewsList/AuthorInfo.vue';
import ContentBody from '@/components/NewsList/ContentBody.vue';
import ListOperation from '@/components/NewsList/ListOperation.vue';
export default defineComponent({
  name: 'ShowListComponent',
  props:{
   items:{
     required:true,
   }
  },
  components: {
    AuthorInfo,
    ContentBody,
    ListOperation
  },
  setup(props,context) {
    let items = props.items;
    return {
      items,
    }
  },
})
</script>

<style lang='scss' scoped>
.ShowListComponent{
  padding: 10px ;
  border-bottom: 1px solid #f9f9f9;
}
</style>
