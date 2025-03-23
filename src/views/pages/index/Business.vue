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
import more from '@images/areas/more.webp'

const testService = [
  {
    title: 'Safety安全检测',
    img: LaptopCharging,
    url: 'services-test-items-safety',
  },
  {
    title: 'Efficiency能效检测',
    img: TransitionUp,
    url: 'services-test-items-efficiency',
  },
  {
    title: 'EMC电磁兼容检测',
    img: Edit,
    url: 'services-test-items-emc',
  },
  {
    title: '射频测试',
    img: SelectSolid,
    url: 'services-test-items-rf',
  },
  {
    title: '化学检测',
    img: Lifebelt,
    url: 'services-test-items-chemical',
  },
  {
    title: '光生物激光测试',
    img: Lifebelt,
    url: 'services-test-items-laser',
  },
  {
    title: '可靠性测试',
    img: Lifebelt,
    url: 'services-test-items-reliability',
  },
  {
    title: '更多测试',
    img: Lifebelt,
    url: 'services-test-items-safety',
  },
]

const authentication = [
  {
    title: '北美认证',
    img: north,
    url: 'services-certification-north-america-tab',
    tab: 'UL',
  },
  {
    title: '欧盟认证',
    img: eourape,
    url: 'services-certification-european-tab',
    tab: 'CE',
  },
  {
    title: '澳洲认证',
    img: australia,
    url: 'services-certification-australia-tab',
    tab: 'SAA',
  },
  {
    title: '中国认证',
    img: china,
    url: 'services-certification-china-tab',
    tab: 'CCC',
  },
  {
    title: '其他国家认证',
    img: more,
    url: 'services-certification-north-america-tab',
    tab: 'UL',
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
                    <RouterLink :to="{ name: data.url }">
                      <VAvatar
                        variant="outlined"
                        size="84"
                        color="primary"
                        class="mb-2"
                      >
                        <Component :is="data.img" />
                      </VAvatar>
                    </RouterLink>

                    <h5 class="text-h5">
                      {{ data.title }}
                    </h5>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VContainer>
        </VWindowItem>
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
                    <RouterLink :to="{ name: data.url, params: { tab: data.tab } }">
                      <VAvatar
                        variant="outlined"
                        size="84"
                        color="primary"
                        class="mb-2"
                      >
                        <VImg :src="data.img" />
                      </VAvatar>
                    </RouterLink>

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
