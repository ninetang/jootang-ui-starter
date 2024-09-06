<script setup lang="ts">
const props = defineProps<{ title: string }>()

const route = useRoute('services-tab')
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-5">
      <VCardTitle class="text-center">
        {{ props.title }}
      </VCardTitle>
      <VDivider />
      <VCardText>
        content
      </VCardText>
      <VDivider />
      <VCardActions class="d-flex justify-space-between w-100 mt-3 mb-3">
        <VBtn prepend-icon="ri-arrow-left-line">
          上一篇
        </VBtn>
        <VBtn>返回</VBtn>
        <VBtn append-icon="ri-arrow-right-line">
          下一篇
        </VBtn>
      </VCardActions>
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">

</style>
