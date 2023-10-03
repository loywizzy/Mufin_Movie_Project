<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
const categories = [
  'action', 'adventure', 'animation', 'comedy', 'drama', 
  'documentary', 'fantasy', 'horror', 'romantic', 'sicfi', 'thriller'
];

const list = ref([{action:{name:'หำดหำด'},adventure:{name:'เพะเั่'},animation:{name:'เั่หำ'},comady:{name:'ๆไำ'},drama:{name:'teพำะเฟำพsfsfe'},documentary:{name:'tesfsfe'},fantasy:{name:'tesfsfe'},horror:{name:'tesfsfe'},romantic:{name:'tesfsfe'},sicfi:{name:'tesfsfe'},thriller:{name:'tesfsfe'}},
{}
])


const categoryState = Object.fromEntries(categories.map(cat => [cat, ref(false)]));
const listcategory = ref([]);

function toggleCategory(category) {
  categoryState[category].value = !categoryState[category].value;


  if (categoryState[category].value) {
    listcategory.value.push(category);
  } else {
    const indexToRemove = listcategory.value.indexOf(category);
    if (indexToRemove !== -1) {
      listcategory.value.splice(indexToRemove, 1);
    }
  }
}
</script>

<template>
  <RouterView></RouterView>

  <div class="header">
    <headermuf></headermuf>
  </div>
  <div class="main m-3 p-3 row gx-1 justify-content-center">
    <div class="col-12 text-center">
      <button
        v-for="category in categories"
        :key="category"
        :class="categoryState[category].value ? 'btn btn-lg dark rounded-pill' : 'btn btn-lg light rounded-pill'"
        @click="toggleCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    <div class="col text-center m-5 fs-4">
      <div v-for="i in listcategory" :key="i" style="display: inline;">
        {{ i }} /
      </div>
    </div>
    <div v-for="category in categories" :key="category">
  <div v-for="item in list" :key="item[category]">
    <div v-if="categoryState[category].value">
      <div class="card h-100" style="max-width: 276px;">

      <div class="card-body">
        <div class="card-text">{{ item[category].name }}</div>
        <h5 class="card-title">{{ item[category].name }}</h5>
        <p class="card-text overflow-auto mb-5">
          <i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
          Time :  <br>
          Director : </p>
      </div>
      <a href="#" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add to cart</a>
    </div>
  </div>
    </div>
  </div>

  </div> 
  <Footer></Footer>
</template>

<style scoped>
.light{
  color: black;
}
.dark{
  color: white;
  background-color: black;
}
</style>
