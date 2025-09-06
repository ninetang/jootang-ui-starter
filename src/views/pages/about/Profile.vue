<script setup lang="ts">
import image1 from '@images/laboratorys/7.webp'
import image2 from '@images/laboratorys/18.webp'
</script>

<template>
  <VRow class="h-auto">
    <div>
      <VCard>
        <h2 class="text-center">
          公司简介
        </h2>
        <VCardText>
          &emsp;&emsp;深圳市贝岭能效技术有限公司（Shenzhen Belling Efficiency Testing Laboratory. 简称Belling）
          成立于2015年4月,是一家从事电子产品国际认证及检测的实验室。
          公司立足于不断创新的深圳，占地1000平方米，场地配套有先进的测试设备和仪器，采用全自动测试操作装置,
          是我国首批开创民营第三方检测、认证专业服务型的高新技术企业。
        </VCardText>
        <VCardText>
          &emsp;&emsp;自成立以来，通过不断的自我完善和发展，荣获中国合格评定国家认可委员会 - CNAS，中国计量认证 - CMA，
          National Voluntary Laboratory Accreditation Program - NVLAP，Intertek Group plc - ETL，
          Underwriters Laboratories Inc. - UL，TUV(南德/莱茵) 等资质以及授权......
        </VCardText>
        <VCardText>
          &emsp;&emsp;国际品牌，权威认证！世界的测试设备，一流的测试人员，为您提供超一流的检测服务！
        </VCardText>
        <VCard elevation="0">
          <div class="d-flex flex-column-reverse flex-md-row">
            <div class="w-100 w-md-50">
              <VCardItem>
                <div>
                  <VCardText class="text-h4">
                    全球性认证服务
                  </VCardText>
                  <VCardText>
                    中国CCC,CQC；欧盟CE、GS、ENEC、E-mark、ERP、EMC；美国FCC、UL、ETL、CEC、DLC、LM-79、 ISTMT、TM21、LM-84、LM-82、LM-80、Energy Star；加拿大ICES、CSA；澳洲C-tick、A-tick、SAA、RCM；日本VCCI、PSE、S-mark、MIC；其他CB、BIS、PSB、GOST、NTRA、ROHS、REACH、PAHs、EN71、3G振动等，能提供真正意义上的全球性认证服务。
                  </VCardText>
                </div>
              </VCardItem>
            </div>
            <div class="ma-auto w-100 w-md-50">
              <VImg
                :src="image1"
                class="rounded w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row">
            <div class="ma-auto w-100 w-md-50">
              <VImg
                :src="image2"
                class="rounded w-100"
              />
            </div>
            <div class="w-100 w-md-50">
              <VCardItem>
                <div>
                  <VCardText class="text-h4">
                    国际品牌，权威认证
                  </VCardText>
                  <VCardText>
                    正以自身不断完善的检测设备及强大专业的检测队伍为中国申请商提供全方位一站式的检测及认证服务。
                  </VCardText>
                </div>
              </VCardItem>
            </div>
          </div>
        </VCard>
      </VCard>
    </div>
  </VRow>
</template>

<style scoped lang="scss">
.v-card {
  padding-block: 3rem;
}
.v-card .v-card-text {
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
}
</style>
