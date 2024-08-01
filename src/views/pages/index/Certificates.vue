<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import certificate1 from '@images/certificates/certificate1.webp'
import certificate2 from '@images/certificates/certificate2.webp'
import certificate3 from '@images/certificates/certificate3.webp'
import certificate4 from '@images/certificates/certificate4.webp'
import certificate5 from '@images/certificates/certificate5.webp'

register()
</script>

<template>
  <swiper-container
    pagination="true"
    autoplay-delay="5000"
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

