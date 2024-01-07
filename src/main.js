import { createApp, markRaw } from "vue";
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import './axios'
import App from './App.vue'
const app=createApp(App)
const pinia=createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router);
  });
app.use(pinia)
app.use(router)

app.mount('#app')
