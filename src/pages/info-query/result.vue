<script setup lang="ts">
import axios from 'axios'
import TopImg from '@/views/pages/TopImg.vue'

// 定义证书数据类型
interface Certificate {
  id: string
  number: string
  company: string
  product: string
}

// 筛选框
const searchQuery = ref('')
const route = useRoute('info-query-result')

// 每页显示数量
const itemsPerPage = ref(10)

// 表头 - 删除操作列
const headers = [
  { title: '编号', key: 'number', sortable: false },
  { title: '公司名称', key: 'company', sortable: false },
  { title: '产品名称', key: 'product', sortable: false },
]

// 当前页
const page = ref(1)

// 证书列表
const certificateList = ref<Certificate[]>([])

// 过滤证书列表 筛选数据
const filterCertificates = computed(() => {
  return certificateList.value.filter(certificate =>
    certificate.number.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    || certificate.company.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    || certificate.product.toString().toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// 查询所有记录请求
try {
  const res = await axios.post('http://api.xxx.com/api/pdf', {
    search: route.query.id || '',
  })

  const result = res.data.data

  certificateList.value = result
}
catch (err) {
  // isFind.value = false
  console.log(`查询失败：${err}`)
}

// 返回记录总数
const totalItems = computed(() => filterCertificates.value.length)

const updateOptions = (option: any) => {
  page.value = option.page
}
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      title="证书查询"
      class="mb-6 w-100 pa-3"
    >
      <VCardText class="d-flex flex-wrap gap-4">
        <VSpacer />
        <div class="search-filter">
          <VTextField
            v-model.trim="searchQuery"
            placeholder="请输入编号、公司名称或型号"
            prepend-inner-icon="ri-search-line"
            density="compact"
            class="me-4"
          />
        </div>
        <VDataTableServer
          v-model:page="page"
          v-model:items-per-page="itemsPerPage"
          :items="filterCertificates"
          :items-length="totalItems"
          :headers="headers"
          item-value="id"
          class="text-no-wrap rounded-0"
          @update:options="updateOptions"
        >
          <template #item.number="{ item }">
            <RouterLink 
              :to="{ name: 'info-query-detail', query: { id: item.number } }"
              class="text-decoration-none"
            >
              {{ item.number }}
            </RouterLink>
          </template>
        </VDataTableServer>
      </VCardText>
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}

.search-filter {
  inline-size: 24.0625rem;
}
</style>
