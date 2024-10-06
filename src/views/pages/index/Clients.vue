<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import client1 from '@images/clients/unilumin.webp'
import client2 from '@images/clients/bravoled.webp'
import client3 from '@images/clients/fsl.webp'
import client4 from '@images/clients/hans.webp'
import client5 from '@images/clients/ocean.webp'
import client6 from '@images/clients/longhorn.webp'
import client7 from '@images/clients/signcomplex.webp'
import client8 from '@images/clients/ruifeng.webp'
import client9 from '@images/clients/yuda.webp'

register()
</script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    autoplay-delay="3000"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        client1,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7,
        client8,
        client9,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
