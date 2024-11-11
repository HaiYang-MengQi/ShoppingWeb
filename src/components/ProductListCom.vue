<script setup>
import img from '@/assets/treetreeshark.jpg'
</script>

<template>
<van-row :gutter="[5,5]" v-for="item in 100" :key="item">
  <van-col span="12">
    <van-image
        fit="fill"
        height="80%"
        lazy-load
        :src="img"
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
                ￥{{item}}
              </span>
      <slot name="count">
      </slot>
    </div>
  </van-col>
  <van-col span="12">
    <van-image
        fit="fill"
        height="80%"
        lazy-load
        :src="img"
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
                ￥{{item}}
              </span>
      <slot name="count">
      </slot>
    </div>
  </van-col>
</van-row>
</template>

<style scoped>

</style>