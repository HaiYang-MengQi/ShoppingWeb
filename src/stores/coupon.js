import {defineStore} from "pinia";
import {ref} from "vue";
export const useCouponStore = defineStore('coupon',()=>{
    const availableCoupon = ref([
        {
            id: 1,
            available: 0,
            condition: '无门槛\n满12元可用',
            reason: '',
            value: 15000,
            name: '领劵中心获得',
            startAt: 1489104000,
            endAt: 1514592000,
            valueDesc: '150',
            unitDesc: '元',
        },
        {
            id: 2,
            available: 1,
            condition: '无门槛\n满12元可用',
            reason: '',
            value: 150,
            name: '领劵中心获得',
            startAt: 1489104000,
            endAt: 1514592000,
            valueDesc: '1.5',
            unitDesc: '元',
        }
    ])
    const disableCoupon = ref([
        {
            id: 1,
            available: 0,
            condition: '无门槛\n满12元可用',
            reason: '不想给你用',
            value: 150,
            name: '领劵中心获得',
            startAt: 1489104000,
            endAt: 1514592000,
            valueDesc: '150',
            unitDesc: '元',
        },
    ])
    return {
        availableCoupon,
        disableCoupon
    }
})