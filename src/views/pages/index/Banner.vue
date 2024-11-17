<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.webp'
import swiper2 from '@images/banner/banner-2.webp'
import swiper3 from '@images/banner/banner-3.webp'
import swiper4 from '@images/banner/banner-4.webp'
import swiper5 from '@images/banner/banner-5.webp'
import swiper6 from '@images/banner/banner-6.webp'
import swiper7 from '@images/banner/banner-7.webp'
import swiper8 from '@images/banner/banner-8.webp'
import swiper9 from '@images/banner/banner-9.webp'
import swiper10 from '@images/banner/banner-10.webp'

register()
</script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    effect="flip"
    loop="true"
    pagination="true"
    navigation="true"
    autoplay-delay="3000"
    centered-slides="true"
    space-between="5"
    events-prefix="swiper-"
    :inject-styles="[
      `
        .swiper-button-next, .swiper-button-prev{
          background: transparent !important;
          color: rgb(var(--v-theme-primary)) !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 3.5rem !important;
          block-size: 3.5rem !important;
          border-radius: 50%
        }
        `,
    ]"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper3,
        swiper4,
        swiper5,
        swiper6,
        swiper7,
        swiper8,
        swiper9,
        swiper10,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        rel="preload"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"

    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper3,
        swiper4,
        swiper5,
        swiper6,
        swiper7,
        swiper8,
        swiper9,
        swiper10,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        rel="preload"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #FFF;
}
.mySwiper2 {
  swiper-slide {
    border: 1px solid white;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.8;
    background-color: transparent;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
