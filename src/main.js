import './bootstrap';
import './assets/css/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const appName = import.meta.env.VITE_APP_NAME || 'Easy Book';

const app = createApp(App)

app.title=appName
app.use(createPinia())
app.use(router)

app.mount('#app')
