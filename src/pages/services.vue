<script lang="ts" setup>
const open = ref(['Test', 'Admin'])

const admins = [
  ['Management', 'ri-group-line'],
  ['Settings', 'ri-settings-5-line'],
]

const cruds = [
  ['Create', 'ri-add-line'],
  ['Read', 'ri-file-line'],
  ['Update', 'ri-refresh-line'],
  ['Delete', 'ri-delete-bin-line'],
]

const country = [
  '中国认证', '亚洲认证', '中东认证', '北美洲认证', '南美洲认证', '欧洲认证', '澳大利亚认证', '非洲认证', '其他认证',
]

const China = [
  'CCC认证', 'CQC认证', 'BSMI认证', '台湾NCC认证', '电商质检', 'SRRC认证','CFDA'
]
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
    >
      <VRow>
        <VCard class="w-100">
          <VListItem class="title pl-4 font-weight-bold">
            <template #prepend>
              <VIcon
                icon="ri-news-line"
                class="me-3"
              />
            </template>
            <VListItemTitle>
              服务项目
            </VListItemTitle>
          </VListItem>
          <VList v-model:opened="open">
            <VListGroup value="Test">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-user-line"
                  title="测试服务"
                />
              </template>

              <VListGroup value="Admin">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    title="Admin"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in admins"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                />
              </VListGroup>

              <VListGroup value="Actions">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    title="Actions"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in cruds"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                />
              </VListGroup>
            </VListGroup>
            <VListGroup value="Credential">
              <template #activator="{ props }">
                <VListItem
                  v-bind="props"
                  prepend-icon="ri-user-line"
                  title="认证服务"
                />
              </template>

              <VListGroup value="China">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    title="中国认证"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in admins"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                />
              </VListGroup>

              <VListGroup value="Actions">
                <template #activator="{ props }">
                  <VListItem
                    v-bind="props"
                    title="Actions"
                  />
                </template>

                <VListItem
                  v-for="([title, icon], i) in cruds"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
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
      <VWindow>
        <VWindowItem />
      </VWindow>
    </VCol>
  </VRow>
</template>

<style scoped>
.title {
  background: linear-gradient(to right, rgb(127,199,253), rgb(74,175,253));
  color: white;
}
</style>
