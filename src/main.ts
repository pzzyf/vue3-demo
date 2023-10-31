import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

const pinia = createPinia()

import App from './App.vue'

const app = createApp(App)

app.use(pinia)
app.mount('#app')
