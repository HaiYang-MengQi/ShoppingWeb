import {defineStore} from 'pinia'
import {ref} from 'vue'


export const useAddressStore = defineStore('address', () => {
    const defaultIndex = ref(1)
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
            isDefault: false,
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
            console.log('增加')
            val.id = availableList.value.length + 1
            availableList.value.push(val)
            console.log(val.isDefault,availableList.value[defaultIndex].isDefault,defaultIndex.value)
            val.isDefault ? availableList.value[defaultIndex].isDefault = false : null
        }else {
            console.log('修改')
        }
    }

    const deleteAddressList = (id) => {
        const index = addressList.value.findIndex(item => item.id === id);  // 找到对应的地址索引
        if (index !== -1) {
            addressList.value.splice(index, 1);  // 删除地址列表中的数据
        } else {
            console.log('地址未找到');
        }
    }

    return {
        defaultIndex,
        availableList,
        disabledList,
        saveAddress,
        deleteAddressList
    }
})
