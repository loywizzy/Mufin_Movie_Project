<script setup>
import { ref } from 'vue' 
const listrecomment1 = ref([
{name:"Spider-Man: Beyond the Spider-Verse",year:"2023",link :"https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",category:"action"},
{name:"Dungeons & Dragons: Honor Among Thieves",year:"2023",link :"https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg",category:"action"},
{name:"Blue's Big City Adventure",year:"2022",link :"https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1",category:"action"}])

const listrecomment2 = ref([
{name:"Spider-Man: Beyond the Spider-Verse",year:"2023",link :"https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",category:"action"},
{name:"Dungeons & Dragons: Honor Among Thieves",year:"2023",link :"https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg",category:"action"},
{name:"Blue's Big City Adventure",year:"2022",link :"https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1",category:"action"}])

const listrecomment3 = ref([
{name:"Spider-Man: Beyond the Spider-Verse",year:"2023",link :"https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",category:"action"},
{name:"Dungeons & Dragons: Honor Among Thieves",year:"2023",link :"https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg",category:"action"},
{name:"Blue's Big City Adventure",year:"2022",link :"https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1",category:"action"}])
</script>

<template>
    <div id="carouselId" class="carousel slide p-4" data-bs-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment1">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">CATEGORY : {{ i.category }}</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="...">
                </div>
            </div>   
        </div>
        </div>
            </div>
            <div class="carousel-item">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment2">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">CATEGORY : {{ i.category }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="..." >
                </div>
            </div>   
        </div>
        </div>
            </div>
            <div class="carousel-item">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment3">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">CATEGORY : {{ i.category }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="...">
                </div>
            </div>   
        </div>
        </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
.card{
    background-color: #F9EEB6;
}
</style>