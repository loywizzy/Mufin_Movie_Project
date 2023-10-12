import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//ตอนใช้ให้ใส่ในscript
//import { user } from '../store/user'
//const user = user()
export const user = defineStore('user', () => {
  const count = ref("0")
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


//ตอนใช้ให้ใส่ในscript
//import { userlogin } from '../store/user'
//const login = userlogin()
export const userlogin = defineStore('userlogin', () => {
  const login = ref(false)
  function logined() {
    login.value = login.value === false ? true : false;
  }

  return { login, logined }
})

// export const list_category = defineStore('userlolist_category', () => {


//   return { ,  }
// })