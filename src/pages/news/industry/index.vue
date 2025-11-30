<script lang="ts" setup>
import NewsItems from '@/views/pages/news/items/NewsItems.vue'
import NewsLayout from '@/views/pages/news/NewsLayout.vue'

definePage({
  meta: {
    navActiveLink: 'news-industry',
  },
})
</script>

<template>
  <NewsLayout>
    <NewsItems title="行业资讯" />
  </NewsLayout>
</template>
