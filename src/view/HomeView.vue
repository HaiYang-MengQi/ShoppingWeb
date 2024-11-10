<script setup>
import tabbarCom from '@/components/TabbarCom.vue'
import floatBubble from '@/components/FloatingBubbleCom.vue'
import {useSettingStore} from '@/stores/setting.js'
import {computed} from "vue";
import { watch } from 'vue';
import { useWindowSize } from '@vant/use';
const { width, height } = useWindowSize();
watch([width, height],()=>{
  console.log(width.value,height.value)
})
const settingStore = useSettingStore(); // 调用 store 实例
const theme = computed(() => settingStore.theme);  // 响应式的主题计算属性
const displayMode = computed(() => settingStore.tabbarDisplay);
</script>

<template>
  <van-config-provider :theme="theme">
    <router-view/>
    <float-bubble/>
    <!-- 下标导航条 -->
    <tabbar-com v-show="displayMode"/>
  </van-config-provider>
</template>

<style scoped>
</style>
