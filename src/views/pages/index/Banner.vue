<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

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
    :injectStyles="[
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
        swiper12,
        swiper13,
        swiper15,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
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
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
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
