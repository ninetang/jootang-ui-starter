<script setup lang="ts">
const route = useRoute('info-query-result')

const certInfo = [
  { label: '编        号', value: route.query.id },
  { label: '公司名称', value: '深圳市贝岭能效技术有限公司' },
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
      <VRow class="ma-0">
        <VCol
          cols="6"
          class="text-right text-h5 font-weight-bold"
        >
          <div class="d-flex justify-end">
            <span class="label"> {{ item.label }}：</span>
          </div>
        </VCol>
        <VCol cols="6">
          <div class="d-flex justify-start">
            <span class="text-h5">
              {{ item.value }}
            </span>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
  <VRow class="d-flex justify-center pa-2">
    <VCol
      cols="12"
      md="2"
      sm="4"
      class="d-flex justify-center align-center ma-5"
    >
      <VBtn
        class="mb-5 w-100"
        size="large"
        @click="$router.back()"
      >
        返回
      </VBtn>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.label {
  display: flex;
  justify-content: space-between;
  white-space: pre;
}
</style>
