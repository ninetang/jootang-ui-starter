<script setup lang="ts">
import asia from '@/mock/asia.json'
import australia from '@/mock/australia.json'
import europe from '@/mock/europe.json'
import northAmerica from '@/mock/northAmerica.json'
import southAmerica from '@/mock/southAmerica.json'
import other from '@/mock/other.json'
import china from '@/mock/china.json'

const route = useRoute()

const tabDataMap = {
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
  other,
  china,
}

// const project = computed(() => {
//   console.log(`route: ${route.params.tab}`)
//
//   return tabDataMap[route.params.tab]
// })

// const tabData = tabDataMap[props.selectCountry]
const project = computed(() => {
  const selectCountry = route.params.tab.split('/')

  return tabDataMap[selectCountry[0]].items.find(item => selectCountry[1].toLowerCase() === item.id.toLowerCase())
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
