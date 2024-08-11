<script setup lang="ts">
import pages5 from '@images/pages/5.jpg'
</script>

<template>
  <VRow>
    <VCard class="w-100">
      <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
        <div class="pa-3">
          <VCardItem>
            <h2>企业愿景</h2>
          </VCardItem>

          <VCardText>
            &emsp;&emsp;Belling成为检测认证行业最具创造力的服务商，真正意义上帮
            助企业提升产品质量，为企业提供全方位的技术咨询和检测服务。
            对接行业专家、整合社会资源（包括中小型企业资源，人力资源，
            国家科研教育单位等）发挥渠道优势，打造强有力的执行团队，
            为客户提供优质高效的服务。
          </VCardText>
        </div>
        <div class="d-flex justify-center align-center landing-cta">
          <span class="banner-text text-white ">
            诚信铸就品质<br>&emsp;&emsp;创新引领未来
          </span>
        </div>
      </div>
    </VCard>
  </VRow>
</template>

<style lang="scss" scoped>
.landing-cta {
  background-image: url("@images/logo/wish.png");
  background-size: cover;
  width: 100%;
}

.banner-text{
  color: rgb(var(--v-theme-primary));
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.25px;
}
</style>
