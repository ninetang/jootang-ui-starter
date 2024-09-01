<script setup lang="ts">
import InfoCard from '@/views/pages/cert-view/InfoCard.vue'
import TopImg from '@/views/pages/TopImg.vue'
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      class="w-100"
      title="查询结果"
    >
      <InfoCard />
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
