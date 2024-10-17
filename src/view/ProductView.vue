<script setup>
import goods from '@/components/GoodsCom.vue'
import {ref} from "vue";
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    console.log('刷新成功');
    loading.value = false;
  }, 1000);
};

const data = ref([
  {
    id: 1,
    name: '玉米热狗肠',
    price: 26,
    description: '双汇玉米热狗肠32g香辣香脆肠火腿肠整箱批发小零食玉米肠鸡肉肠',
    img: "src/assets/cheems.jpg",
    sales_quantity: 1000
  },
  {
    id: 2,
    name: '黑人牙膏',
    price: 12,
    description: '【白鹿推荐】好来黑人牙膏超白竹炭茶倍健龙井绿茶含氟清新口气',
    img:
      "src/assets/黑人牙膏/黑人牙膏1.jpg",
    sales_quantity: 100
  },
  {
    id: 3,
    name: '夹心卷',
    price: 30,
    description: '千丝蛋酥卷96根香芋味榴莲味夹心松脆饼干奶香零食品小吃宿舍囤货',
    img:
      "src/assets/夹心卷/夹心卷1.jpg",
    sales_quantity: 300
  },
  {
    id: 4,
    name: '蛋黄派',
    price: 60,
    description: '达利园蛋黄派',
    img: "src/assets/蛋黄派/蛋黄派1.jpg",
    sales_quantity: 300
  },
  {
    id: 5,
    name: '回力袜子',
    price: 49.9,
    description: '回力100%纯棉袜子男士中筒夏季网眼薄款抗菌防臭吸汗透气运动长袜',
    img: "src/assets/回力袜子/回力袜子1.jpg",
    sales_quantity: 300
  },
  {
    id: 6,
    name: '猕猴桃',
    price: 39.9,
    description: '【现货】正宗秦美绿心猕猴桃奇异果新鲜水果现摘大果整箱批发包邮',
    img: "src/assets/猕猴桃/猕猴桃1.jpg",
    sales_quantity: 300
  }
])

</script>

<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh" success-text="刷新成功">
    <goods :data="data">
            <template #theme>
              <span class="theme">中秋大促</span>
            </template>

            <template #xiadan>
              <span class="xiadan"><van-icon name="certificate" />0元下单</span>
            </template>

            <template #count>
              <span class="count">已抢2800件</span>
            </template>
    </goods>
  </van-pull-refresh>
</template>

<style scoped>
.theme{
  background-color: #f1a2a2;
  border-radius: 4px;
  font-weight: bold;
  color: #7a0806;
  padding: 4px;
}
.xiadan{
  background-color: white;
  color: green;
  border-radius: 4px;
  font-weight: bold;
  padding: 4px;
}
.count{
  color: #7a0806;
  padding: 10px;
}
</style>