<script setup>
import picture from '@/assets/cheems.jpg'
import {ref} from "vue";

const keywords = ref(['张三', '灰色外套', '黑色长裤', '138-XXXXXXXX']);
const text = ref(`尊敬的各位朋友：
    我们怀着焦急的心情寻找一位亲人，恳请各位帮忙留意。如果您有任何线索，请立即与我们联系，万分感谢！
    失踪人姓名：张三
性别：男
年龄：45岁
身高：1米75
体型：中等偏瘦
失踪时间：2024年9月5日
失踪地点：XX市XX区XX路
特征描述：失踪时身穿灰色外套、黑色长裤，脚穿运动鞋。左手腕上有一块明显的胎记，走路时微微有些跛。
失踪人有轻度的记忆障碍，最近情绪不太稳定，家人十分担心。我们已经多方寻找，但尚未找到任何线索，万分着急。希望好心人能提供帮助，您的每一条信息都可能对我们至关重要！
如有线索，请联系：
联系电话：138-XXXXXXXXXXXX
联系人：李女士2024年9月7日`);

// import {useSettingStore} from '@/stores/setting.js';
// const settingStore = useSettingStore();
// const handleScroll = (e) => {
//   const container = e.target;
//   const scrollTop = container.scrollTop;
//   const scrollHeight = container.scrollHeight;
//   const clientHeight = container.clientHeight;
//   if (scrollTop + clientHeight >= scrollHeight) {
//     console.log('到底了')
//   }
// }
</script>

<template>
  <div class="container">
    <div class="title">404 Not Found</div>
    <van-image
        width="100%"
        height="300px"
        fit="fill"
        :src='picture'
    />
    <div class="content">
      <h1 style="text-align: center;font-size: 15px;color: red;margin: 0px">寻人启事</h1>
      <van-highlight
          :keywords="keywords"
          :source-string="text"

      />
    </div>
  </div>

</template>

<style scoped>
.title{
  text-align: center;
  font-size: 20px;
}
.container {
  width: 100%;
  height: 300px;
}
.van-highlight{
  padding: 16px;
  text-indent: 4em;
  color: green;
}
.custom-class /deep/ .highlighted {
  color: #b31f1c;
}

</style>