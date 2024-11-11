<script setup>
import search from '@/components/SearchCom.vue'
import tab from '@/components/TabCom.vue'
import {ref} from "vue";
import img from '@/assets/treetreeshark.jpg'
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    console.log('刷新成功');
    loading.value = false;
  }, 1000);
};

</script>

<template>
  <van-sticky>
    <!-- 搜索框-->
    <search/>
    <!-- 标签导航条-->
    <tab/>
  </van-sticky>
  <!--    指定导航条内容-->
  <van-pull-refresh v-model="loading" @refresh="onRefresh" success-text="刷新成功">
      <router-view/>
  </van-pull-refresh>

</template>

<style scoped>
.van-col {
  text-align: center;
}
</style>