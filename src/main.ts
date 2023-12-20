import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './style/global.less'
import Afe1UI from "afe1-ui"

const pinia = createPinia()


//根组件
import App from './App.vue'


//app应用实例
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Afe1UI)

//挂载应用
app.mount('#app')
