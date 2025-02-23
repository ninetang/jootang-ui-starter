<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import SideBar from '@/views/pages/services/SideBar.vue'
import CertItem from '@/views/pages/services/certificate/AuthItem.vue'
import other from '@/mock/other.json'

definePage({
  meta: {
    navActiveLink: 'services-certification-other-tab',
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
      <CertItem :items="other"/>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
