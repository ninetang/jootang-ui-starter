<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import certificate1 from '@images/pages/5.jpg'
import certificate2 from '@images/pages/5.jpg'
import certificate3 from '@images/pages/5.jpg'
import certificate4 from '@images/pages/5.jpg'
import certificate5 from '@images/pages/5.jpg'

register()
</script>

<template>
  <swiper-container
    pagination="true"
    autoplay-delay="3000"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          certificate1,
          certificate2,
          certificate3,
          certificate4,
          certificate5,
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
