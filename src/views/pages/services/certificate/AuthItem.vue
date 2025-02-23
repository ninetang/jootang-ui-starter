<script setup lang="ts">
const props = defineProps<{ items: Array }>()

const route = useRoute()

const project = computed(() => {
  return props.items.items.find(item => item.id.toLowerCase() === route.params.tab.toLowerCase())
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
            v-for="item in project.methods"
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

<style scoped lang="scss">

</style>
