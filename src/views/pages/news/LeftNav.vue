<script lang="ts" setup>
const items = [
  { title: '公司新闻', value: 1, prependIcon: 'ri-newspaper-line' },
  { title: '行业资讯', value: 2, prependIcon: 'ri-file-info-line' },
  { title: '技术文章', value: 3, prependIcon: 'ri-article-line' },
]
</script>

<template>
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
          v-for="item in items"
          :key="item.value"
          :value="item.value"
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
</template>

<style scoped>
.navRow {
  margin: 0 auto;
}
.title {
  background: linear-gradient(to right, rgb(127,199,253), rgb(74,175,253));
  color: white;
}
</style>
