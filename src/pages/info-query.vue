<script lang="ts" setup>
import NavImg from '@images/logo/nav.jpg'

const code = ref('')
const isDialogVisible = ref(false)
</script>

<template>
  <VRow>
    <VImg
      :src="NavImg"
      cover
    />
  </VRow>
  <VRow>
    <VCard
      class="w-100"
      title="证书查询"
    >
      <VRow class="d-flex justify-center">
        <VCol
          cols="12"
          md="4"
        >
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="code"
                  label="证书编号"
                  placeholder="输入完整编号"
                />
              </VCol>

              <VCol
                cols="12"
                class="d-flex flex-wrap justify-center gap-4"
              >
                <VDialog
                  v-model="isDialogVisible"
                  width="500"
                >
                  <template #activator="{ props }">
                    <VBtn
                      v-bind="props"
                      size="large"
                      class="w-100"
                    >
                      查询
                    </VBtn>
                  </template>
                  <VCard title="查询成功">
                    <DialogCloseBtn
                      variant="text"
                      size="defalut"
                      @click="isDialogVisible = false"
                    />
                    <VCardText>
                      证书详情
                    </VCardText>
                    <VCardActions>
                      <VSpacer />
                      <VBtn @click="isDialogVisible = false">
                        确定
                      </VBtn>
                    </VCardActions>
                  </VCard>
                </VDialog>
                <!--                <VBtn -->
                <!--                  type="submit" -->
                <!--                  size="large" -->
                <!--                  class="w-100" -->
                <!--                > -->
                <!--                  查询 -->
                <!--                </VBtn> -->

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
          </VForm>
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
