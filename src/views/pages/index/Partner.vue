<script setup lang="ts">
import ul from '@images/partner/ul.webp'
import tuv from '@images/partner/tuv.webp'
import rheinland from '@images/partner/rheinland.webp'
import intertek from '@images/partner/intertek.webp'
import sr from '@images/partner/sr.webp'

const partners = [
  {
    img: ul,
    url: '#',
  },
  {
    img: tuv,
    url: '#',
  },
  {
    img: rheinland,
    url: '#',
  },
  {
    img: intertek,
    url: '#',
  },
  {
    img: sr,
    url: '#',
  },
]
</script>

<template>
  <VRow class="d-flex justify-center gap-8">
    <VCard
      v-for="(data, index) in partners"
      :key="index"
      hover
      variant="outlined"
      cursor="pointer"
    >
      <a
        :href="data.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VImg
          :src="data.img"
          width="200"
        />
      </a>
    </VCard>
  </VRow>
</template>
