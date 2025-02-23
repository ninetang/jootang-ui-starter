<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'

const activeTab = ref('')
const selectCountry = ref('')
const TestItem = defineAsyncComponent(() => import('@/views/pages/news/services/TestItem.vue'))
const AuthItem = defineAsyncComponent(() => import('@/views/pages/news/services/AuthItem.vue'))

const test = [
  ['Safety安全检测', 'ri-shield-flash-line', 'safety', 'Test'],
  ['Efficiency能效检测', 'ri-lightbulb-line', 'efficiency', 'Test'],
  ['EMC电磁兼容检测', 'ri-pulse-line', 'emc', 'Test'],
  ['射频测试', 'ri-signal-tower-line', 'rf', 'Test'],
  ['化学测试', 'ri-settings-5-line', 'chemical', 'Test'],
  ['光生物激光测试', 'ri-sun-line', 'laser', 'Test'],
  ['Reliability 可靠性测试', 'ri-verified-badge-line', 'reliability', 'Test'],
]

const technical = [
  ['安规整改', 'ri-hammer-line', 'regulation'],
  ['验厂辅导', 'ri-list-check', 'factory'],
  ['EMC整改', 'ri-signal-tower-line', 'rectification'],
  ['跨境电商合规辅导', 'ri-global-line', 'e-commerce'],
]

const country = [
  {
    value: 'northAmerica',
    title: '北美认证',
    items: [
      'UL', 'ETL', 'CSA', 'Energystar', 'DLC', 'CEC', 'DOE LM-80', 'LM-79', 'FCC', 'IC', 'FDA',
    ],
    tab: 'Credential',
  },
  {
    value: 'europe',
    title: '欧洲认证',
    items: [
      'CE', 'CB', 'GS', 'ENEC', 'TUV Mark', 'ERP', 'Rohs', 'REACH', 'PAHS',
    ],
    tab: 'Credential',
  },
  {
    value: 'australia',
    title: '澳大利亚认证',
    items: [
      'SAA', 'RCM', 'LCP',
    ],
    tab: 'Credential',
  },
  {
    value: 'china',
    title: '中国认证',
    items: [
      'CCC', 'CQC', '中国节能认证',
    ],
    tab: 'Credential',
  },
  {
    value: 'asia',
    title: '亚洲认证',
    items: [
      '日本MIC认证',
      '日本PSE认证',
      '日本VCCI认证',
      '日本JATE认证',
      '日本TELEC认证',
      '日本METI备案',
      '新加坡IMDA认证',
      '新加坡CPS认证',
      '韩国KC认证',
    ],
    tab: 'Credential',
  },
  {
    value: 'southAmerica',
    title: '南美认证',
    items: [
      '巴西INMETRO认证', '墨西哥NOM认证', '阿根廷IRAM认证',
    ],
    tab: 'Credential',
  },
  {
    value: 'other',
    title: '其他国家认证',
    items: [
      'CB认证', 'BQB蓝牙认证', 'UN38.3认证', 'TUV Mark认证',
    ],
    tab: 'Credential',
  },
]

const activeComponent = computed(() => {
  const componentMap = {
    Test: TestItem,
    Credential: AuthItem,
  }

  return componentMap[activeTab.value] || null
})

const activeItem = item => {
  activeTab.value = item.tab
  country.value = item.value
}

const route = useRoute()

watch(() => route.params, (newValue, oldValue) => {
  console.log('newValue', newValue.tab)
  console.log('oldValue', oldValue.tab)
})

definePage({
  meta: {
    navActiveLink: 'services-tab',
  },
})
</script>

<template>
  <TopImg />
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <VRow class="navRow">
        <VCard class="w-100">
          <VListItem class="title pl-4 font-weight-bold">
            <template #prepend>
              <VIcon icon="ri-service-line" />
            </template>
            <VListItemTitle>
              服务项目
            </VListItemTitle>
          </VListItem>
          <VList
            v-model="activeTab"
            nav
          >
            <VListGroup>
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-bug-line"
                  title="检测项目"
                />
              </template>
              <VListItem
                v-for="([title, icon, value, tab], i) in test"
                :key="i"
                :value="value"
                :title="title"
                :prepend-icon="icon"
                :to="{ name: 'services-tab', params: { tab: value } }"
                @click="activeTab = tab"
              />
            </VListGroup>

            <VListGroup>
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-verified-badge-line"
                  title="国际认证"
                />
              </template>

              <VListGroup
                v-for="(item, i) in country"
                :key="i"
                :value="item.value"
              >
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    :title="item.title"
                  />
                </template>

                <VListItem
                  v-for="(subItem, i) in item.items"
                  :key="i"
                  :value="subItem"
                  :title="subItem"
                  :to="{ name: 'services-tab', params: { tab: `${item.value}/${subItem}` } }"
                  @click="activeItem(item)"
                />
              </VListGroup>
            </VListGroup>
          </VList>
        </VCard>
      </VRow>
    </VCol>
    <VCol
      cols="12"
      md="9"
    >
      <component
        :is="activeComponent"
        :select-country="selectCountry"
      />
      <!--      <VWindow -->
      <!--        v-model="activeTab" -->
      <!--        class="disable-tab-transition" -->
      <!--      > -->
      <!--        <VWindowItem value="Credential"> -->
      <!--          <AuthItem /> -->
      <!--        </VWindowItem> -->
      <!--        <VWindowItem value="Test"> -->
      <!--          <TestItem /> -->
      <!--        </VWindowItem> -->
      <!--      </VWindow> -->
    </VCol>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}

.navRow {
  margin-left: auto;
  margin-right: auto;
}

.title {
  background: linear-gradient(to right, rgb(127, 199, 253), rgb(74, 175, 253));
  color: white;
}
</style>
