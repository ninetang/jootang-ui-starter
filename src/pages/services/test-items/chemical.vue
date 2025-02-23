<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import SideBar from '@/views/pages/services/SideBar.vue'
import TestItem from '@/views/pages/services/test/TestItem.vue'

definePage({
  meta: {
    navActiveLink: 'services-test-items-safety',
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
      <TestItem />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
