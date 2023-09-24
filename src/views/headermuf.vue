<script setup>
</script>
<template>
<nav class="navbar navbar-expand-lg bgheader">
  <div class="container-fluid">
 <div class="navbar-brand fw-bolder fs-3 m-3">MUFIN</div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item m-3">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
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
        <button type="button" class="btn btn-light m-2 rounded-pill">Sign up</button>
        <button type="button" class="btn btn-light m-2 rounded-pill">Sign in <i class="fa-solid fa-arrow-right text-center" style="color: #374785;"></i> </button>
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