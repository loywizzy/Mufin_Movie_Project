<script setup>
</script>
<template>
<nav class="navbar navbar-expand-lg bgheader">
  <div class="container-fluid">
 <div class="navbar-brand fw-bolder fs-3 m-3"><router-link to="/" class="nav-link">MUVFIN</router-link></div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item m-3">
          <router-link class="nav-link" to="/">HOME</router-link>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">POPULLAR MOVIE</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">CATEGORY</a>
        </li>
      </ul>
    </div>
    <div class="m-3">        
        <button type="button" class="btn btn-light m-2 rounded-pill"><RouterLink class="nav-link" to="signup">Sign up</RouterLink></button>
        <button type="button" class="btn btn-light m-2 rounded-pill"><RouterLink class="nav-link" to="login"> Sign In</RouterLink></button>
        <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
  </div>
</nav>
</template>

<style scoped>

.bgheader {
    background-color: #A8D1E7;
    color: black;
}
.btn-light{
    border-color: #374785;
    color: #374785;
}
</style>