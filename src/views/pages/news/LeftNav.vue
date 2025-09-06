<script lang="ts" setup>
const items = [
  { title: '公司新闻', value: 1, prependIcon: 'ri-newspaper-line', tab: 'company' },
  { title: '行业资讯', value: 2, prependIcon: 'ri-file-info-line', tab: 'industry' },
  { title: '技术文章', value: 3, prependIcon: 'ri-article-line', tab: 'technology' },
]

const route = useRoute()

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})
</script>

<template>
  <VRow class="navRow">
    <VLayout>
      <VCard class="w-100">
        <VListItem class="title pl-4 font-weight-bold">
          <template #prepend>
            <VIcon
              icon="ri-news-line"
              class="me-3"
            />
          </template>
          <VListItemTitle>
            新闻咨询
          </VListItemTitle>
        </VListItem>
        <VList
          v-model="activeTab"
          nav
          :lines="false"
        >
          <VListItem
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            :to="{ name: `news-${item.tab}` }"
          >
            <template #prepend>
              <VIcon
                :icon="item.prependIcon"
                class="me-3"
              />
            </template>

            <VListItemTitle>
              {{ item.title }}
            </VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VLayout>
  </VRow>
</template>

<style scoped>
.navRow {
  margin: 0 auto;
}
.title {
  //background: linear-gradient(to right, rgb(127,199,253), rgb(74,175,253));
  background: linear-gradient(to left, rgb(var(--v-global-theme-primary)) 22.16%, rgba(var(--v-global-theme-primary), 0.7) 76.47%);
  color: white;
}
</style>
