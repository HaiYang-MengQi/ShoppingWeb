import {defineStore} from 'pinia'
import {ref} from 'vue'


export const useAddressStore = defineStore('address', () => {
    const addressList = ref( [
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
    const getAddressList = () => {

    }

    const getDisabledList = () => {

    }
    const updateAddressList = (val) => {
        const parsedVal = JSON.parse(val);  // 解析传入的JSON字符串为对象
        const index = addressList.value.findIndex(item => item.id === parsedVal.id);  // 找到对应的地址索引
        if (index !== -1) {
            addressList.value[index] = parsedVal;  // 更新地址列表中的数据
            if (parsedVal.isDefault)
                addressList.value.forEach(item => {
                    if (item.id !== parsedVal.id) {
                        item.isDefault = false;
                    }
                });
        } else {
            addressList.value.push({
                id : addressList.value.length + 1,
                ...parsedVal
            });
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
        addressList,
        disabledList,
        getAddressList,
        getDisabledList,
        updateAddressList,
        deleteAddressList
    }
})
