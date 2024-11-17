<script setup lang="ts">
import Banner from '@/views/pages/index/Banner.vue'
import Clients from '@/views/pages/index/Clients.vue'
import News from '@/views/pages/index/News.vue'
import Business from '@/views/pages/index/Business.vue'
import Introduction from '@/views/pages/index/Introduction.vue'
import Cert from '@/views/pages/index/Cert.vue'
</script>

<template>
  <VRow>
    <VCol class="banner">
      <Banner />
    </VCol>
  </VRow>

  <VRow>
    <VCard>
      <Introduction />
    </VCard>
  </VRow>
  <VRow>
    <VCard>
      <Cert />
    </VCard>
  </VRow>
  <VRow>
    <VCard
      title="主营业务"
      class="w-100 text-center"
    >
      <Business />
    </VCard>
  </VRow>
  <VRow>
    <VCard
      title="新闻动态"
      class="w-100"
    >
      <VRow class="ma-auto">
        <News />
      </VRow>
    </VCard>
  </VRow>
  <VRow>
    <VCard title="客户案例">
      <Clients />
    </VCard>
  </VRow>
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
