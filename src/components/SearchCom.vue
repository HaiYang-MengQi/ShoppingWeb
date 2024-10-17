<script setup>
import { ref } from 'vue'
const value = ref('')
const onAssociation = (value) => {
  console.log(value)
}
const onSearch = (value) => {
  console.log(value)
}
</script>

<template>
    <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
        @update:model-value="onAssociation(value)"
        @search="onSearch(value)"
    />
</template>

<style scoped>

</style>