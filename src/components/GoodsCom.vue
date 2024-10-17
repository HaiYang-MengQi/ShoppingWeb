<script setup>
const data = defineProps(
    {
      data: Array
    }
)
</script>

<template>
  <van-row :gutter="[5,5]">
    <van-col v-for="(item) in data.data" :key="item.id" span="12">
      <van-image
          fit="fill"
          height="80%"
          lazy-load
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg:"
          width="100%"
      >
        <template v-slot:loading>
          <van-loading vertical>
            <template #icon>
              <van-icon name="star-o" size="30"/>
            </template>
            加载中...
          </van-loading>
        </template>
        <template v-slot:error>
          图片加载失败
        </template>
      </van-image>
            <div>
              <slot name="theme">
              </slot>
              <van-text-ellipsis :content="item.description"/>
              <slot name="xiadan">
              </slot>
              <span class="price">
                ￥{{ item.price }}
              </span>
              <slot name="count">
              </slot>
            </div>
    </van-col>

  </van-row>
</template>

<style scoped>
.van-col--12 {
  text-align: center;
  height: 350px;
  padding: 0px;
  margin: 0px;
}

.custom-class {
  color: red !important;
}

img {
  width: 100%;
  height: 100%;
}

.price {
  color: red;
}


</style>