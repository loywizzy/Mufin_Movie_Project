import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.mount('#app')
