<script setup>
import tabbarCom from '@/components/TabbarCom.vue'
</script>

<template>
  <van-config-provider theme="light">
    <router-view />
    <tabbarCom>
    </tabbarCom>
  </van-config-provider>
</template>

<style scoped>

</style>