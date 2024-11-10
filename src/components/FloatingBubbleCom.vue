<script setup>
import {useRouter} from "vue-router";
import {useSettingStore} from '@/stores/setting.js'
const router = useRouter();
const settingStore = useSettingStore();
const onOffsetChange = (offset) => {
  console.log(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
};
const eventHandler = () => {
  router.push({
    name: 'complain',
    params: {
      title: '客服咨询'
    }
  })
  settingStore.toggleTabbarHidden()
};
</script>

<template>
  <teleport to="body">
    <van-floating-bubble
        axis="xy"
        icon="chat"
        magnetic="x"
        @offset-change="onOffsetChange"
        @click="eventHandler"
        v-if="settingStore.tabbarDisplay"
    />
  </teleport>

</template>

<style scoped>

</style>