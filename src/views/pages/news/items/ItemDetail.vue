<script lang="ts">

</script>

<template>
  <VRow>
    <VCard class="w-100 pa-5">
      <VCardTitle class="text-center">
        Title
      </VCardTitle>
      <div class="d-flex justify-center mb-2">
        <VCardSubtitle>
          发布日期 2024-08-11
        </VCardSubtitle>
        <VCardSubtitle>
          阅读量：2323
        </VCardSubtitle>
        <VCardSubtitle>
          作者：张三
        </VCardSubtitle>
      </div>
      <VDivider/>
      <VCardText>
        content
      </VCardText>
      <VDivider/>
      <div class="d-flex justify-space-between w-100 mt-3 mb-3">
        <VBtn prepend-icon="ri-arrow-left-line">上一篇</VBtn>
        <VBtn>返回</VBtn>
        <VBtn append-icon="ri-arrow-right-line">下一篇</VBtn>
      </div>
    </VCard>
  </VRow>
</template>

<style scoped>

</style>
