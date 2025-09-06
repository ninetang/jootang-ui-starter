<script setup lang="ts">
import Banner from '@/views/pages/index/Banner.vue'
import News from '@/views/pages/index/News.vue'
import Business from '@/views/pages/index/Business.vue'
import Introduction from '@/views/pages/index/Introduction.vue'
import Cert from '@/views/pages/index/Cert.vue'
import Partner from '@/views/pages/index/Partner.vue'
</script>

<template>
  <!--  顶部轮播图 -->
  <VRow>
    <VCol class="banner">
      <Banner />
    </VCol>
  </VRow>
  <!--  公司简介 -->
  <VRow>
    <VCard>
      <Introduction />
    </VCard>
  </VRow>
  <!--  资历授权 -->
  <VRow>
    <VCard class="w-100">
      <Cert />
    </VCard>
  </VRow>
  <!--  主营业务 -->
  <VRow>
    <VCard
      title="服务项目"
      class="w-100 text-center"
    >
      <Business />
    </VCard>
  </VRow>
  <!--  合作伙伴 -->
  <VRow>
    <VCard
      title="合作伙伴"
      class="w-100 text-center"
    >
      <Partner />
    </VCard>
  </VRow>
  <!--  新闻动态 -->
  <VRow>
    <VCard class="w-100">
      <VCardTitle class="text-center mt-3">
        新闻资讯
      </VCardTitle>
      <News />
    </VCard>
  </VRow>
  <!--  客户案例 -->
<!--  <VRow> -->
<!--    <VCard -->
<!--      title="客户案例" -->
<!--      class="w-100 text-center" -->
<!--    > -->
<!--      <Clients /> -->
<!--    </VCard> -->
<!--  </VRow> -->
</template>

<style lang="scss">
@use "@core/scss/template/libs/swiper.scss";

.v-row {
  margin-block: 1rem;

  .banner {
    padding: 0
  }
}

.certificate {
  width: 20rem;
}
</style>
