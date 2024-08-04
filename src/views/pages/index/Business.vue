<script lang="ts" setup>
import SelectSolid from '@images/svg/3d-select-solid.svg'
import Edit from '@images/svg/edit.svg'
import GoogleDocs from '@images/svg/google-docs.svg'
import LaptopCharging from '@images/svg/laptop-charging.svg'
import Lifebelt from '@images/svg/lifebelt.svg'
import TransitionUp from '@images/svg/transition-up.svg'

const testService = [
  {
    title: 'Efficiency 能效测试',
    img: LaptopCharging,
  },
  {
    title: 'Safety电气安全',
    img: TransitionUp,
  },
  {
    title: 'EMC电磁兼容',
    img: Edit,
  },
  {
    title: 'Chemical化学测试',
    img: SelectSolid,
  },
  {
    title: 'Reliability可靠性测试',
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
    title: '北美',
    img: LaptopCharging,
  },
  {
    title: '欧盟',
    img: TransitionUp,
  },
  {
    title: '中国',
    img: Edit,
  },
  {
    title: '澳洲',
    img: SelectSolid,
  },
  {
    title: '日本',
    img: Lifebelt,
  },
  {
    title: '韩国',
    img: Lifebelt,
  },
  {
    title: '东盟',
    img: Lifebelt,
  },
  {
    title: '更多',
    img: Lifebelt,
  },
]

const navigationTab2 = ref('测试服务')
const tabItems = ['测试服务', '技术服务', '认证服务']
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
          value="测试服务"
          class="text-center"
        >
          <VContainer id="features">
            <div class="feature-cards">
              <VRow>
                <VCol
                  v-for="(data, index) in testService"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="2"
                >
                  <div class="feature d-flex flex-column gap-y-2 align-center justify-center mt-2">
                    <VAvatar
                      variant="outlined"
                      size="84"
                      color="primary"
                      class="mb-2"
                    >
                      <Component :is="data.img"/>
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
        <VWindowItem
          value="技术服务"
          class="text-center"
        >
          <VContainer id="features">
            <div class="feature-cards">
              <VRow>
                <VCol
                  v-for="(data, index) in technologyService"
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
                      <Component :is="data.img"/>
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
        <VWindowItem
          value="认证服务"
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
                      <Component :is="data.img"/>
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
