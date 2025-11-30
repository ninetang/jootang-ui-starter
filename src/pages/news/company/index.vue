<script lang="ts" setup>
import NewsItems from '@/views/pages/news/items/NewsItems.vue'
import NewsLayout from '@/views/pages/news/NewsLayout.vue'

definePage({
  meta: {
    navActiveLink: 'news-company',
  },
})
</script>

<template>
  <NewsLayout>
    <NewsItems title="公司新闻" />
  </NewsLayout>
</template>
