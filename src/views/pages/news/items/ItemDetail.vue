<script lang="ts" setup>
const props = withDefaults(defineProps<{ id?: string }>(), {
  id: '',
})

const route = useRoute()
const router = useRouter()

// 优先从路由参数获取id，如果没有则使用props
const newsId = computed(() => {
  const params = route.params as { id?: string }
  if (params?.id)
    return String(params.id)

  return props.id
})

// 根据当前路由确定返回列表的路由
const getListRoute = (): { name: 'news-company' | 'news-industry' | 'news-technology' } => {
  const routeName = String(route.name || '')
  if (routeName.includes('company'))
    return { name: 'news-company' }

  if (routeName.includes('industry'))
    return { name: 'news-industry' }

  if (routeName.includes('technology'))
    return { name: 'news-technology' }

  return { name: 'news-company' }
}

const goBack = () => {
  router.push(getListRoute())
}
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-5">
      <VCardTitle class="text-center">
        Title {{ newsId }}
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
      <VDivider />
      <VCardText>
        content
      </VCardText>
      <VDivider />
      <VCardActions class="d-flex justify-space-between w-100 mt-3 mb-3">
        <VBtn prepend-icon="ri-arrow-left-line">
          上一篇
        </VBtn>
        <VBtn @click="goBack">
          返回
        </VBtn>
        <VBtn append-icon="ri-arrow-right-line">
          下一篇
        </VBtn>
      </VCardActions>
    </VCard>
  </VRow>
</template>
