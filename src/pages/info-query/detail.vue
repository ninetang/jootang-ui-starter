<script setup lang="ts">
import TopImg from '@/views/pages/TopImg.vue'
import InfoCard from '@/views/pages/cert-view/InfoCard.vue'
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

<style scoped>
.v-row {
  margin-block: 1rem;
}
</style>
