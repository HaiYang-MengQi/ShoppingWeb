<script setup>
import { showConfirmDialog } from 'vant';
showConfirmDialog({
  title: '温馨提示',
  message:
      '京东\n我遭称冯了个碧的\n!!!!!!',
  confirmButtonText : '朕已经操了',
  cancelButtonText : '我再想想',
  closeOnClickOverlay : true,
  lockScroll : true
})
    .then(() => {
      console.log('on confirm');
    })
    .catch(() => {
      console.log('on cancel');
    });
</script>

<template>
  <van-dialog >
  </van-dialog>
</template>

<style scoped>

</style>