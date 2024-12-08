<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'
import TestItem from '@/views/pages/news/services/TestItem.vue'
import AuthItem from '@/views/pages/news/services/AuthItem.vue'

const activeList = ref('Test')
const activeTab = ref('Test')

console.log(activeList.value, activeTab.value)

const test = [
  ['Safety安全检测', 'ri-shield-flash-line', 'safety'],
  ['Efficiency能效检测', 'ri-lightbulb-line', 'efficiency'],
  ['EMC电磁兼容检测', 'ri-pulse-line', 'emc'],
  ['射频测试', 'ri-signal-tower-line', 'rf'],
  ['化学测试', 'ri-settings-5-line', 'chemical'],
  ['光生物激光测试', 'ri-sun-line', 'laser'],
  ['Reliability 可靠性测试', 'ri-verified-badge-line', 'reliability'],
]

const technical = [
  ['安规整改', 'ri-hammer-line', 'regulation'],
  ['验厂辅导', 'ri-list-check', 'factory'],
  ['EMC整改', 'ri-signal-tower-line', 'rectification'],
  ['跨境电商合规辅导', 'ri-global-line', 'e-commerce'],
]

const country = [
  ['north-america', '北美认证', [
    'UL', 'ETL', 'CSA', 'Energystar', 'DLC', 'CEC', 'DOE LM-80', 'LM-79', 'FCC', 'IC', 'FDA',
  ]],
  ['european', '欧洲认证', [
    'CE', 'CB', 'GS', 'ENEC', 'TUV Mark', 'ERP', 'Rohs', 'REACH', 'PAHS',
  ]],
  ['australia', '澳大利亚认证', [
    'SAA', 'RCM', 'LCP',
  ]],
  ['china', '中国认证', [
    'CCC', 'CQC', '中国节能认证',
  ]],
  ['asia', '亚洲认证', [
    '日本MIC认证', '日本PSE认证', '日本VCCI认证', '日本JATE认证', '日本TELEC认证', '日本METI备案', '新加坡IMDA认证', '新加坡CPS认证', '韩国KC认证',
  ]],
  ['south-america', '南美认证', [
    '巴西INMETRO认证', '墨西哥NOM认证', '阿根廷IRAM认证',
  ]],
  ['other', '其他国家认证', [
    'CB认证', 'BQB蓝牙认证', 'UN38.3认证', 'TUV Mark认证',
  ]],
]

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
            v-model="activeList"
            :lines="false"
            nav
          >
            <VListGroup value="Test">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-bug-line"
                  title="检测项目"
                />
              </template>
              <VListItem
                v-for="([title, icon, value], i) in test"
                :key="i"
                :value="value"
                :title="title"
                :prepend-icon="icon"
                :to="{ name: 'services-tab', params: { tab: value } }"
              />
            </VListGroup>

            <VListGroup value="Credential">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-verified-badge-line"
                  title="国际认证"
                />
              </template>

              <VListGroup
                v-for="([value, title, items], i) in country"
                :key="i"
                :value="value"
              >
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    :title="title as string"
                  />
                </template>

                <VListItem
                  v-for="(item, i) in items"
                  :key="i"
                  :value="item"
                  :title="item"
                  :to="{ name: 'services-tab', params: { tab: item } }"
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
      <VWindow
        v-model:active-item="activeTab"
        class="disable-tab-transition"
        :touch="false"
      >
        <VWindowItem v-if="activeList === 'Test'">
          <TestItem />
        </VWindowitem>
        <VWindowItem v-if="activeList === 'Credential'">
          <AuthItem />
        </VWindowitem>
      </VWindow>
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
