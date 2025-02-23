<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import SideBar from '@/views/pages/services/SideBar.vue'
import CertItem from '@/views/pages/services/certificate/AuthItem.vue'
import china from '@/mock/china.json'

definePage({
  meta: {
    navActiveLink: 'services-certification-china-tab',
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
      <CertItem :items="china"/>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
