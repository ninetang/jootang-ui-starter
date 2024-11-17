<script setup lang="ts">
import angui1 from '@images/laboratorys/angui1.webp'
import nenxiao2 from '@images/laboratorys/nenxiao2.webp'
import Certificates from '@/views/pages/index/Certificates.vue'
</script>

<template>
  <div class="d-flex flex-column-reverse flex-md-row w-100 align-center">
    <div class="ma-auto pa-2 d-flex flex-column justify-center align-center">
      <VImg
        :width="250"
        :height="250"
        :src="angui1"
        cover
        class="rounded"
      />
      <span class="pa-5">安规实验室</span>
    </div>
    <div class="ma-auto pa-5 d-flex flex-column justify-center align-center">
      <VImg
        :width="250"
        :height="250"
        cover
        :src="nenxiao2"
        class="rounded"
      />
      <span class="pa-5">能效实验室</span>
    </div>
    <div>
      <VCardItem>
        <VCardTitle>资历证书</VCardTitle>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap text-body-1">
        <span>Certifications</span>
      </VCardText>

      <VCardText>
        获得了UL、Intertek、CSA、MET、TUV- RH 、TUV-SUD、SGS、NEMKO、FCC、IC等众多国际认证机构的资质认可，能为
        客户提供专业权威的一站式检测认证服务。
      </VCardText>

      <VCardActions>
        <VBtn :to="{ name: 'about', hash: '#certification' }">
          了解更多
          <VIcon
            end
            icon="ri-arrow-right-line"
          />
        </VBtn>
      </VCardActions>
    </div>
    <div class="d-flex justify-center align-center">
      <VCard class="ma-5 certificate">
        <Certificates />
      </VCard>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
