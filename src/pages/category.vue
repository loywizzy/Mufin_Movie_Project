<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import headermuf from '../views/headermuf.vue'
import Footer from '../components/footer.vue'
import test from '../components/test.vue'

const categories = [
  'action', 'adventure', 'animation', 'comedy', 'drama', 
  'documentary', 'fantasy', 'horror', 'romantic', 'sicfi', 'thriller'
];

const list = ref([{action:{name:'หำดหำด'},adventure:{name:'เพะเั่'},animation:{name:'เั่หำ'},comady:{name:'ๆไำ'},drama:{name:'teพำะเฟำพsfsfe'},documentary:{name:'tesfsfe'},fantasy:{name:'tesfsfe'},horror:{name:'tesfsfe'},romantic:{name:'tesfsfe'},sicfi:{name:'tesfsfe'},thriller:{name:'tesfsfe'}},
{}
])


const categoryState = Object.fromEntries(
    categories.map(category => [category, categories.includes(category)])
  );
const listcategory = ref([]);

const toggleCategory = (category) => {
  if (categoryState[category]) {
    listcategory.value = listcategory.value.filter(item => item !== category);
    console.log(categoryState)
  } else {
    listcategory.value.push(category);
    console.log(categoryState)
  }
};
</script>

<template>
  <RouterView></RouterView>

  <div class="header">
    <headermuf></headermuf>
  </div>
  <div class="col-12 text-center">
    <div class="main m-3 p-3 row gx-1 justify-content-center">
      <div class="checkboxes">
        <label
          v-for="category in categories"
          :key="category"
          class="btn btn-lg "
          :class="{
            'btn-light': categoryState[category],
            'btn-dark': !categoryState[category]
          }"
        >
          <input
            type="checkbox"
            :id="category"
            v-model="categoryState[category]"
            @change="toggleCategory(category)"
            class="visually-hidden"
          />
          {{ category }}
        </label>
      </div>
    </div>
    <div class="col text-center m-5 fs-4">
      <div v-for="category in listcategory" :key="category" style="display: inline;">
        {{ category }} /
      </div>
    </div>
    <div v-for="category in categories" :key="category">
  <div v-for="item in list" :key="item"> 
    <div v-if="item[category] ">
      {{ item[category] }}{{ item[category].name }}
      <div class="card h-100" style="max-width: 276px;">
        <div class="card-body">
          <div class="card-text">{{ item[category].name }}</div>
          <!-- Rest of your card content -->
        </div>
        <a href="#" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add to cart</a>
      </div>
    </div>
  </div>
  </div>
</div>
  <Footer></Footer>
  <test></test>
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
