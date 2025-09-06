<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import logo1 from '@images/certificates/certificate1.webp'
import logo2 from '@images/certificates/certificate2.webp'
import logo3 from '@images/certificates/certificate3.webp'
import logo4 from '@images/certificates/certificate4.webp'
import logo5 from '@images/certificates/certificate5.webp'

register()

const reviewData = [
  {
    img: logo1,
  },
  {
    img: logo2,
  },
  {
    img: logo3,
  },
  {
    img: logo4,
  },
  {
    img: logo5,
  },
  {
    img: logo1,
  },
  {
    img: logo2,
  },
  {
    img: logo3,
  },
  {
    img: logo4,
  },
  {
    img: logo5,
  },
]
</script>

<template>
  <VRow>
    <VCard class="pa-2">
      <div class="customer-reviews">
        <!-- 👉 Headers  -->
        <h2 class="text-center">
          资质认证
        </h2>

        <div class="swiper-reviews-carousel py-4">
          <!-- eslint-disable vue/attribute-hyphenation -->
          <swiper-container
            slides-per-view="1"
            space-between="5"
            centered-slides="true"
            loop="true"
            autoplay-delay="3000"
            autoplay-disable-on-interaction="false"
            events-prefix="swiper-"
            :pagination="{
              clickable: 'true',
            }"
            :injectStyles="[
              `
          .swiper-pagination{
            position: static;
            margin-block: 1rem;
          },
          .swiper-pagination-bullet-active{
            width: 1rem;
          }

      `]"
            :breakpoints="{
              1400: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }"
          >
            <swiper-slide
              v-for="(data, index) in reviewData"
              :key="index"
            >
              <VCard class="h-100 d-flex align-stretch">
                <VCardText class="pa-sm-6 pa-md-8 d-flex flex-column justify-space-between align-center">
                  <img
                    :src="data.img"
                    style="block-size: 18rem;"
                  >

                  <div class="text-center">
                    <div class="text-body-1 text-high-emphasis font-weight-medium">
                      实验室认可证书
                    </div>
                  </div>
                </VCardText>
              </VCard>
            </swiper-slide>
          </swiper-container>
        </div>

        <!-- 👉 Brand-logo Swiper  -->
        <div class="swiper-brands-carousel mt-4">
          <swiper-container
            slides-per-view="1"
            loop="true"
            events-prefix="swiper-"
            :breakpoints="{
              992: {
                slidesPerView: 5,
              },
              768: {
                centeredSlides: true,
                slidesPerView: 3,
              },
              580: {
                centeredSlides: true,
                slidesPerView: 2,
              },
            }"
          />
        </div>
      </div>
    </VCard>
  </VRow>
</template>

<style lang="scss">
swiper-container::part(bullet-active) {
  border-radius: 6px;
  background-color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  inline-size: 38px;
}

swiper-container::part(bullet) {
  background-color: rgba(var(--v-theme-on-background));
}

swiper-container::part(pagination) {
  margin-block: 1.5rem;
}

.swiper-reviews-carousel {
  swiper-container {
    --swiper-pagination-bullet-width: 10px;
    --swiper-pagination-bullet-height: 10px;
    --swiper-pagination-bullet-horizontal-gap: 6px;

    .swiper {
      padding-block-end: 3rem;
    }
  }

  swiper-slide {
    block-size: auto;
    opacity: 0.5;
    padding-block: 1rem;
    padding-block-end: 1rem;
    transition: all 0.35s ease;

    &.swiper-slide-active {
      opacity: 1;
      padding-block: 0;
    }
  }

  .swiper-pagination {
    inset-block: 0 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.customer-reviews {
  margin-block: 3.25rem;
}
</style>
