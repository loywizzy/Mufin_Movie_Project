import { createRouter , createWebHistory } from 'vue-router'
import login from './pages/login.vue'
import signup from './pages/signup.vue'
import home from './pages/home.vue'
import populary from './pages/populary.vue'
import category from './pages/category.vue'
import cartstore from './pages/cartstore.vue'
<<<<<<< HEAD
import bigcard from './pages/bigcard.vue'

=======
>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e

const routes = [
    {path: '/populary' ,
    component: populary},

    {path: '/category' ,
    component: category},

    {path: '/login' ,
    component: login },

    {path: '/signup' ,
    component: signup },

    {path: '/' ,
    component: home},

<<<<<<< HEAD
    {path: '/bigcard' ,
    component: bigcard},

=======
>>>>>>> 5b4c3e4dd00a10f0382c1c031b0c46011d0f056e
    {path: '/cart' ,
    component: cartstore}]

const route = createRouter({ 
    history: createWebHistory(),
    routes,
})


export default route