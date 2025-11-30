<script lang="ts" setup>
import NewsItems from '@/views/pages/news/items/NewsItems.vue'
import NewsLayout from '@/views/pages/news/NewsLayout.vue'

definePage({
  meta: {
    navActiveLink: 'news-technology',
  },
})
</script>

<template>
  <NewsLayout>
    <NewsItems title="技术文章" />
  </NewsLayout>
</template>
