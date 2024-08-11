<script setup lang="ts">
import CompanyNews from '@/views/pages/news/CompanyNews.vue'
import Industry from '@/views/pages/news/Industry.vue'
import Technical from '@/views/pages/news/Technical.vue'
</script>

<template>
  <!--  公司新闻 -->
  <CompanyNews />
  <!--  行业资讯 -->
  <Industry />
  <!--  技术文章 -->
  <Technical />
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
