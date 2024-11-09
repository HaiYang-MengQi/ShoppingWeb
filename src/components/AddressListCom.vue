<script setup>
import {onMounted, ref,computed} from 'vue';
import {useRouter} from 'vue-router';
import {useAddressStore} from '@/stores/address.js'
const router = useRouter();
const address = useAddressStore();
const activeId = address.defaultIndex
const availableList = ref([])
const disabledList = ref([])
onMounted(() => {
  availableList.value = address.availableList.map(item => {
    return {
      ...item,
      address: `${item.province}${item.city}${item.county}${item.addressDetail}` // 合并地址信息
    }
  });
  disabledList.value = address.disabledList.map(item => {
    return {
      ...item,  // 保留其他原有属性
      address: `${item.province}${item.city}${item.county}${item.addressDetail}` // 合并地址信息
    }
  });
})

const onAdd = () => {
  router.push({
    name: 'address_edit',
  })
};
const onEdit = (item) => {
  router.push({
    name: 'address_edit',
    query: {
      address_id: item.id
    }
  })

};

const onEditDisabled = (item) => {
  console.log('点击不可到达的地址输出对象', item)
};

</script>

<template>
  <van-address-list
      v-model="activeId"
      :list="availableList"
      :disabled-list="disabledList"
      default-tag-text="默认"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      @edit-disabled="onEditDisabled"
  />
</template>

<style scoped>

</style>