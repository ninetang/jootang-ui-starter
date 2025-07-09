<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import SideBar from '@/views/pages/services/SideBar.vue'
import CertItem from '@/views/pages/services/certificate/AuthItem.vue'
import european from '@/mock/europe.json'

definePage({
  meta: {
    navActiveLink: 'services-certification-european-tab',
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
      <SideBar />
    </VCol>
    <VCol
      cols="12"
      md="9"
    >
      <CertItem :items="european" />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
