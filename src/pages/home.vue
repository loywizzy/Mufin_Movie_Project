<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from '../views/headermuf.vue'
import cardmovie from '../components/cardmovie.vue'
import Recommended from '../components/recommend.vue'
import Footer from '../components/footer.vue'


</script>

<template>
  <RouterView></RouterView>

  <div class="header">
    <headermuf></headermuf>
  </div>
  <div class="main m-3 p-3 row ">
      <h1 class="col-2 text-center align-self-center fw-bolder ">NEW<br>MOVIES</h1>
        <cardmovie class="col-10"></cardmovie>
        <Recommended></Recommended>
        
  </div> 
<Footer></Footer>
</template>

<style scoped>

</style>
