<script setup lang="ts">
import testProjects from '@/mock/testProjects.json'

const route = useRoute('services-tab')

const project = computed(() => {
  return testProjects.testItems.find(item => item.title.toLowerCase() === route.params.tab.toLowerCase())
})
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-5">
      <VCardTitle class="text-center">
        {{ project.name }}
      </VCardTitle>
      <VDivider />
      <VCardItem>
        <VCardTitle>
          项目简介
        </VCardTitle>
        <VList>
          <VListItem
            v-for="item in project.introduction"
            :key="item"
          >
            <VListItemTitle class="text-wrap">
              {{ item }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCardItem>
      <VCardItem>
        <VCardTitle>
          检测项目
        </VCardTitle>
        <VList>
          <VListItem
            v-for="item in project.projects"
            :key="item"
          >
            <VListItemTitle class="text-wrap">
              {{ item }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCardItem>
      <VCardItem>
        <VCardTitle>
          服务优势
        </VCardTitle>
        <VList>
          <VListItem
            v-for="item in project.advantages"
            :key="item"
          >
            <VListItemTitle class="text-wrap">
              {{ item }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCardItem>
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
