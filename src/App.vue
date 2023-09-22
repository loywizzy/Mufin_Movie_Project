<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import headermuf from './views/headermuf.vue'
import cardmovie from './components/cardmovie.vue'
import Recommended from './components/recommend.vue'
</script>

<template>
  
  <div class="header">
    <headermuf></headermuf>
    <div class="main m-3 p-3 row ">
      <h1 class="col-2 text-center align-self-center fw-bolder ">NEW<br>MOVIES</h1>
        <cardmovie class="col-10"></cardmovie>
        <Recommended></Recommended>

    </div>
    <div class="footer"></div>

  </div>
</template>

<style scoped></style>
