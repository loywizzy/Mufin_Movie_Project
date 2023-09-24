import { createRouter , createWebHistory } from 'vue-router'
import login from './pages/login.vue'
import signup from './pages/signup.vue'
import home from './pages/home.vue'

const routes = [

{path: '/login' , component: login },
{path: '/signup' , component: signup },
{path: '/' , component: home}]

const route = createRouter({ 
    history: createWebHistory(),
    routes,
})


export default route