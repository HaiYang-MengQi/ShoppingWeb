import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from "pinia";
import persist from 'pinia-plugin-persistedstate'
import VantComponents from "@/vant-ui/vant.js"
const app = createApp(App)
VantComponents.forEach(item => app.use(item))
app.use(router)
app.use(createPinia().use(persist))
app.mount('#app')