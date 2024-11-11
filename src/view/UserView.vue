<script setup>
import userCard from '@/components/UserCardCom.vue'
</script>

<template>
  <userCard>
    <template #default>
      <div class="software-info">
        <h2 class="title">软件信息</h2>
        <p><strong>版本号：</strong>v1.0.0</p>
        <p><strong>开发者：</strong>示例公司</p>
        <p><strong>联系方式：</strong>support@example.com</p>
      </div>
    </template>
  </userCard>
  <router-view/>
</template>
<style scoped>
.software-info {
  padding-left: 20px; /* 左边距 */
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>