<script setup lang="ts">
import pages5 from '@images/pages/5.jpg'
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
            <div class="d-flex justify-start">
              <VImg
                width="500"
                height="500"
                :src="pages5"
                cover
              />
            </div>
            <div class="d-flex flex-column pa-3 w-100">
              <div class="article">
                <VCardItem>
                  <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                </VCardItem>

                <VCardText>
                  Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                </VCardText>

                <VCardText class="text-body-1">
                  <span>Time :</span> <span class="font-weight-medium">2024-08-11</span>
                </VCardText>
                <VDivider />
              </div>
              <div>
                <VCardItem>
                  <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                </VCardItem>

                <VCardText>
                  Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                </VCardText>

                <VCardText class="text-body-1">
                  <span>Time :</span> <span class="font-weight-medium">2024-08-11</span>
                </VCardText>
                <VDivider />
              </div>
              <div>
                <VCardItem>
                  <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
                </VCardItem>

                <VCardText>
                  Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                </VCardText>

                <VCardText class="text-body-1">
                  <span>Time :</span> <span class="font-weight-medium">2024-08-11</span>
                </VCardText>
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
</style>
