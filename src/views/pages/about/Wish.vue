<script setup lang="ts">
</script>

<template>
  <VRow>
    <VCard class="w-100">
      <div class="landing-cta position-relative bg-surface">
        <VContainer>
          <div class="d-flex align-center justify-sm-space-between flex-column flex-md-row gap-y-4 pt-9">
            <div class="text-sm-start text-center py-8 w-50">
              <div class="pb-1">
                <h2>
                  企业愿景
                </h2>
              </div>
              <div class="text-body-1 font-weight-medium mb-8">
                &emsp;&emsp;Belling成为检测认证行业最具创造力的服务商，真正意义上帮
                助企业提升产品质量，为企业提供全方位的技术咨询和检测服务。
                对接行业专家、整合社会资源（包括中小型企业资源，人力资源，
                国家科研教育单位等）发挥渠道优势，打造强有力的执行团队，
                为客户提供优质高效的服务。
              </div>
            </div>
            <div class="banner-text">
              诚信铸就品质<br>&emsp;&emsp;创新引领未来
            </div>
          </div>
        </VContainer>
      </div>
    </VCard>
  </VRow>
</template>

<style lang="scss" scoped>
.landing-cta {
  background-image: url("@images/pages/user-profile-header-bg.png");
  background-size: cover;
  margin-block: auto;
}

.banner-text{
  color: rgb(var(--v-theme-primary));
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.25px;
  line-height: 42px;
}
</style>
