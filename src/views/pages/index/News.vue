<script setup lang="ts">
import CompanyNews from '@/views/pages/news/CompanyNews.vue'
import Industry from '@/views/pages/news/Industry.vue'
import Technical from '@/views/pages/news/Technical.vue'

const currenTab = ref(0)

const items = [
  { title: '公司新闻', value: 1, prependIcon: 'ri-newspaper-line' },
  { title: '行业资讯', value: 2, prependIcon: 'ri-file-info-line' },
  { title: '技术文章', value: 3, prependIcon: 'ri-article-line' },
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VTabs
        v-model="currenTab"
        align-tabs="center"
      >
        <VTab
          v-for="(item, index) in items"
          :key="index"
          :prepend-icon="item.prependIcon"
        >
          {{ item.title }}
        </VTab>
      </VTabs>
      <VWindow
        v-model="currenTab"
        class="newsItem"
      >
        <VWindowItem>
          <CompanyNews />
        </VWindowItem>
        <VWindowItem>
          <Industry />
        </VWindowItem>
        <VWindowItem>
          <Technical />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<style scoped>
.newsItem ::v-deep .outer-v-card{
    box-shadow: none;
}
</style>
