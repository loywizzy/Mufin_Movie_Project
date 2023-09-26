<script setup>
import { ref } from 'vue' 



const showPopup = ref(true);
const listrecomment1 = ref([
{name:"Spider-Man: Beyond the Spider-Verse",year:"2023",link :"https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",score:"8.7",time:"2h 20m",director:"Joaquim Dos /SantosKemp PowersJustin/ K. Thompson"},
{name:"Dungeons & Dragons: Honor Among Thieves",year:"2023",link :"https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg",score:"7.3",time:"2h 14m",director:"John Francis Daley / Jonathan Goldstein"},
{name:"Blue's Big City Adventure",year:"2022",link :"https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1",score:"6.3",time:"1h 22m",director:"Matt Stawski"},
{name:"Stasikomödie",year:"2022",link :"https://de.web.img3.acsta.net/pictures/22/04/01/12/08/1373125.jpg",score:"5.6",time:"1h 56m",director:"Leander Haußmann"}])
 
// ข้อมูลตรง view all
const listrecomment2 = ref([
{name:"An Action Hero",year:"2022",link :"https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/action-hero/action-hero-poster-6.jpg",score:"7.0",time:"2h 10m",director:"Anirudh Iyer"},
{name:"X",year:"2022",link :"https://ae01.alicdn.com/kf/Se0320176c21e460d9c7fa5e8854e79d7U/Hot-Rare-Movie-X-2022-Art-SILK-POSTER-Wall-Art-Home-Decorative-painting.jpg",score:"6.6",time:"1h 45m",director:"Ti West"},
{name:"WandaVision",year:"2021",link :"https://sportshub.cbsistatic.com/i/2022/02/01/901bdd4c-62bb-4566-81fd-6861fed12f91/wandavision-shattered-reality-poster.jpg?auto=webp&width=854&height=1139&crop=0.75:1,smart",score:"7.9",time:"5h 50m",director:"Jac Schaeffer"},
{name:"Dune",year:"2021",link :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7pnjQLgaFURCU1CTbumIhmXx5KB-2VWwi3cDG8xfydWthwSFrPR19bXbkkJBBiaBbuw&usqp=CAU",score:"8.0",time:"2h 35m",director:"Denis Villeneuve"},
{name:"Sing 2",year:"2021",link :"https://www.themoviedb.org/t/p/original/9x4qpmPStbs27G95PMdkOSQ1JTY.jpg",score:"7.4",time:"1h 50m",director:"Garth Jennings / Christophe Lourdelet"},
{name:"Oscar Nominated Short Films",year:"2020",link :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoBaMJNXTlKRknYhJgCfG5jLkkYycXJ5hwSlnk9JT5ybWye7MlpweFVcgN1aClK_g_Pw&usqp=CAU",score:"7.9",time:"2h 40m",director:"Canada / United States"},
{name:"Comedy Couple",year:"2020",link :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R0Z_fhd5zxr5A9Y9xeMIr9c1KEwK-VdAsYKrhd5dDKOLPra-U-9W17HwWBw0iMGyw0o&usqp=CAU",score:"7.4",time:"1h 57m",director:"Nachiket Samant"},
{name:"Last Night in Soho",year:"2021",link :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnumjsxll__KWi5UkousLJ1bsvwh9b74v9bWiMYVHKHlzc3urQ88pJevQuz--CpCBCk4&usqp=CAU",score:"7",time:"1h 56m",director:"Edgar Wright"}])
</script>


<template>
  <div class="container-fluid">
  <div class="h1 text-center m-3 ">Recommended Movies</div>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
  <div class="col-3" v-for="(i,index) in listrecomment1" :key="index">
    <div class="card h-100" style="max-width: 276px;">
      <img :src="i.link" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
      <div class="card-body">
        <div class="card-text">{{ i.year }}</div>
        <h5 class="card-title">{{ i.name }}</h5>
        <p class="card-text overflow-auto mb-5">
          {{ i.score }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
          Time : {{ i.time }} <br>
          Director : {{ i.director }}</p>
      </div>
      <a href="#" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add to cart</a>
    </div>
  </div>
</div>
<!-- ปุ่ม view all -->
<p class="text-center p-3" v-if="showPopup">
  <button class="btn btn-dark rounded-pill" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseExample" @click="showPopup = false">
    View All
  </button>
</p>
<div class="collapse" id="collapse1">
    <div class="row row-cols-1 row-cols-md-4 g-4 m-3">
    <div class="col mb-3" v-for="(i,index) in listrecomment2" :key="index">
      <div class="card h-100" style="max-width: 276px;">
        <img :src="i.link" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
        <div class="card-body">
          <div class="card-text">{{ i.year }}</div>
          <h5 class="card-title">{{ i.name }}</h5>
          <p class="card-text overflow-auto mb-5">
         {{ i.score }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
          Time : {{ i.time }} <br>
          Director : {{ i.director }}
          </p>
        </div>
        <a href="#" class="btn btn-dark position-absolute bottom-0 m-3 rounded-pill">Add to cart</a>
      </div>
    </div>
  </div>
</div>
</div>
 





</template>

<style scoped>
.card{
  background-color:#B6DEF9;
}
</style>

