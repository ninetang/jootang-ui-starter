<script setup lang="ts">
import certificate1 from '@images/certificates/certificate1.webp'
import certificate2 from '@images/certificates/certificate2.webp'
import certificate3 from '@images/certificates/certificate3.webp'
import certificate4 from '@images/certificates/certificate4.webp'
import certificate5 from '@images/certificates/certificate5.webp'
import lab1 from '@images/laboratorys/1.webp'
import lab2 from '@images/laboratorys/2.webp'
import lab3 from '@images/laboratorys/3.webp'
import lab4 from '@images/laboratorys/4.webp'
import lab6 from '@images/laboratorys/6.webp'
import lab7 from '@images/laboratorys/7.webp'
import client1 from '@images/clients/unilumin.webp'
import client2 from '@images/clients/bravoled.webp'
import client3 from '@images/clients/fsl.webp'
import client4 from '@images/clients/hans.webp'
import client5 from '@images/clients/ocean.webp'
import client6 from '@images/clients/longhorn.webp'
import client7 from '@images/clients/signcomplex.webp'
import client8 from '@images/clients/ruifeng.webp'

const tabItems = ['资质证书', '实验室环境', '合作客户']
const navigationTab2 = ref('资质证书')

const certificates = [
  {
    title: 'nvlap授权',
    img: certificate1,
  },
  {
    title: 'UL授权信',
    img: certificate2,
  },
  {
    title: 'tuv-sud授权信',
    img: certificate3,
  },
  {
    title: 'ETL授权信',
    img: certificate4,
  },
  {
    title: 'UL授权证书',
    img: certificate5,
  },
]

const labs = [
  {
    title: '安规实验室',
    img: lab1,
  },
  {
    title: '能效实验室',
    img: lab2,
  },
  {
    title: 'tuv-sud授权信',
    img: lab3,
  },
  {
    title: 'ETL授权信',
    img: lab4,
  },
  {
    title: 'UL授权证书',
    img: lab6,
  },
  {
    title: 'UL授权证书',
    img: lab7,
  },
]

const cooperators = [
  {
    title: 'nvlap授权',
    img: client1,
  },
  {
    title: 'UL授权信',
    img: client2,
  },
  {
    title: 'tuv-sud授权信',
    img: client3,
  },
  {
    title: 'ETL授权信',
    img: client4,
  },
  {
    title: 'UL授权证书',
    img: client5,
  },
  {
    title: 'UL授权证书',
    img: client6,
  },
  {
    title: 'UL授权证书',
    img: client7,
  },
  {
    title: 'UL授权证书',
    img: client8,
  },
]
</script>

<template>
  <VRow>
    <VCard
      flat
      class="w-100"
    >
      <VCardTitle class="text-center">
        资质授权
      </VCardTitle>
      <VTabs
        v-model="navigationTab2"
        align-tabs="center"
      >
        <VTab
          v-for="item in tabItems"
          :key="item"
          :value="item"
        >
          {{ item }}
        </VTab>
      </VTabs>
      <VWindow v-model="navigationTab2">
        <VWindowItem
          value="资质证书"
          class="text-center"
        >
          <VContainer id="features">
            <div>
              <VRow class="justify-center gap-8">
                <VCol
                  v-for="(data, index) in certificates"
                  :key="index"
                  cols="12"
                  sm="3"
                  md="2"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <div class="border image-container">
                      <VImg
                        :src="data.img"
                        width="250"
                        border="border"
                        class="mb-2 image-zoom"
                      />
                    </div>
                    <VCardText class="font-weight-bold">
                      {{ data.title }}
                    </VCardText>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
        <VWindowItem
          value="实验室环境"
          class="text-center"
        >
          <VContainer id="features">
            <div>
              <VRow>
                <VCol
                  v-for="(data, index) in labs"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <div class="image-container">
                      <VImg
                        :src="data.img"
                        width="350"
                        height="280"
                        cover
                        border="border"
                        class="mb-2 image-zoom"
                      />
                    </div>
                    <VCardText class="font-weight-bold">
                      {{ data.title }}
                    </VCardText>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
        <VWindowItem
          value="合作客户"
          class="text-center"
        >
          <VContainer id="features">
            <div>
              <VRow>
                <VCol
                  v-for="(data, index) in cooperators"
                  :key="index"
                  cols="12"
                  md="3"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <div class="border image-container">
                      <VImg
                        :src="data.img"
                        width="250"
                        border="border"
                        class="mb-2 image-zoom"
                      />
                    </div>
                    <VCardText class="font-weight-bold">
                      {{ data.title }}
                    </VCardText>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
      </VWindow>
      <VCardActions class="justify-center feature-cards">
        <VBtn :to="{ name: 'about', hash: '#certification' }">
          了解更多
          <VIcon
            end
            icon="ri-arrow-right-line"
          />
        </VBtn>
      </VCardActions>
    </VCard>
  </VRow>

<!--  <div class="d-flex flex-column-reverse flex-md-row w-100 align-center"> -->
<!--    <div class="ma-auto pa-2 d-flex flex-column justify-center align-center"> -->
<!--      <VImg -->
<!--        :width="250" -->
<!--        :height="250" -->
<!--        :src="angui1" -->
<!--        cover -->
<!--        class="rounded" -->
<!--      /> -->
<!--      <span class="pa-5">安规实验室</span> -->
<!--    </div> -->
<!--    <div class="ma-auto pa-5 d-flex flex-column justify-center align-center"> -->
<!--      <VImg -->
<!--        :width="250" -->
<!--        :height="250" -->
<!--        cover -->
<!--        :src="nenxiao2" -->
<!--        class="rounded" -->
<!--      /> -->
<!--      <span class="pa-5">能效实验室</span> -->
<!--    </div> -->
<!--    <div> -->
<!--      <VCardItem> -->
<!--        <VCardTitle>资历证书</VCardTitle> -->
<!--      </VCardItem> -->

<!--      <VCardText class="d-flex align-center flex-wrap text-body-1"> -->
<!--        <span>Certifications</span> -->
<!--      </VCardText> -->

<!--      <VCardText> -->
<!--        获得了UL、Intertek、CSA、MET、TUV- RH 、TUV-SUD、SGS、NEMKO、FCC、IC等众多国际认证机构的资质认可，能为 -->
<!--        客户提供专业权威的一站式检测认证服务。 -->
<!--      </VCardText> -->

<!--      <VCardActions> -->
<!--        <VBtn :to="{ name: 'about', hash: '#certification' }"> -->
<!--          了解更多 -->
<!--          <VIcon -->
<!--            end -->
<!--            icon="ri-arrow-right-line" -->
<!--          /> -->
<!--        </VBtn> -->
<!--      </VCardActions> -->
<!--    </div> -->
<!--    <div class="d-flex justify-center align-center"> -->
<!--      <VCard class="ma-5 certificate"> -->
<!--        <Certificates /> -->
<!--      </VCard> -->
<!--    </div> -->
<!--  </div> -->
</template>

<style scoped lang="scss">
.feature-cards {
  margin-block-end: 4.25rem;
}
.image-container {
  overflow: hidden;
}
.image-zoom {
  transition: transform 0.5s;
}
.image-zoom:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>
