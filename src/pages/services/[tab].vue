<script lang="ts" setup>
import AuthItem from '@/views/pages/news/services/AuthItem.vue'
import TopImg from '@/views/pages/TopImg.vue'

const open = ref(['Test', 'Admin'])

const route = useRoute('services-tab')
const router = useRouter()

const activeList = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

const test = [
  ['Efficiency 能效测试', 'ri-lightbulb-line'],
  ['Safety 电器安全', 'ri-shield-flash-line'],
  ['EMC 电磁兼容', 'ri-pulse-line'],
  ['Chemical 化学测试', 'ri-settings-5-line'],
  ['Reliability 可靠性测试', 'ri-verified-badge-line'],
]

const technical = [
  ['安规整改', 'ri-hammer-line'],
  ['验厂辅导', 'ri-list-check'],
  ['EMC整改', 'ri-signal-tower-line'],
  ['跨境电商合规辅导', 'ri-global-line'],
]

const country = [
  ['China', '中国认证', [
    'CCC认证1', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['Asia', '亚洲认证', [
    'CCC认证2', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['MiddleEast', '中东认证', [
    'CCC认证3', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['NorthAmerica', '北美洲认证', [
    'CCC认证4', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['SouthAmerica', '南美洲认证', [
    'CCC认证5', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['Europe', '欧洲认证', [
    'CCC认证6', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['Australia', '澳大利亚认证', [
    'CCC认证7', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['Africa', '非洲认证', [
    'CCC认证8', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
  ['Other', '其他认证', [
    'CCC认证9', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证', 'CFDA', 'OFCA认证', 'NMPA', 'CTA认证', 'CR认证',
  ]],
]

definePage({
  meta: {
    navActiveLink: 'services-tab',
  },
})

const title = ref<string>('')
function navigateTo(item) {
  title.value = item
  activeList.value = item
  router.push({ name: 'services-tab', params: { tab: item } })
}
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
            nav
          >
            <VListGroup value="Test">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-bug-line"
                  title="测试服务"
                />
              </template>
              <VListItem
                v-for="([title, icon], i) in test"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
                @click="navigateTo(title)"
              />
            </VListGroup>
            <VListGroup value="Technical">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-tools-line"
                  title="技术服务"
                />
              </template>
              <VListItem
                v-for="([title, icon], i) in technical"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
                @click="navigateTo(title)"
              />
            </VListGroup>

            <VListGroup value="Credential">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-verified-badge-line"
                  title="认证服务"
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
                  @click="navigateTo(item)"
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
        class="disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <AuthItem :title="title" />
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
  background: linear-gradient(to right, rgb(127,199,253), rgb(74,175,253));
  color: white;
}
</style>
