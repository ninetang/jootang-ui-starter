<script setup lang="ts">
import navImg from '@images/logo/nav.jpg'
</script>

<template>
  <VRow>
    <VImg
      :src="navImg"
      cover
    />
  </VRow>
  <VRow>
    <VCard
      title="联系我们"
      class="w-100"
    >
      <VCardText>
        地址：深圳市龙华区大浪街道新石社区石龙仔路14号美宝和工业园1栋西侧
      </VCardText>
      <VCardText>
        0755-21038430
      </VCardText>
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}
</style>
