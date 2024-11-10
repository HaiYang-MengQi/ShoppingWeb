<script setup>
import NavBarCom from "@/components/NavBarCom.vue";
import chatCom from '@/components/ChatCom.vue'
import {useRoute} from "vue-router";
import {ref} from "vue";
const route = useRoute();
const title = ref(route.params.title)
</script>

<template>
  <NavBarCom :title="title"/>
  <chat-com/>
</template>

<style scoped>

</style>