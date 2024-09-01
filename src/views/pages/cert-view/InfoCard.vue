<script setup lang="ts">

// 公司名称、产品名称、产品型号、认证时间
const certInfo = [
  { label: '编号', value: '组织效能产品部' },
  { label: '公司名称', value: '组织效能产品部' },
  { label: '产品名称', value: 'L2' },
  { label: '产品型号', value: '高级工程师' },
  { label: '认证时间', value: 'xxxxx' },
]
</script>

<template>
  <VRow>
    <VCol
      v-for="(item, idx) in certInfo"
      :key="idx"
      cols="12"
    >
      <VRow>
        <VCol
          cols="6"
          class="text-right font-weight-bold"
        >
          {{ item.label }}：
        </VCol>
        <VCol cols="6">
          {{ item.value }}
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">

</style>
