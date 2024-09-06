<script lang="ts" setup>
import TopImg from '@/views/pages/TopImg.vue'

const code = ref('')
const router = useRouter()
const isDialogVisible = ref(false)

function navigateTo() {
  if (code.value.length === 0)
    isDialogVisible.value = true
  else
    router.push({ name: 'info-query-result', query: { id: code.value } })
}
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      class="w-100 pa-3"
      title="证书查询"
    >
      <VRow class="d-flex justify-center">
        <VCol
          cols="12"
          md="4"
          sm="8"
          xs="10"
          class="d-flex flex-column align-center justify-space-around"
        >
          <div class="w-100">
            <VTextField
              v-model="code"
              label="证书编号"
              placeholder="输入完整编号"
              :rules="[requiredValidator]"
            />
          </div>
          <VDialog
            v-model="isDialogVisible"
            width="500"
          >
            <VCard title="查询失败">
              <DialogCloseBtn
                variant="text"
                size="defalut"
                @click="isDialogVisible = false"
              />
              <VCardText>
                证书号不能为空
              </VCardText>
              <VCardActions>
                <VSpacer />
                <VBtn @click="isDialogVisible = false">
                  确定
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
          <VBtn
            size="large"
            class="w-100 ma-5"
            type="submit"
            @click="navigateTo"
          >
            查询
          </VBtn>

          <VBtn
            type="reset"
            color="secondary"
            variant="tonal"
            size="large"
            class="w-100"
          >
            重置
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}
</style>
