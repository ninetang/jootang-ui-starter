<script setup lang="ts">
const props = defineProps({
  activeId: String,
})

const navTabs = [
  {
    name: '公司简介',
    value: 'profile',
  },
  {
    name: '企业愿景',
    value: 'wish',
  },
  {
    name: '公司历史',
    value: 'history',
  },
  {
    name: '资质认证',
    value: 'certification',
  },
  {
    name: '团队介绍',
    value: 'team',
  },
  {
    name: '公司理念',
    value: 'culture',
  },
]
</script>

<template>
  <VRow class="d-flex text-h5 align-center gap-10 nav">
    <RouterLink
      v-for="item in navTabs"
      :key="item.value"
      class="nav-link font-weight-medium"
      :to="{ name: 'about', hash: `#${item.value}` }"
      :class="[props.activeId === item.value ? 'active-link' : '']"
    >
      {{ item.name }}
    </RouterLink>
  </VRow>
</template>

<style scoped lang="scss">
.nav{
  position: sticky;
  top: 0;
  background-color: #eeeeee;
  margin-top: -1rem;
  height: 4rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  z-index: 1;
}
.nav-link{
  padding-inline: 0.625rem;

  &:not(:hover){
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))
  }
}
.active-link{
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
