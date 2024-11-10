import {defineStore} from 'pinia'
import {ref} from 'vue'
import {useRouter} from "vue-router";

export const useAddressStore = defineStore('address', () => {
    const defaultIndex = ref(0)
    const availableList = ref( [
        {
            id: 1,
            name: '张三',
            tel: '17737889399',
            province: '浙江省',
            city: '杭州市',
            county: '西湖区',
            areaCode: '330100',
            addressDetail: '文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
        },
        {
            id: 2,
            name: '李四',
            tel: '19137990504',
            province : '浙江省',
            city: '杭州市',
            county: '拱墅区莫干山路',
            areaCode: '330100',
            addressDetail : '莫干山路 50 号',
            isDefault: false,
        },
    ])
    const disabledList = ref([
        {
            id: 1,
            name: '王五',
            tel: '1320000000',
            province: '浙江省',
            city: '杭州市',
            county: '滨江区江南大道',
            areaCode: '330100',
            addressDetail: '15 号',
            isDefault: false,
        },
    ])
    const saveAddress = (val) => {
        if (val.id === undefined){
            val.id = availableList.value.length + 1
            availableList.value.push(val)
        }else {
            availableList.value[val.id-1] = val
        }
        val.isDefault ? availableList.value[defaultIndex.value].isDefault = false : null
        defaultIndex.value = val.isDefault ? val.id -1 : defaultIndex.value
    }

    const deleteAddress = (index) => {
        if (index !== -1) {
            availableList.value.splice(index, 1);  // 删除地址列表中的数据
        } else {
            console.log('地址未找到');
        }
    }

    return {
        defaultIndex,
        availableList,
        disabledList,
        saveAddress,
        deleteAddress
    }
})
