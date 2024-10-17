<script setup>
import search from '@/components/SearchCom.vue'
import tab from '@/components/TabCom.vue'
</script>

<template>
  <van-sticky>
    <search/>
    <tab/>
  </van-sticky>
    <router-view/>
</template>

<style scoped>

</style>