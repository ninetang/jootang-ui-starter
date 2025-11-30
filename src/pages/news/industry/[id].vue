<script lang="ts" setup>
import ItemDetail from '@/views/pages/news/items/ItemDetail.vue'
import TopImg from '@/views/pages/TopImg.vue'
import LeftNav from '@/views/pages/news/LeftNav.vue'

const route = useRoute()
const newsId = computed(() => String(route.params.id || ''))

definePage({
  meta: {
    navActiveLink: 'news-industry',
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
      <ItemDetail :id="newsId" />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
