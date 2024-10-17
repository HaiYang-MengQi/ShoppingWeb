<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";
const active = ref(0)
const labels = [
  {id: 0, title: '推荐', path: '/suggest'},
  {id: 1, title: '食品', path: '/food'},
  {id: 2, title: '百货', path: '/demo'},
  {id: 3, title: '饰品', path: '/ornaments'},
  {id: 4, title: '女装', path: '/womenClothes'},
  {id: 5, title: '水果', path: '/fruit'},
  {id: 6, title: '男装', path: '/manClothes'},
  {id: 7, title: '母婴', path: '/mother-baby-goods'},
  {id: 8, title: '手机', path: '/phone'},
  {id: 9, title: '运动', path: '/sport'},
  {id: 10, title: '内衣', path: '/underwear'},
  {id: 11, title: '鞋包', path: '/shoes-and-bags'},
  {id: 12, title: '电器', path: '/electrical'},
  {id: 13, title: '美妆', path: '/cosmetics'},
  {id: 14, title: '电脑', path: '/computer'},
  {id: 15, title: '家装', path: '/home-decoration'},
  {id: 16, title: '医药', path: '/medicine'},
  {id: 17, title: '家纺', path: '/home-textiles'},
  {id: 18, title: '车品', path: '/car'},
  {id: 19, title: '家具', path: '/furniture'},
  {id: 20, title: '海淘', path: '/cross-shopping'},
  {id: 21, title: '玩乐', path: '/entertainment'},
]
const router = useRouter()
const jump = (val) => {
  const path = "/index"+labels[val].path
  router.push(path)
}
</script>

<template>
  <van-tabs v-model:active="active" title-active-color="red" color="red" @click-tab="jump(active)">
    <div v-for="label in labels" :key="label.id">
      <van-tab :title="label.title"></van-tab>
    </div>
  </van-tabs>
</template>

<style scoped>

</style>