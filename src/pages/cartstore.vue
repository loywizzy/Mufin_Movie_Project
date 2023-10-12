<template>
  <div class="macbook-pro-16-2">
    <headermuf></headermuf>
    <div class="card-2-column1">
      <div class="frame-parent">
        <img class="frame-item" alt="" src="/frame-18.svg" />
        <b class="b1">เลือกทั้งหมด</b>
      </div>
    </div>
    <div class="card-2-column mb-3" v-for="item in data.getCartItems" :key="item.id">
      <div class="blocks">
        <div class="block">
          <div class="href">
            <img :src="item.img" class="fluid rounded" width="200" height="250" :alt="item.name" />
          </div>
        </div>
        <div class="text">
          <b class="add-product-name">{{ item.name }}</b>
          <div class="price-29-per-week-parent">
            <div class="category-action">Price : {{ item.price }} per week</div>
            <div class="category-action">Time : {{ item.time }}</div>
            <div class="category-action">Category : {{ item.type }}</div>
          </div>
          <div class="eye-catching-button">
            <div class="hovertrue">
              <div class="button2">
                <img class="vector-icon" alt="" src="/vector.svg" />
                <b class="b">{{ item.quantity }}</b>
                <img class="icon-plus" alt="" src="/-icon-plus.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-parent">
      <div class="frame-inner" />
      <div class="data-table-parent">
        <div class="data-table">
          <b class="total-price">Total price</b>
          <div class="data-table-row" v-for="item in data.getCartItems" :key="item.id">
            <div class="data-table-cell-content">
              <div class="text1"> {{ item.name }}</div>
            </div>
            <div class="data-table-cell-content1">
              <div class="text1">{{ item.price }}</div>
            </div>
          </div>
          <!-- <div class="data-table-row">
              <div class="data-table-cell-content4">
                <div class="text1">discount 10%</div>
              </div>
              <div class="data-table-cell-content5">
                <div class="text1">-$3.90</div>
              </div>
            </div> -->
          <div class="data-table-row4">
            <div class="data-table-cell-content4">
              <b class="text1">Order Total( {{ totalItems }} )</b>
            </div>
            <div class="data-table-cell-content5"> 
              <b class="text1">{{ data.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0) }}</b>
            </div>
          </div>
        </div>
        <div class="text-parent">
          <div class="text11">when you buy $ 10</div>
          <b class="text12">SAVE 10 %</b>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div v-for="product in data.products" :key="product.id">
        <div class="column-for-content-elements" v-if="product.id === 2">
          <img class="demo-image-movieposter3" alt="" :src=product.img />
          <div class="text15">{{ product.year }}</div>
          <b class="text16">{{ product.name }}</b>
          <div class="text17">
            <p class="p">
              <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
            </p>
            <p class="p">
              <span>TIME : {{ product.time }} </span>
            </p>
            <p class="p">
              <span>Director : {{ product.director }}</span>
            </p>
            <p class="p">
              <span>&nbsp;</span>
            </p>
            <p class="p">
              <a class="blank-line2" href="https://www.imdb.com/name/nm0004170/?ref_=tt_ov_wr" target="_blank">
                <span>
                  <span class="blank-line3">&nbsp;</span>
                </span>
              </a>
            </p>
            <p class="blank-line4">&nbsp;</p>
          </div>
          <div class="spacer" />
          <img class="star-icon" alt="" src="/star.svg" />
          <button @click="data.addToCart(product)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
            to cart</button>
        </div>
      </div>
    </div>
    <div v-for="product in data.products" :key="product.id">
      <div class="column-for-content-elements1" v-if="product.id === 31">
        <img class="demo-image-movieposter3" alt="" :src=product.img />
        <div class="text15">{{ product.year }}</div>
        <b class="text16">{{ product.name }}</b>
        <div class="text17">
          <p class="p">
            <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
          </p>
          <p class="p">
            <span>TIME : {{ product.time }}</span>
          </p>
          <p class="p">
            <span>Director : {{ product.director }}</span>
          </p>
          <p class="p">
            <span>&nbsp;</span>
          </p>
          <p class="p">
            <a class="blank-line2" href="https://www.imdb.com/name/nm0004170/?ref_=tt_ov_wr" target="_blank">
              <span>
                <span class="blank-line3">&nbsp;</span>
              </span>
            </a>
          </p>
          <p class="blank-line4">&nbsp;</p>
        </div>
        <div class="spacer" />
        <img class="star-icon" alt="" src="/star.svg" />
        <button @click="data.addToCart(product)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
          to cart</button>
      </div>
    </div>
    <div v-for="product in data.products" :key="product.id">
      <div class="column-for-content-elements2" v-if="product.id === 8">
        <img class="demo-image-movieposter3" alt="" :src="product.img" />
        <div class="text15">{{ product.year }}</div>
        <b class="text16">{{ product.name }}</b>
        <div class="text17">
          <p class="p">
            <span class="span">{{ product.imdb }} <i class="fa-solid fa-star" style="color: #F9EEB6;"></i></span>
          </p>
          <p class="p">
            <span>TIME : {{ product.time }}</span>
          </p>
          <p class="p">
            <span>Director : {{ product.director }}</span>
          </p>
          <p class="p">
            <span>&nbsp;</span>
          </p>
          <p class="p">
            <a class="blank-line2" href="https://www.imdb.com/name/nm0004170/?ref_=tt_ov_wr" target="_blank">
              <span>
                <span class="blank-line3">&nbsp;</span>
              </span>
            </a>
          </p>
          <p class="blank-line4">&nbsp;</p>
        </div>
        <div class="spacer" />
        <img class="star-icon" alt="" src="/star.svg" />
        <button @click="data.addToCart(product)" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add
          to cart</button>
      </div>
    </div>
    <div class="recommended-for-you">Recommended for you</div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import headermuf from '../views/headermuf.vue'

import { useShoppingStore } from "../store/movies"
const data = useShoppingStore();

/*     import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "MacBookPro162",
    }); */

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const totalItems = computed(() => {
  return data.getCartItems.reduce((total, item) => total + item.quantity, 0);
});

</script>
<style scoped></style>
  