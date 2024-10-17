<script setup>
</script>

<template>
  <van-cell value="153****9600"  is-link to="/index/suggest">
    <template #icon>
      <span class="custom-title">已绑定手机</span>
      <van-icon name="phone-o" />
    </template>
  </van-cell>
  <van-cell title="账号与安全" icon="shield-o" is-link>
  </van-cell>
  <van-cell title="夜间模式" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="收件地址" icon="gem-o" is-link to="/about/address_list">

  </van-cell>
  <van-cell title="后台管理" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="帮助与反馈" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="关于" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="用户协议" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="清理缓存" icon="gem-o" is-link>

  </van-cell>
  <van-cell title="退出登录" icon="gem-o" is-link>

  </van-cell>



</template>

<style scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}

</style>