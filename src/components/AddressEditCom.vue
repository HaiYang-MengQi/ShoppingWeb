<script setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {useAddressStore} from '@/stores/address.js'
import {areaList} from '@vant/area-data';
const route = useRoute();
const router = useRouter();
const searchResult = ref([]);
const addressStore = useAddressStore();
const addressID = ref(-1)
const addressData = ref({})
onMounted(() => {
      addressID.value = Number(route.query.addressID)
      const address = addressStore.availableList[addressID.value-1]
      if (address) {
        addressData.value = address;
      } else {
        console.info('新增用户');
      }
    }
)
const onSave =  (val) => {
  addressStore.saveAddress(val)
  router.back()

};
const onDelete = (val) => {
  addressStore.deleteAddress(val.id-1)
  router.back()
};
const onChangeDetail = () => {
  console.log('修改地址详情');
};
</script>

<template>
  <van-address-edit
      :address-info="addressData"
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
