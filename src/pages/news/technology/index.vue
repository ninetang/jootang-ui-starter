<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import LeftNav from '@/views/pages/news/LeftNav.vue'
import NewsItems from '@/views/pages/news/items/NewsItems.vue'

definePage({
  meta: {
    navActiveLink: 'news-technology',
  },
})
</script>

<template>
  <TopImg />
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <LeftNav />
    </VCol>
    <VCol
      cols="12"
      md="9"
    >
      <NewsItems title="技术文章" />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
