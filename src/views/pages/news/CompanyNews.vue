<script setup lang="ts">
import pages5 from '@images/pages/5.jpg'

const router = useRouter()

const goToDetail = (id: string) => {
  router.push({ name: 'news-company-id', params: { id } })
}
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-3 outer-v-card">
      <VCol class="d-flex justify-space-between align-center title">
        <h2>公司新闻</h2>
        <div>
          <span>查看全部</span>
          <VIcon
            color="default"
            icon="ri-arrow-right-s-line"
          />
        </div>
      </VCol>
      <div class="d-flex mb-5 flex-wrap">
        <VCol
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          cols="12"
          md="4"
        >
          <VCard
            class="h-100 cursor-pointer"
            @click="goToDetail(String(item))"
          >
            <VImg
              :height="300"
              :src="pages5"
              cover
            />

            <VCardItem>
              <VCardTitle>Influencing The Influencer</VCardTitle>
            </VCardItem>

            <VCardText>
              Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism
              minister
              predicts Cancun will draw as many visitors in 2006 as it did two years ago.
            </VCardText>
            <VCardText>
              2024-08-11
            </VCardText>
          </VCard>
        </VCol>
      </div>
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.title {
  margin-block: 1rem;
}

.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
