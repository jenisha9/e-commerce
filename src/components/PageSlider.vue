<template>
    <Carousel>
      <Slide v-for="(image, index) in img" :key="index">
        <div class="carousel__item">
          <img :src="image" alt="" />
        </div>
        <div class="carousel__text">
          <div class="container w-full h-full mx-auto">
            <div class="flex flex-col w-1/2">
              <h1 class="text-7xl font-bold text-black mb-6 pt-24 mt-12">
                Every dog has its every day
              </h1>
              <p class="text-lg text-black mb-4">
                We've all heard people who say that pets are animals,as though
                somehow they're in our lives people have likely never owen a loyan
                dog !
              </p>
              <p class="text-xl my-5 font-bold">
                Starting rate: <span class="text-custom-orange">$70.00</span>
              </p>
              <button
                class="bg-custom-orange hover:bg-blue-700 text-white font-bold py-2 px-4 w-48 h-16 rounded-lg transition-colors"
              >
                SHOP ONLINE
              </button>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  
    <div class="container w-full h-full mx-auto">
      <PageFooter />
    </div>
  </template>
  
  <script setup>
  import { Carousel, Navigation, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import bg1 from "../assets/images/bg1.jpg";
  import bg2 from "../assets/images/bg2.jpg";

  const img = [bg1, bg2];
  </script>
  
  <style>
  .carousel__item {
    width: 100%;
    /* height: 90vh; */
    background-color: pink;
    color: var(--vc-clr-white);
    font-size: 20px;
    /* border-radius: 8px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__text {
    position: absolute;
    top: 35%;
    left: 40%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: black;
    z-index: 1;
  }
  .carousel__slide {
    /* padding: 10px; */
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>