<script setup lang="ts">
import axios from 'axios'

const route = useRoute('info-query-detail')
const isFind = ref(true)
let msg = {}

try {
  const response = await axios.get(`http://api.xxx.com/pdf/${route.query.id}`)

  msg = response.data.data
  isFind.value = true
}
catch (err) {
  isFind.value = false
  console.log(`查询失败：${err}`)
}

console.log(msg)

const certInfo = [
  { label: '编      号', value: msg.number },
  { label: '公司名称', value: msg.company },
  { label: '产品名称', value: msg.product },
  { label: '产品型号', value: msg.model },
  { label: '认证时间', value: msg.date },
]
</script>

<template>
  <VRow v-if="isFind">
    <VCol
      v-for="(item, idx) in certInfo"
      :key="idx"
      cols="12"
    >
      <VRow class="ma-0">
        <VCol
          cols="5"
          class="text-right text-h5 font-weight-bold"
        >
          <div class="d-flex justify-end">
            <span class="label"> {{ item.label }}：</span>
          </div>
        </VCol>
        <VCol cols="7">
          <div class="d-flex justify-start">
            <span class="text-h5">
              {{ item.value }}
            </span>
          </div>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
  <VRow
    v-if="!isFind"
    class="d-flex justify-center pa-2"
  >
    <VCol
      cols="12"
      md="4"
      class="ma-5 text-h3"
    >
      查询失败，未找到相关证书！
    </VCol>
  </VRow>
  <VRow class="d-flex justify-center pa-2">
    <VCol
      cols="12"
      md="2"
      sm="4"
      class="d-flex justify-center align-center ma-5"
    >
      <VBtn
        class="mb-5 w-100"
        size="large"
        @click="$router.back()"
      >
        返回
      </VBtn>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
.label {
  display: flex;
  justify-content: space-between;
  white-space: pre;
}
</style>
