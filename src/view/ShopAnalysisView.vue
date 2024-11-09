<script setup>
import shopAnalysisCom from '@/components/ShopAnalysisCom.vue';
import  NavBarCom from "@/components/NavBarCom.vue";
import {useRoute} from "vue-router";
import {useSettingStore} from "@/stores/setting.js"
import {ref} from "vue";
const route = useRoute()
const title = ref(route.params.title)
const settingStore = useSettingStore()
settingStore.toggleTabbarHidden();
</script>

<template>
  <NavBarCom :title="title"/>
  <ShopAnalysisCom/>
</template>

<style scoped>

</style>