<script setup>
import { ref, onMounted } from 'vue';

const videos = ref([
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
]);

const currentVideoIndex = ref(0);
let startY = 0;

const handleTouchStart = (event) => {
  startY = event.touches[0].clientY; // 记录滑动开始时的 Y 轴位置
};

const handleTouchMove = (event) => {
  const moveY = event.touches[0].clientY;
  const diffY = startY - moveY;

  if (diffY > 50) {
    // 上滑，切换到下一个视频
    nextVideo();
  } else if (diffY < -50) {
    // 下滑，切换到上一个视频
    prevVideo();
  }
};

const nextVideo = () => {
  if (currentVideoIndex.value < videos.value.length - 1) {
    currentVideoIndex.value++;
  } else {
    currentVideoIndex.value = 0; // 回到第一个视频
  }
};

const prevVideo = () => {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--;
  } else {
    currentVideoIndex.value = videos.value.length - 1; // 跳到最后一个视频
  }
};

onMounted(() => {
  const videoContainer = document.querySelector('.video-container');
  videoContainer.addEventListener('touchstart', handleTouchStart);
  videoContainer.addEventListener('touchmove', handleTouchMove);
});
</script>

<template>
  <div class="video-container">
    <video autoplay loop muted playsinline :key="videos[currentVideoIndex]" controls>
      <source :src="videos[currentVideoIndex]" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
