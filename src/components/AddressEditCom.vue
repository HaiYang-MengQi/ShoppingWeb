<script setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAddressStore} from '@/stores/addresslist.js'
import {areaList} from '@vant/area-data';

const route = useRoute();
const router = useRouter();
const searchResult = ref([]);
const store = useAddressStore();
const address_id = ref(0)
const address_data = ref({})
onMounted(() => {
      address_id.value = Number(route.query.address_id)
      const address = store.addressList.find(item => item.id === address_id.value);
      if (address) {
        address_data.value = address;
      } else {
        console.info('未找到匹配的 address 对象');
      }

    }
)
const onSave = (val) => {
  store.updateAddressList(JSON.stringify(val))
};
const onDelete = (val) => {
  store.deleteAddressList(val.id)
  router.back()
};
const onChangeDetail = () => {
  console.log('修改地址详情');
};
</script>

<template>
  <van-address-edit
      :address-info="address_data"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :area-list="areaList"
      :search-result="searchResult"
      show-delete
      show-search-result
      show-set-default
      @delete="onDelete"
      @save="onSave"
      @change-detail="onChangeDetail"
  />
</template>

<style scoped>
/* 样式根据需求自定义 */
</style>
