import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap'
import './assets/global.css'
import './assets/storecss.css'

<<<<<<< HEAD
=======

>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(bootstrap)
app.mount('#app')
