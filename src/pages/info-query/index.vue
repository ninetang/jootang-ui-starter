<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import axios from 'axios'

// 类型定义
interface CertificateItem {
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
  data: CertificateItem[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const code = ref('')
const router = useRouter()
const isDialogVisible = ref(false)
const isUploadFile = ref(false)
const files = ref<File[]>([])

// 筛选框
const searchQuery = ref('')
const route = useRoute('info-query-result')

// 每页显示数量
const itemsPerPage = ref(10)

// 表头
const headers = [
  { title: '编号', key: 'documentNumber', sortable: false },
  { title: '公司名称', key: 'applicant', sortable: false },
  { title: '产品名称', key: 'product', sortable: false },
  { title: '操作', key: 'operation', sortable: false },
]

// 当前页
const page = ref(1)

// 证书列表
const certificateList = ref<CertificateItem[]>([])

// 过滤证书列表 筛选数据
const filterCertificates = computed(() => {
  return certificateList.value.filter(certificate =>
    certificate.documentNumber.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    || certificate.applicant.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    || certificate.product.toString().toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// 查询所有记录请求
async function getList(search: string) {
  try {
    // 构建查询参数
    const params = new URLSearchParams()
    if (search)
      params.append('filters[documentNumber][$contains]', search)

    const res = await axios.get<ApiResponse>(`//belling-cms.jootang.cn/api/pdf-documents?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = res.data.data

    certificateList.value = result
  }
  catch (err) {
    console.log(`查询失败：${err}`)
  }
}

// 返回记录总数
const totalItems = computed(() => filterCertificates.value.length)

const updateOptions = (option: any) => {
  page.value = option.page
}

function navigateTo() {
  if (code.value)
    getList(code.value)
  else
    isDialogVisible.value = true
}

async function uploadFiles() {
  const formData = new FormData()

  Array.from(files.value).forEach(file => {
    formData.append('pdf', file)
  })

  await axios.post('http://api.xxx.com/pdf/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(res => {
    console.log(res.data)
  }).catch(error => {
    console.error(`上传失败：${error}`)
  }).finally(() => {
    isUploadFile.value = false
  })
}

function handleUploadFile(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files)
    files.value = Array.from(target.files)
}
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      class="w-100 pa-3"
      title="证书查询"
    >
      <VRow class="d-flex justify-center">
        <VCol
          cols="12"
          md="4"
          sm="8"
          xs="10"
          class="d-flex flex-column align-center justify-space-around"
        >
          <div class="w-100">
            <VTextField
              v-model="code"
              label="证书编号"
              placeholder="输入完整编号"
              :rules="[requiredValidator]"
            />
          </div>
          <VDialog
            v-model="isDialogVisible"
            width="500"
          >
            <VCard title="查询失败">
              <DialogCloseBtn
                variant="text"
                size="defalut"
                @click="isDialogVisible = false"
              />
              <VCardText>
                证书号不能为空
              </VCardText>
              <VCardActions>
                <VSpacer />
                <VBtn @click="isDialogVisible = false">
                  确定
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
          <VBtn
            size="large"
            class="w-100 ma-5"
            @click="navigateTo"
          >
            查询
          </VBtn>

          <!--          <VBtn -->
          <!--            type="reset" -->
          <!--            color="secondary" -->
          <!--            variant="tonal" -->
          <!--            size="large" -->
          <!--            class="w-100" -->
          <!--            @click="code = ''" -->
          <!--          > -->
          <!--            重置 -->
          <!--          </VBtn> -->
          <!--          <VBtn -->
          <!--            color="primary" -->
          <!--            size="large" -->
          <!--            class="w-100 ma-5" -->
          <!--            @click="isUploadFile = true" -->
          <!--          > -->
          <!--            上传证书 -->
          <!--          </VBtn> -->
          <VDialog
            v-model="isUploadFile"
            width="500"
          >
            <VCard title="上传证书">
              <DialogCloseBtn
                variant="text"
                size="defalut"
                @click="isUploadFile = false"
              />
              <VCardActions class="ma-5">
                <VFileInput
                  label="请选择一个或多个PDF证书"
                  accept="application/pdf"
                  multiple
                  show-size
                  counter
                  chips
                  @change="handleUploadFile"
                />
              </VCardActions>
              <VCardActions>
                <VSpacer />
                <VBtn
                  color="primary"
                  @click="uploadFiles"
                >
                  确定
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
        </VCol>
      </VRow>
      <VCard
        v-if="certificateList.length"
        flat
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
            <template #item.operation="{ item }">
              <RouterLink :to="{ name: 'info-query-detail', query: { id: item.documentId } }">
                详情
              </RouterLink>
            </template>
          </VDataTableServer>
        </VCardText>
      </VCard>
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}

.search-filter {
  inline-size: 24.0625rem;
}
</style>
