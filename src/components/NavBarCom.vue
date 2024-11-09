<script setup>
import {useSettingStore} from "@/stores/setting.js"
const props = defineProps(
    {
      title: String,
      default: '默认标题'
    }
)
const onClickLeft = () => {
  const settingStore = useSettingStore()
  console.log(settingStore.tabbarDisplay)
  settingStore.toggleTabbarDisplay()
  history.back();
}

</script>

<template>
  <van-nav-bar
      :title="props.title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />


</template>

<style scoped>

</style>