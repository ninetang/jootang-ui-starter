<script lang="ts" setup>
import axios from 'axios'
import { marked } from 'marked'

const props = withDefaults(defineProps<{ id?: string }>(), { id: '' })

// 配置 marked
marked.setOptions({
  breaks: true,
  gfm: true,
})

// 自定义图片渲染器
const renderer = {
  image(token: any) {
    const baseUrl = 'http://belling-cms.jootang.cn'
    const fullHref = token.href?.startsWith('http') ? token.href : `${baseUrl}${token.href}`

    return `<img src="${fullHref}" alt="${token.text}" />`
  },
}

marked.use({ renderer })

// 类型定义
interface ArticleDetail {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  publishedAt: string
  blocks?: Array<{
    __component: string
    body: string
  }>
}

const route = useRoute()
const router = useRouter()

const newsId = computed(() => {
  const params = route.params as { id?: string }

  return params?.id ? String(params.id) : props.id
})

const article = ref<ArticleDetail | null>(null)
const loading = ref(false)
const error = ref('')
const prevArticle = ref<{ documentId: string } | null>(null)
const nextArticle = ref<{ documentId: string } | null>(null)

// 获取文章详情
async function fetchArticleDetail() {
  if (!newsId.value)
    return

  loading.value = true
  error.value = ''

  try {
    const params = new URLSearchParams({ populate: '*' })
    const url = `//belling-cms.jootang.cn/api/articles/${newsId.value}?${params}`
    const res = await axios.get<{ data: ArticleDetail }>(url)

    article.value = res.data.data
    await fetchAdjacentArticles()
  }
  catch (err: any) {
    console.error('获取文章详情失败：', err)
    error.value = '获取文章详情失败'
    article.value = null
  }
  finally {
    loading.value = false
  }
}

// 获取上下篇
async function fetchAdjacentArticles() {
  if (!article.value)
    return

  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': article.value.slug,
      'sort[0]': 'publishedAt:desc',
      'fields[0]': 'documentId',
    })

    const res = await axios.get<{ data: Array<{ documentId: string }> }>(
      `//belling-cms.jootang.cn/api/articles?${params}`,
    )

    const articles = res.data.data
    const currentIndex = articles.findIndex(item => item.documentId === newsId.value)

    if (currentIndex > 0)
      nextArticle.value = articles[currentIndex - 1]
    if (currentIndex < articles.length - 1)
      prevArticle.value = articles[currentIndex + 1]
  }
  catch (err) {
    console.error('获取相邻文章失败：', err)
  }
}

// 解析 Markdown
const articleContent = computed(() => {
  if (!article.value?.blocks)
    return ''

  const markdown = article.value.blocks
    .filter(block => block.__component === 'shared.rich-text')
    .map(block => block.body)
    .join('\n\n')

  if (!markdown.trim())
    return ''

  try {
    return marked(markdown) as string
  }
  catch (err) {
    console.error('Markdown 解析失败：', err)

    return `<pre>${markdown}</pre>`
  }
})

// 格式化日期
const formatDate = (date: string) => new Date(date).toLocaleDateString('zh-CN')

// 路由导航
const getListRoute = (): { name: 'news-company' | 'news-industry' | 'news-technology' } => {
  const name = String(route.name || '')
  if (name.includes('company'))
    return { name: 'news-company' }
  if (name.includes('industry'))
    return { name: 'news-industry' }
  if (name.includes('technology'))
    return { name: 'news-technology' }

  return { name: 'news-company' }
}

const getRouteName = (): 'news-company-id' | 'news-industry-id' | 'news-technology-id' => {
  const name = String(route.name || '')
  if (name.includes('company'))
    return 'news-company-id'
  if (name.includes('industry'))
    return 'news-industry-id'
  if (name.includes('technology'))
    return 'news-technology-id'

  return 'news-company-id'
}

const goBack = () => router.push(getListRoute())
const goToPrev = () => prevArticle.value && router.push({ name: getRouteName(), params: { id: prevArticle.value.documentId } })
const goToNext = () => nextArticle.value && router.push({ name: getRouteName(), params: { id: nextArticle.value.documentId } })

onMounted(fetchArticleDetail)
watch(newsId, fetchArticleDetail)
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-5">
      <!-- 加载中 -->
      <div
        v-if="loading"
        class="d-flex justify-center align-center pa-10"
      >
        <VProgressCircular
          indeterminate
          color="primary"
        />
      </div>

      <!-- 错误状态 -->
      <div
        v-else-if="!article"
        class="d-flex flex-column justify-center align-center pa-10"
      >
        <VCardText class="text-h6">
          {{ error || '文章不存在' }}
        </VCardText>
        <VBtn
          class="mt-3"
          @click="goBack"
        >
          返回列表
        </VBtn>
      </div>

      <!-- 文章内容 -->
      <template v-else>
        <VCardTitle class="text-center">
          {{ article.title }}
        </VCardTitle>
        <VCardSubtitle class="text-center mb-3">
          发布日期：{{ formatDate(article.publishedAt) }}
        </VCardSubtitle>
        <VDivider class="mb-4" />

        <VCardText
          v-if="articleContent"
          class="article-content"
          v-html="articleContent"
        />
        <VCardText v-else>
          暂无详细内容
        </VCardText>

        <VDivider class="mt-4" />
        <VCardActions class="d-flex justify-space-between mt-3">
          <VBtn
            prepend-icon="ri-arrow-left-line"
            :disabled="!prevArticle"
            @click="goToPrev"
          >
            上一篇
          </VBtn>
          <VBtn @click="goBack">
            返回
          </VBtn>
          <VBtn
            append-icon="ri-arrow-right-line"
            :disabled="!nextArticle"
            @click="goToNext"
          >
            下一篇
          </VBtn>
        </VCardActions>
      </template>
    </VCard>
  </VRow>
</template>

<style scoped>
.article-content {
  line-height: 1.8;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
}

.article-content :deep(p) {
  margin-bottom: 1rem;
}

.article-content :deep(a) {
  color: rgb(var(--v-theme-primary));
}
</style>
