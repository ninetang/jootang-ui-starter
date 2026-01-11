<script setup lang="ts">
import axios from 'axios'
import pages5 from '@images/pages/5.jpg'

// 类型定义
interface CoverImage {
  id: number
  documentId: string
  url: string
  alternativeText: string | null
  formats?: {
    thumbnail?: { url: string }
    small?: { url: string }
  }
}

interface Article {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover?: CoverImage | null
}

interface ApiResponse {
  data: Article[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const props = defineProps<{ title: string }>()
const router = useRouter()

// 根据标题确定新闻类型和路由名称
const getNewsRouteName = (): 'news-company-id' | 'news-industry-id' | 'news-technology-id' => {
  const titleMap: Record<string, 'news-company-id' | 'news-industry-id' | 'news-technology-id'> = {
    公司新闻: 'news-company-id',
    行业资讯: 'news-industry-id',
    技术文章: 'news-technology-id',
  }

  return titleMap[props.title] || 'news-company-id'
}

// 根据标题获取对应的 slug
const getSlugByTitle = (): string => {
  const slugMap: Record<string, string> = {
    公司新闻: 'company',
    行业资讯: 'industry',
    技术文章: 'technology',
  }

  return slugMap[props.title] || 'company'
}

const goToDetail = (documentId: string) => {
  const routeName = getNewsRouteName()

  router.push({ name: routeName, params: { id: documentId } })
}

// 文章列表
const articles = ref<Article[]>([])
const currentPage = ref(1)
const pageSize = ref(9)
const totalPages = ref(1)
const loading = ref(false)

// 获取文章列表
async function fetchArticles() {
  loading.value = true
  try {
    const slug = getSlugByTitle()
    const params = new URLSearchParams()

    params.append('filters[slug][$eq]', slug)
    params.append('pagination[page]', String(currentPage.value))
    params.append('pagination[pageSize]', String(pageSize.value))
    params.append('sort[0]', 'publishedAt:desc')

    // 添加 populate 获取关联字段（如封面图、作者等）
    params.append('populate', '*')

    const res = await axios.get<ApiResponse>(`//belling-cms.jootang.cn/api/articles?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    articles.value = res.data.data
    totalPages.value = res.data.meta.pagination.pageCount
  }
  catch (err) {
    console.error(`获取文章列表失败：${err}`)
    articles.value = []
  }
  finally {
    loading.value = false
  }
}

// 格式化日期
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN')
}

// 获取封面图 URL
const getCoverUrl = (cover?: CoverImage | null): string => {
  if (!cover)
    return pages5 // 使用默认图片

  const baseUrl = 'http://belling-cms.jootang.cn'

  // 优先使用 small 格式，如果没有则使用原图
  const url = cover.formats?.small?.url || cover.url

  return url.startsWith('http') ? url : `${baseUrl}${url}`
}

// 监听页码变化
watch(currentPage, () => {
  fetchArticles()
})

// 组件挂载时获取数据
onMounted(() => {
  fetchArticles()
})

const toggle = ref(true)
function changeGrid() {
  toggle.value = true
}
function changeList() {
  toggle.value = false
}
</script>

<template>
  <VRow class="mt-4">
    <VCard class="w-100 pa-3">
      <VCol class="d-flex justify-space-between align-center title">
        <h2>{{ props.title }}</h2>
        <div>
          <VIcon
            color="primary"
            size="large"
            class="icon-grid"
            icon="ri-layout-grid-2-fill"
            @click="changeGrid"
          />
          <VIcon
            color="primary"
            size="large"
            icon="ri-list-unordered"
            @click="changeList"
          />
        </div>
      </VCol>

      <div
        v-if="loading"
        class="d-flex justify-center align-center pa-10"
      >
        <VProgressCircular
          indeterminate
          color="primary"
        />
      </div>

      <div
        v-else-if="articles.length === 0"
        class="d-flex justify-center align-center pa-10"
      >
        <VCardText>暂无数据</VCardText>
      </div>

      <div
        v-else
        class="d-flex mb-5 flex-wrap"
      >
        <template v-if="toggle">
          <VCol
            v-for="item in articles"
            :key="item.documentId"
            cols="12"
            md="4"
          >
            <VCard
              class="h-100 cursor-pointer"
              @click="goToDetail(item.documentId)"
            >
              <VImg
                :height="200"
                :src="getCoverUrl(item.cover)"
                :alt="item.cover?.alternativeText || item.title"
                cover
              />

              <VCardItem>
                <VCardTitle>{{ item.title }}</VCardTitle>
              </VCardItem>

              <VCardText>
                {{ item.description }}
              </VCardText>
              <VCardText>
                {{ formatDate(item.publishedAt) }}
              </VCardText>
            </VCard>
          </VCol>
        </template>
        <template v-else>
          <VCol
            v-for="item in articles"
            :key="item.documentId"
            cols="12"
          >
            <VCard
              class="cursor-pointer"
              @click="goToDetail(item.documentId)"
            >
              <div class="item-container">
                <div class="item-txt">
                  <VCardItem>
                    <VCardTitle>{{ item.title }}</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    {{ item.description }}
                  </VCardText>

                  <VCardText class="text-body-1">
                    <span>Time :</span> <span class="font-weight-medium">{{ formatDate(item.publishedAt) }}</span>
                  </VCardText>

                  <VCardActions class="justify-space-between">
                    <VBtn>
                      <span class="ms-2">查看详情</span>
                      <VIcon icon="ri-arrow-right-line" />
                    </VBtn>
                  </VCardActions>
                </div>
                <div class="item-img">
                  <VImg
                    :src="getCoverUrl(item.cover)"
                    :alt="item.cover?.alternativeText || item.title"
                    cover
                  />
                </div>
              </div>
            </VCard>
          </VCol>
        </template>
      </div>
      <div v-if="!loading && articles.length > 0">
        <VPagination
          v-model="currentPage"
          :length="totalPages"
          :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
        />
      </div>
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.icon-grid {
  margin-right: 1rem;
}
.item-container {
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-between;
  align-items: center;
}
.item-txt {
  width: 60%;
}
.item-img {
  width: 40%;
  display: flex;
  justify-content: end;
  flex-wrap: nowrap;
  align-items: center;
  height: 15rem;
}
</style>
