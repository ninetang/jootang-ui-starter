<script lang="ts" setup>
import ItemDetail from '@/views/pages/news/items/ItemDetail.vue'
import NavImg from '@images//logo/nav.jpg'

const route = useRoute('news-tab-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  {title: '公司新闻', value: 1, prependIcon: 'ri-newspaper-line', tab: 'company'},
  {title: '行业资讯', value: 2, prependIcon: 'ri-file-info-line', tab: 'industry'},
  {title: '技术文章', value: 3, prependIcon: 'ri-article-line', tab: 'technical'},
]

definePage({
  meta: {
    navActiveLink: 'news-tab-id',
  },
})
</script>

<template>
  <VRow>
    <VImg
      :src="NavImg"
      cover
    />
  </VRow>
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <VRow class="navRow">
        <VCard class="w-100">
          <VListItem class="title pl-4 font-weight-bold">
            <template #prepend>
              <VIcon
                icon="ri-news-line"
                class="me-3"
              />
            </template>
            <VListItemTitle>
              新闻中心
            </VListItemTitle>
          </VListItem>
          <VList
            nav
            :lines="false"
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
        class="disable-tab-transition"
        :touch="false"
      >
        <VWindowItem >
          <ItemDetail/>
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
.title {
  background: linear-gradient(to right, rgb(127,199,253), rgb(74,175,253));
  color: white;
}
</style>
