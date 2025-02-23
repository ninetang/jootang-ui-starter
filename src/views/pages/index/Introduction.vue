<script setup lang="ts">
import pages5 from '@images/laboratorys/10.webp'
</script>

<template>
  <div class="d-flex flex-column-reverse flex-md-row">
    <div>
      <VCardItem>
        <VCardTitle>公司简介</VCardTitle>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap text-body-1">
        <span>Company Profile</span>
      </VCardText>

      <VCardText>
        深圳市贝岭能效技术有限公司（简称Belling）成立于2015年，一直为客户提供更领先的质量保障整体
        解决方案，我们的事业始终以“客户”为本，着重打造一流的客户服务体验。公司位于深圳市龙华，是
        国内第三方检测认证技术服务机构的先行者，严格按照ISO/IEC 17025：2017的要求建立，并取得中
        国合格评定国家认可委员会（CNAS）和中国计量认证(CMA)认可；以及美国国家实验室自愿认可程序
        NVLAP的认可。
      </VCardText>

      <VCardActions>
        <VBtn :to="{ name: 'about' }">
          了解更多
          <VIcon
            end
            icon="ri-arrow-right-line"
          />
        </VBtn>
      </VCardActions>
    </div>

    <div class="pa-5 d-flex justify-center">
      <VImg
        :width="400"
        max-width="500"
        max-height="500"
        :src="pages5"
        class="rounded"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
