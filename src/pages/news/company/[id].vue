<script lang="ts" setup>
import ItemDetail from '@/views/pages/news/items/ItemDetail.vue'
import TopImg from '@/views/pages/TopImg.vue'
import LeftNav from '@/views/pages/news/LeftNav.vue'

definePage({
  meta: {
    navActiveLink: 'news-tab',
  },
})
</script>

<template>
  <TopImg />
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <LeftNav />
    </VCol>
    <VCol
      cols="12"
      md="9"
    >
      <VWindow
        class="disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <ItemDetail />
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
  background: linear-gradient(to right, rgb(127, 199, 253), rgb(74, 175, 253));
  color: white;
}
</style>
