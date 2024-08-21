<script lang="ts" setup>
import CompanyItem from '@/views/pages/news/items/CompanyItem.vue'

const route = useRoute('news-tab-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  { title: '公司新闻', value: 1, prependIcon: 'ri-newspaper-line', tab: 'company' },
  { title: '行业资讯', value: 2, prependIcon: 'ri-file-info-line', tab: 'industry' },
  { title: '技术文章', value: 3, prependIcon: 'ri-article-line', tab: 'technical' },
]

definePage({
  meta: {
    navActiveLink: 'news-tab-tab',
  },
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <VRow class="navRow">
        <VCard class="w-100">
          <VListItem class="bg-primary text-h5 font-weight-bold">
            新闻中心
          </VListItem>
          <VList
            nav
            :lines="false"
            v-model="activeTab"
          >
            <VListItem
              v-for="item in tabs"
              :key="item.value"
              :value="item.tab"
              :to="{ name: 'news-tab-tab', params: { tab: item.tab } }"
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
      </VRow>
    </VCol>
    <VCol
      cols="12"
      md="9"
    >
      <VWindow
        v-model="activeTab"
        class="disable-tab-transition"
        :touch="false"
      >
        <!-- Account -->
        <VWindowItem value="company">
          <CompanyItem />
        </VWindowItem>

        <!-- Security -->
        <VWindowItem value="industry">
          <CompanyItem />
        </VWindowItem>

        <!-- Billing -->
        <VWindowItem value="technical">
          <CompanyItem />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.v-row {
  margin-block: 1rem;
}
.navRow {
  margin-left: auto;
  margin-right: auto;
}
</style>
