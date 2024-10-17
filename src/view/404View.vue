<script setup>
const keywords = ['失踪', '亲人', '线索', '联系'];
const text = '尊敬的各位朋友：\n\n我们怀着焦急的心情寻找一位亲人，恳请各位帮忙留意。如果您有任何线索，请立即与我们联系，万分感谢！\n\n失踪人姓名：张三\n性别：男\n年龄：45岁\n身高：1米75\n体型：中等偏瘦\n失踪时间：2024年9月5日\n失踪地点：XX市XX区XX路\n特征描述：失踪时身穿灰色外套、黑色长裤，脚穿运动鞋。左手腕上有一块明显的胎记，走路时微微有些跛。\n\n失踪人有轻度的记忆障碍，最近情绪不太稳定，家人十分担心。我们已经多方寻找，但尚未找到任何线索，万分着急。希望好心人能提供帮助，您的每一条信息都可能对我们至关重要！\n\n如有线索，请联系：\n联系电话：138-XXXXXXXX\n联系人：李女士\n\n再次感谢大家的关注与帮助！\n\nXXX家属敬上\n\n2024年9月7日';
</script>

<template>
  <div class="container">
    <div class="title">404 Not Found</div>
    <van-image
        width="100%"
        height="50%"
        fit="fill"
        src="https://haiyang07091.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%282%29.png?Expires=1726299301&OSSAccessKeyId=TMP.3Kj3e4U5HutefJr3Fm3tAKDeKYgZqpvXF1phUhZGaPR2dVaiMSSRJqiUztoEbgXbixy53QayJatqC6hFjJCiRnkbX6fBCL&Signature=WsZgRrl%2Bp3FFlV0yzFLtXjX%2FG3s%3D"
    />
    <div class="content">
      <van-divider content-position="left"
          :style="{ color: '#b31f1c', borderColor: '#f1a2a2', padding: '0 16px' }"
      >
        寻人启事
      </van-divider>
      <van-highlight
          :keywords="keywords"
          :source-string="text"
          highlight-class="custom-class"
      />
    </div>
  </div>

</template>

<style scoped>
.title{
  text-align: center;
  font-size: 50px;
}
.container {
  width: 100%;
  height: 500px;
}
.van-highlight{
  padding: 16px;
  text-indent: 4em;
}
.custom-class{
  color: #b31f1c;
}
</style>