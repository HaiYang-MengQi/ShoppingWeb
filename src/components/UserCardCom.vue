<script setup>
import {useSettingStore} from '@/stores/setting.js'
import {computed,ref} from "vue";

import 'vant/es/notify/style'
import {showNotify} from 'vant'
import Coupon from '@/components/CouponCom.vue';
const settingStore = useSettingStore();
const themeName = computed(()=>settingStore.themeName)
const clearCache = ()=>{
  localStorage.clear()
  showNotify({
    type: 'success',
    message:'缓存清理成功!',
    duration: 1500})
}

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>

<template>
  <van-cell value="153****9600"  is-link to="/index/suggest">
    <template #icon>
      <span class="custom-title">已绑定手机</span>
      <van-icon name="phone-o" />
    </template>
  </van-cell>
  <van-cell title="账号与安全" icon="shield-o" is-link/>
  <van-cell :title="themeName"   @click="settingStore.toggleTheme"/>
  <van-cell title="收件地址"  is-link to="/addressList/收件地址"/>
    <Coupon/>
  <van-cell title="购物分析"  is-link to="/analysis/购物分析"/>
  <van-cell title="快递物流"  is-link to="/order/快递物流"/>
  <van-cell title="软件说明" is-link @click="show = true" />
  <!-- 圆角弹窗（底部） -->
  <van-popup
      v-model:show="show"
      overlay
      round
      position="bottom"
      :style="{ height: '30%' }"
      @click="showPopup"
  >
    <slot name="default" >
    </slot>
  </van-popup>
  <van-cell title="清理缓存"  is-link @click="clearCache"/>
  <van-cell title="退出登录"  is-link/>
</template>

<style scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}

</style>