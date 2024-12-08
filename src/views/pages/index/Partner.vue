<script setup lang="ts">
import ul from '@images/partner/ul.webp'
import tuv from '@images/partner/tuv.webp'
import rheinland from '@images/partner/rheinland.webp'
import intertek from '@images/partner/intertek.webp'
import sr from '@images/partner/sr.webp'

const partners = [
  {
    img: ul,
    url: 'https://www.ul.com/',
  },
  {
    img: tuv,
    url: 'https://www.tuvsud.cn/',
  },
  {
    img: rheinland,
    url: 'https://www.tuv.com/',
  },
  {
    img: intertek,
    url: 'https://www.intertek.com.cn/',
  },
  {
    img: sr,
    url: '#',
  },
]
</script>

<template>
  <VRow class="d-flex justify-center gap-16">
    <VCard
      v-for="(data, index) in partners"
      :key="index"
      hover
      variant="outlined"
      cursor="pointer"
      class="feature-card"
    >
      <a
        :href="data.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VImg
          :src="data.img"
          width="200"
          height=""
        />
      </a>
    </VCard>
  </VRow>
</template>
<style lang="scss" scoped>
.feature-card {
  margin-block-end: 4.25rem;
}
</style>
