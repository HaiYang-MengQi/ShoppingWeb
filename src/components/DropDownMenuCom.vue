<script setup>
import { ref } from 'vue';
const menuRef = ref(null);
const itemRef = ref(null);
const orders_value = ref(0);
const price_value = ref(0);
const sales_value = ref(0);
const switch1 = ref(false);
const switch2 = ref(false);
const orders = [
  { text: '综合排序', value: 0 },
  { text: '好评排序', value: 1 },
];

const price = [
  {text : '价格从低到高', value: 0},
  {text : '价格从高到低', value: 1}
]
const sales = [
    {text : '销量从低到高', value: 0},
    {text : '销量从高到低', value: 1}
]

const eventHandler = (e) => {
  console.log(e);
};
const onConfirm = () => {
  itemRef.value.toggle();
};


</script>

<template>
  <van-dropdown-menu ref="menuRef" active-color="red" duration="0.5" >
    <van-dropdown-item v-model="orders_value" :options="orders" @change="eventHandler"/>
    <van-dropdown-item v-model="price_value" :options="price" @change="eventHandler"/>
    <van-dropdown-item  v-model="sales_value" :options="sales" @change="eventHandler"/>
    <van-dropdown-item title="筛选" ref="itemRef">
      <van-cell center title="包邮">
        <template #right-icon>
          <van-switch v-model="switch1" @change="eventHandler"/>
        </template>
      </van-cell>
      <van-cell center title="团购">
        <template #right-icon>
          <van-switch v-model="switch2" @change="eventHandler"/>
        </template>
      </van-cell>
      <div style="padding: 5px 16px;">
        <van-button type="primary" block round @click="onConfirm">
          确认
        </van-button>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>

</template>

<style scoped>

</style>