<script setup lang="ts">
import Banner from '@/views/pages/news/Banner.vue'
</script>

<template>
  <VRow>
    <VCard class="w-100 pa-3">
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
        <VCard>
          <div class="d-flex flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="d-flex justify-center align-center">
              <VCard class="banner" flat>
                <Banner />
              </VCard>
              <!--              <VImg -->
              <!--                width="500" -->
              <!--                :src="pages5" -->
              <!--                cover -->
              <!--              /> -->
            </div>
            <div class="d-flex flex-column justify-center pa-3 w-100">
              <div class="d-flex justify-center">
                <div class="d-flex flex-column justify-center align-center w-25">
                  <span class="text-h1">11</span>
                  <span>2024-08</span>
                </div>
                <div>
                  <VCardItem>
                    <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                  </VCardText>
                </div>
              </div>
              <VDivider />
              <div class="d-flex justify-center">
                <div class="d-flex flex-column justify-center align-center w-25">
                  <span class="text-h1">11</span>
                  <span>2024-08</span>
                </div>
                <div>
                  <VCardItem>
                    <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                  </VCardText>
                </div>
              </div>
              <VDivider />
              <div class="d-flex justify-center">
                <div class="d-flex flex-column justify-center align-center w-25">
                  <span class="text-h1">11</span>
                  <span>2024-08</span>
                </div>
                <div>
                  <VCardItem>
                    <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                  </VCardText>
                </div>
              </div>
              <VDivider />
              <div class="d-flex justify-center">
                <div class="d-flex flex-column justify-center align-center w-25">
                  <span class="text-h1">11</span>
                  <span>2024-08</span>
                </div>
                <div>
                  <VCardItem>
                    <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                  </VCardText>
                </div>
              </div>
              <VDivider />
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
  width: 35rem;
}
</style>
