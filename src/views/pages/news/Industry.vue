<script setup lang="ts">
import pages5 from '@images/pages/5.jpg'

const items = [
  {
    id: 1,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    time: '2024-08-11',
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    time: '2024-08-11',
  },
  {
    id: 3,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    time: '2024-08-11',
  },
]
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-3 outer-v-card">
      <VCol class="d-flex justify-space-between align-center title">
        <h2>行业资讯</h2>
        <div>
          <span>查看全部</span>
          <VIcon
            color="default"
            icon="ri-arrow-right-s-line"
          />
        </div>
      </VCol>
      <VCol
        v-for="item in items"
        :key="item.id"
      >
        <VCard>
          <div class="d-flex flex-column-reverse flex-md-row align-center justify-space-between">
            <div>
              <VCardItem>
                <VCardTitle>{{ item.title }}</VCardTitle>
              </VCardItem>

              <VCardText>
                {{ item.content }}
              </VCardText>

              <VCardText class="text-body-1">
                <span>Time :</span> <span class="font-weight-medium">{{ item.time }}</span>
              </VCardText>

              <VCardActions class="justify-space-between">
                <VBtn>
                  <span class="ms-2">查看详情</span>
                  <VIcon icon="ri-arrow-right-line" />
                </VBtn>
              </VCardActions>
            </div>
            <div class="d-flex justify-center align-center">
              <VImg
                width="400"
                height="220"
                :src="pages5"
                cover
              />
            </div>
          </div>
        </VCard>
      </VCol>
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.title {
  margin-block: 1rem;
}
</style>
