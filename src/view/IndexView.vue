<script setup>
import search from '@/components/SearchCom.vue'
import tab from '@/components/TabCom.vue'
</script>

<template>
  <van-sticky>
    <!-- 搜索框-->
    <search/>
    <!-- 标签导航条-->
    <tab/>
  </van-sticky>
  <!--    指定导航条内容-->
  <router-view/>
</template>

<style scoped>

</style>