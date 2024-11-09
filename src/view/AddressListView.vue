<script setup>
import addressList from '@/components/AddressListCom.vue'
import NavBarCom from "@/components/NavBarCom.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
const route = useRoute()
const title = ref(route.params.title)
</script>

<template>
  <NavBarCom :title="title"/>
  <addressList/>
</template>

<style scoped>

</style>