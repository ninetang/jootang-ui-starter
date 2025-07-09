<script setup lang="ts">
import axios from 'axios'

// 类型定义
interface CertificateData {
  id: number
  documentId: string
  documentNumber: string
  applicant: string
  applicantAddress: string
  product: string
  documentDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface ApiResponse {
  data: CertificateData
  meta: Record<string, any>
}

const route = useRoute('info-query-detail')
const isFind = ref(true)
const resData = ref<CertificateData | null>(null)

// 获取证书详情
async function fetchCertificateDetail() {
  try {
    const response = await axios.get<ApiResponse>(`//belling-cms.jootang.cn/api/pdf-documents/${route.query.id}`)

    resData.value = response.data.data
    isFind.value = true
  }
  catch (err) {
    console.log(`查询失败：${err}`)
    isFind.value = false
  }
}

// 在组件挂载时获取数据
onMounted(() => {
  fetchCertificateDetail()
})

// 证书信息配置 - 使用 computed 确保响应式更新
const certInfo = computed(() => {
  if (!resData.value)
    return []

  return [
    { label: 'Certificate No.', value: resData.value.documentNumber },
    { label: 'Applicant', value: resData.value.applicant },
    { label: 'Product', value: resData.value.product },
    { label: 'Model Number', value: resData.value.applicantAddress },
    { label: 'Address', value: resData.value.applicantAddress },
    { label: 'Date', value: resData.value.documentDate },
  ]
})
</script>

<template>
  <VRow v-if="isFind && resData">
    <VCol
      v-for="(item, idx) in certInfo"
      :key="idx"
      cols="12"
    >
      <VRow class="ma-0">
        <VCol
          cols="5"
          class="text-right text-h5 font-weight-bold"
        >
          <div class="d-flex justify-end">
            <span class="label"> {{ item.label }}：</span>
          </div>
        </VCol>
        <VCol cols="7">
          <div class="d-flex justify-start">
            <span class="text-h5">
              {{ item.value }}
            </span>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
  <VRow
    v-if="!isFind"
    class="d-flex justify-center pa-2"
  >
    <VCol
      cols="12"
      md="4"
      class="ma-5 text-h3"
    >
      查询失败，未找到相关证书！
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
