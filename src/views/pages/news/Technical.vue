<script setup lang="ts">
import Banner from '@/views/pages/news/Banner.vue'

const items = [
  {
    id: 1,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    date: '11',
    month: '2024-08-11',
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    date: '11',
    month: '2024-08-11',
  },
  {
    id: 3,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    date: '11',
    month: '2024-08-11',
  },
  {
    id: 4,
    title: 'Apple iPhone 11 Pro',
    content: 'Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic',
    date: '11',
    month: '2024-08-11',
  },
]
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-3 outer-v-card">
      <VCol class="d-flex justify-space-between align-center title">
        <h2>技术文章</h2>
        <div>
          <span>查看全部</span>
          <VIcon
            color="default"
            icon="ri-arrow-right-s-line"
          />
        </div>
      </VCol>
      <VCol>
        <VCard flat>
          <div class="d-flex flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="d-flex justify-center align-center">
              <VCard
                class="banner"
                flat
              >
                <Banner />
              </VCard>
              <!--              <VImg -->
              <!--                width="500" -->
              <!--                :src="pages5" -->
              <!--                cover -->
              <!--              /> -->
            </div>
            <div class="d-flex flex-column justify-center pa-3 w-100">
              <div
                v-for="item in items"
                :key="item.id"
                class="d-flex flex-column"
              >
                <div class="d-flex align-center justify-center">
                  <div class="d-flex flex-column justify-center align-center w-25">
                    <span class="text-h1">{{ item.date }}</span>
                    <span>{{ item.month }}</span>
                  </div>
                  <div>
                    <VCardItem>
                      <VCardTitle>{{ item.title }}</VCardTitle>
                    </VCardItem>

                    <VCardText>
                      {{ item.content }}
                    </VCardText>
                  </div>
                </div>
                <VDivider />
              </div>
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
.banner {
  width: 25rem;
}
</style>
