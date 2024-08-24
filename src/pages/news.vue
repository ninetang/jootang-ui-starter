<script setup lang="ts">
import CompanyNews from '@/views/pages/news/CompanyNews.vue'
import Industry from '@/views/pages/news/Industry.vue'
import Technical from '@/views/pages/news/Technical.vue'
import LeftNav from '@/views/pages/news/LeftNav.vue'
import NavImg from '@images//logo/nav.jpg'

</script>

<template>
  <VRow>
    <VImg
      :src="NavImg"
      cover
    />
  </VRow>
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
      <!--  公司新闻 -->
      <CompanyNews />
      <!--  行业资讯 -->
      <Industry />
      <!--  技术文章 -->
      <Technical />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
