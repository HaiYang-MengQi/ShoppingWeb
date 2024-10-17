<script setup>
import { ref } from 'vue'
const messageCount = ref(0)

</script>

<template>

    <van-tabbar route fixed active-color="#ee0a24">
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="play-circle-o">多多视频</van-tabbar-item>
      <van-tabbar-item replace to="/not-fount" icon="fire-o">开学大促</van-tabbar-item>
      <van-tabbar-item replace to="/chat" icon="smile-comment-o" :badge='messageCount'>聊天</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="contact-o">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<style scoped>

</style>