<script setup>
import {useSettingStore} from '@/stores/setting.js'
import {computed} from "vue";
import Coupon from '@/components/CouponCom.vue';
const settingStore = useSettingStore();
const themeName = computed(()=>settingStore.themeName)
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
  <van-cell title="收件地址"  is-link to="/user/addressList/收件地址"/>
    <Coupon/>
  <van-cell title="购物分析"  is-link to="/user/analysis/购物分析"/>
  <van-cell title="帮助与反馈"  is-link/>
  <van-cell title="关于"  is-link/>
  <van-cell title="用户协议"  is-link/>
  <van-cell title="清理缓存"  is-link/>
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