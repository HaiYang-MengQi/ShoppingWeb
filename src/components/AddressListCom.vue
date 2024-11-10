<script setup>
import {onMounted, ref,computed} from 'vue';
import {useRouter} from 'vue-router';
import {useAddressStore} from '@/stores/address.js'
const router = useRouter();
const address = useAddressStore();
const chosenAddressId = ref( address.defaultIndex)
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
      addressID: item.id
    }
  })

};

const onEditDisabled = (item) => {
  //todo 区分available 和 disabled就能解决，先不写了
  console.log(item.id)
  router.push({
    name: 'address_edit',
    query: {
      addressID: item.id
    }
  })
};

</script>

<template>
  <van-address-list
      v-model="chosenAddressId"
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