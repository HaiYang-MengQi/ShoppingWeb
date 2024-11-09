<script setup>
import { ref } from 'vue';
import {useCouponStore} from '@/stores/coupon.js';
import {computed} from "vue";
const coupon = computed(() => useCouponStore());
const showList = ref(false);
const chosenCoupon = ref(-1);
const onChange = (index) => {
  showList.value = false;
  chosenCoupon.value = index;
};
//todo 需要修改
const onExchange = (code) => {
  coupon.value.push(code);
};
</script>

<template>
  <!-- 优惠券单元格 -->
  <van-coupon-cell
      :coupons="coupon.availableCoupon"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
  />
  <!-- 优惠券列表 -->
  <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
  >
    <van-coupon-list
        :code="''"
        :chosen-coupon="chosenCoupon"
        enabled-title="可使用优惠劵"
        :coupons="coupon.availableCoupon"
        disabled-title="不可使用优惠劵"
        :disabled-coupons="coupon.disableCoupon"
        exchange-button-text="兑换"
        exchange-min-length=10
        input-placeholder="请输入优惠码"
        close-button-text="取消"
        currency="¥"
        @change="onChange"
        @exchange="onExchange"
    />
  </van-popup>
</template>

<style scoped>

</style>