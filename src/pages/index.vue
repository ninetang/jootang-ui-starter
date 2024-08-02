<script setup lang="ts">
import Banner from '@/views/pages/index/Banner.vue'
import Clients from '@/views/pages/index/Clients.vue'
import News from '@/views/pages/index/News.vue'
import angui1 from '@images/laboratorys/angui1.png'
import nenxiao2 from '@images/laboratorys/nenxiao2.png'
import pages5 from '@images/pages/5.jpg'
import Certificates from '@/views/pages/index/Certificates.vue'
import Business from '@/views/pages/index/Business.vue'
</script>

<template>
  <VRow>
    <VCol class="banner">
      <Banner />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12">
      <VCard>
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
              <VBtn>
                了解更多
                <VIcon
                  end
                  icon="ri-arrow-right-line"
                />
              </VBtn>
            </VCardActions>
          </div>

          <div class="ma-auto pa-5">
            <VImg
              :width="300"
              :src="pages5"
              class="rounded"
            />
          </div>
        </div>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard>
        <div class="d-flex flex-column-reverse flex-md-row">
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
              <VBtn>
                了解更多
                <VIcon
                  end
                  icon="ri-arrow-right-line"
                />
              </VBtn>
            </VCardActions>
          </div>
          <div>
            <VCard class="ma-5 certificate">
              <Certificates />
            </VCard>
          </div>
        </div>
      </VCard>
    </VCol>
    <VCard
      class="mb-6"
      :title="$t('pages.index.Company Profile')"
    >
      <VCardText>
        Shenzhen Belling Energy Efficiency Technology Co., Ltd. (referred to as Belling) was
        established in 2015 and has consistently provided advanced quality assurance solutions for
        our clients. Our business is always customer-centric, focusing on creating a first-class
        customer service experience. Located in Longhua, Shenzhen, we are a pioneer in the domestic
        third-party testing and certification technical service industry. Our company is established
        in strict accordance with the requirements of ISO/IEC 17025:2017 and has obtained
        recognition from the China National Accreditation Service for Conformity Assessment (CNAS)
        and the China Metrology Accreditation (CMA), as well as the National Voluntary Laboratory
        Accreditation Program (NVLAP) in the United States.
      </VCardText>
    </VCard>
    <VCard
      title="Efficient, Authoritative, and Impartial Third-Party Testing and Certification Technical
        Service Institution"
    >
      <VCardText>
        Currently, our company primarily focuses on the testing and international certification of
        lighting, household appliances, audio-visual, and other electronic and electrical products.
        We have been accredited by numerous international certification bodies such as UL, Intertek,
        CSA, MET, TUV-RH, TUV-SUD, SGS, NEMKO, FCC, and IC, enabling us to provide professional and
        authoritative one-stop testing and certification services for our clients.
      </VCardText>
      <VCardText>
        Looking to the future, we will continue to innovate and enhance our expertise, offering
        comprehensive services from testing to certification. We will persist in our efforts to
        deliver high-quality service value, earn the trust of our clients, and help each client
        achieve accelerated business growth and strengthened core competitiveness.
      </VCardText>
    </VCard>
  </VRow>
  <VRow>
    <VCard title="主要业务" class="w-100">
      <Business />
    </VCard>
  </VRow>
  <VRow>
    <VCard title="新闻动态">
      <VRow class="ma-auto">
        <News />
      </VRow>
    </VCard>
  </VRow>
  <VRow>
    <VCard title="客户案例">
      <Clients />
    </VCard>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/swiper.scss";

.v-row {
  margin-block: 1rem;
  .banner {
    padding: 0
  }
}
.certificate {
  width: 20rem;
}
</style>
