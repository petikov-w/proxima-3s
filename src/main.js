import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import routers from "@/routes";
import proxima from "@/store/proxima";
const app = createApp(App);
app.use(routers);
app.use(proxima);
app.mount('#app')



