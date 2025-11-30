<script lang="ts" setup>
import ItemDetail from '@/views/pages/news/items/ItemDetail.vue'
import NewsLayout from '@/views/pages/news/NewsLayout.vue'

const route = useRoute()
const params = route.params as { id?: string }
const newsId = computed(() => String(params?.id || ''))

definePage({
  meta: {
    navActiveLink: 'news-technology',
  },
})
</script>

<template>
  <NewsLayout>
    <ItemDetail :id="newsId" />
  </NewsLayout>
</template>
