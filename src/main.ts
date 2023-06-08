import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import components from '@/components/UI/index.js';
import store from '@/store/index.js';

import App from './App.vue'

import router from './router'

const app = createApp(App)
components.forEach((item)=>{
    app.component(item.name, item.component);
})

// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
