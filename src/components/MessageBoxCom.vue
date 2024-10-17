<script setup>

</script>

<template>
  <div class="message">
    <div class="card-title" v-if="$slots.title">
      <slot name="title">默认标题</slot>
    </div>
    <hr>
    <div class="card-body" v-if="$slots.content">
      <slot name="content">这是一条默认信息</slot>
    </div>
    <div class="card-bottom" v-if="$slots.button">
      <slot name="button">默认按钮</slot>
    </div>
  </div>
</template>

<style scoped>
.message {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.card-title {
  font-size: 20px;
  text-align: left;
  padding: 10px;
}

.card-body {

}

.card-bottom {
  margin-top: 80px;
  text-align: right;
  padding-right: 20px;
}

</style>