<script lang="ts" setup>
import NavImg from '@images/logo/nav.jpg'

const firstName = ref('')
const email = ref('')
const mobile = ref('')
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VRow>
    <VImg
      :src="NavImg"
      cover
    />
  </VRow>
  <VRow>
    <VCard class="w-100 d-flex justify-center" >
      <VForm @submit.prevent="() => {}" class="w-50">
        <VRow>
          <VCol cols="12">
            <VTextField
              v-model="firstName"
              label="证书编号"
              placeholder="输入完整编号"
            />
          </VCol>

          <VCol
            cols="12"
            class="d-flex flex-wrap gap-4"
          >
            <VBtn type="submit" class="w-100K">
              查询
            </VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="tonal"
              class="w-100"
            >
              重置
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}
</style>
