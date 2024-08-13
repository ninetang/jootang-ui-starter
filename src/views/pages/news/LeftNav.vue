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
</style>
