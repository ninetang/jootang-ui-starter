<script lang="ts" setup>
import SelectSolid from '@images/svg/3d-select-solid.svg'
import Edit from '@images/svg/edit.svg'
import LaptopCharging from '@images/svg/laptop-charging.svg'
import Lifebelt from '@images/svg/lifebelt.svg'
import TransitionUp from '@images/svg/transition-up.svg'
import china from '@images/areas/china.webp'
import north from '@images/areas/north-america.webp'
import eourape from '@images/areas/eourape.webp'
import australia from '@images/areas/australia.webp'
import zhongdong from '@images/areas/zhongdong.webp'
import more from '@images/areas/more.webp'
import japan from '@images/areas/japan.webp'
import korea from '@images/areas/korea.webp'

const testService = [
  {
    title: 'Safety安全检测',
    img: LaptopCharging,
  },
  {
    title: 'Efficiency能效检测',
    img: TransitionUp,
  },
  {
    title: 'EMC电磁兼容检测',
    img: Edit,
  },
  {
    title: '射频测试',
    img: SelectSolid,
  },
  {
    title: '化学检测',
    img: Lifebelt,
  },
  {
    title: '光生物激光测试',
    img: Lifebelt,
  },
  {
    title: '可靠性测试',
    img: Lifebelt,
  },
  {
    title: '更多测试',
    img: Lifebelt,
  },
]

const technologyService = [
  {
    title: '安规整改',
    img: LaptopCharging,
  },
  {
    title: '验厂辅导',
    img: TransitionUp,
  },
  {
    title: 'EMC整改',
    img: Edit,
  },
  {
    title: '跨境电商合规辅导',
    img: SelectSolid,
  },
]

const authentication = [
  {
    title: '北美认证',
    img: north,
  },
  {
    title: '欧盟认证',
    img: eourape,
  },
  {
    title: '澳洲认证',
    img: australia,
  },
  {
    title: '中国认证',
    img: china,
  },
  {
    title: '其他国家认证',
    img: more,
  },
]

const navigationTab2 = ref('测试服务')
const tabItems = ['检测项目', '国际认证']
</script>

<template>
  <VCol cols="12">
    <VCard class="business">
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

      <!-- tabs content -->
      <VWindow v-model="navigationTab2">
        <VWindowItem
          value="检测项目"
          class="text-center"
        >
          <VContainer id="features">
            <div class="feature-cards">
              <VRow>
                <VCol
                  v-for="(data, index) in testService"
                  :key="index"
                  cols="12"
                  sm="4"
                  md="3"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <VAvatar
                      variant="outlined"
                      size="84"
                      color="primary"
                      class="mb-2"
                    >
                      <Component :is="data.img" />
                    </VAvatar>

                    <h5 class="text-h5">
                      {{ data.title }}
                    </h5>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
        <!--        <VWindowItem -->
        <!--          value="技术服务" -->
        <!--          class="text-center" -->
        <!--        > -->
        <!--          <VContainer id="features"> -->
        <!--            <div class="feature-cards"> -->
        <!--              <VRow> -->
        <!--                <VCol -->
        <!--                  v-for="(data, index) in technologyService" -->
        <!--                  :key="index" -->
        <!--                  cols="12" -->
        <!--                  sm="6" -->
        <!--                  md="3" -->
        <!--                > -->
        <!--                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2"> -->
        <!--                    <VAvatar -->
        <!--                      variant="outlined" -->
        <!--                      size="84" -->
        <!--                      color="primary" -->
        <!--                      class="mb-2" -->
        <!--                    > -->
        <!--                      <Component :is="data.img"/> -->
        <!--                    </VAvatar> -->

        <!--                    <h5 class="text-h5"> -->
        <!--                      {{ data.title }} -->
        <!--                    </h5> -->
        <!--                  </div> -->
        <!--                </VCol> -->
        <!--              </VRow> -->
        <!--            </div> -->
        <!--          </VContainer> -->
        <!--        </VWindowItem> -->
        <VWindowItem
          value="国际认证"
          class="text-center"
        >
          <VContainer id="features">
            <div class="feature-cards">
              <VRow>
                <VCol
                  v-for="(data, index) in authentication"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <VAvatar
                      variant="outlined"
                      size="84"
                      color="primary"
                      class="mb-2"
                    >
                      <VImg :src="data.img" />
                    </VAvatar>

                    <h5 class="text-h5">
                      {{ data.title }}
                    </h5>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
      </VWindow>
    </VCard>
  </VCol>
</template>

<style lang="scss" scoped>
.feature-cards {
  margin-block-end: 4.25rem;
}

.feature {
  .v-avatar {
    &.v-avatar--variant-outlined {
      border: 2px solid rgba(var(--v-theme-primary), 0.32);

      &:hover {
        background: rgba(var(--v-theme-primary), 0.16);
        cursor: pointer;
      }
    }
  }
}
.business {
  box-shadow: none;
}
</style>
