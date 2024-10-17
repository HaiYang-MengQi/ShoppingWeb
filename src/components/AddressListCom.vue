<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {useAddressStore} from '@/stores/addresslist.js'
const store = useAddressStore();

const list = ref([])
const disabledList = ref([])

onMounted(()=> {
  list.value = store.addressList.map(item => {
    // 合并省、市、区和详细地址为新的address属性
    return {
      ...item,  // 保留其他原有属性
      address: `${item.province}${item.city}${item.county}${item.addressDetail}` // 合并地址信息
    }
  });

  disabledList.value = store.disabledList.map(item => {
    return {
      ...item,  // 保留其他原有属性
      address: `${item.province}${item.city}${item.county}${item.addressDetail}` // 合并地址信息
    }
  });

})


const chosenAddressId = ref('1');

const router = useRouter();

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
    console.log('点击不可到达的地址输出对象',item)
  };
</script>

<template>
  <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @edit-disabled="onEditDisabled"
  />
</template>

<style scoped>

</style>