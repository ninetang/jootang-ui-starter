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
  <VCol
    cols="12"
    md="3"
  >
    <VTabs
      v-model="currenTab"
      direction="vertical"
    >
      <VTab
        v-for="(item, index) in items"
        :key="index"
        :prepend-icon="item.prependIcon"
      >
        {{ item.title }}
      </VTab>
    </VTabs>
  </VCol>
  <VCol
    cols="12"
    md="9"
  >
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

<!--  <VCol -->
<!--    cols="12" -->
<!--    md="8" -->
<!--  > -->
<!--    <VCard> -->
<!--      <VImg -->
<!--        :height="300" -->
<!--        :src="pages5" -->
<!--        cover -->
<!--      /> -->

<!--      <VCardItem> -->
<!--        <VCardTitle>Influencing The Influencer</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText> -->
<!--        Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism -->
<!--        minister -->
<!--        predicts Cancun will draw as many visitors in 2006 as it did two years ago. -->
<!--      </VCardText> -->
<!--    </VCard> -->
<!--  </VCol> -->
<!--  <VCol -->
<!--    cols="12" -->
<!--    md="4" -->
<!--  > -->
<!--    <VCard class="h-100"> -->
<!--      <VImg -->
<!--        :height="200" -->
<!--        :src="pages5" -->
<!--        cover -->
<!--      /> -->

<!--      <VCardItem> -->
<!--        <VCardTitle>Influencing The Influencer</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText> -->
<!--        Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism -->
<!--        minister -->
<!--        predicts Cancun will draw as many visitors in 2006 as it did two years ago. -->
<!--      </VCardText> -->
<!--    </VCard> -->
<!--  </VCol> -->
<!--  <VCol -->
<!--    cols="12" -->
<!--    md="4" -->
<!--  > -->
<!--    <VCard class="h-100"> -->
<!--      <VImg -->
<!--        :height="300" -->
<!--        :src="pages5" -->
<!--        cover -->
<!--      /> -->

<!--      <VCardItem> -->
<!--        <VCardTitle>Influencing The Influencer</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText> -->
<!--        Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism -->
<!--        minister -->
<!--        predicts Cancun will draw as many visitors in 2006 as it did two years ago. -->
<!--      </VCardText> -->
<!--    </VCard> -->
<!--  </VCol> -->
<!--  <VCol -->
<!--    cols="12" -->
<!--    md="4" -->
<!--  > -->
<!--    <VCard class="h-100"> -->
<!--      <VImg -->
<!--        :height="300" -->
<!--        :src="pages5" -->
<!--        cover -->
<!--      /> -->

<!--      <VCardItem> -->
<!--        <VCardTitle>Influencing The Influencer</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText> -->
<!--        Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism -->
<!--        minister -->
<!--        predicts Cancun will draw as many visitors in 2006 as it did two years ago. -->
<!--      </VCardText> -->
<!--    </VCard> -->
<!--  </VCol> -->
<!--  <VCol -->
<!--    cols="12" -->
<!--    md="4" -->
<!--  > -->
<!--    <VCard class="h-100"> -->
<!--      <VImg -->
<!--        :height="300" -->
<!--        :src="pages5" -->
<!--        cover -->
<!--      /> -->

<!--      <VCardItem> -->
<!--        <VCardTitle>Influencing The Influencer</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText> -->
<!--        Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism -->
<!--        minister -->
<!--        predicts Cancun will draw as many visitors in 2006 as it did two years ago. -->
<!--      </VCardText> -->
<!--    </VCard> -->
<!--  </VCol> -->
</template>

<style scoped>
.newsItem ::v-deep .outer-v-card{
    box-shadow: none;
}
</style>
