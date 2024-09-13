<script lang="ts" setup>
import axios from 'axios'
import TopImg from '@/views/pages/TopImg.vue'

const code = ref('')
const router = useRouter()
const isDialogVisible = ref(false)
const isUploadFile = ref(false)
const files = ref([])

function navigateTo() {
  if (code.value)
    router.push({ name: 'info-query-result', query: { id: code.value } })
  else
    isDialogVisible.value = true
}

async function uploadFiles() {
  const formData = new FormData()

  Array.from(files.value).forEach(file => {
    formData.append('pdf', file)
  })

  await axios.post('http://api.xxx.com/pdf/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(res => {
    console.log(res.data)
  }).catch(error => {
    console.error(`上传失败：${error}`)
  }).finally(() => {
    isUploadFile.value = false
  })
}

function handleUploadFile(event) {
  files.value = Array.from(event.target.files)
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
            @click="code = ''"
          >
            重置
          </VBtn>
          <VBtn
            color="primary"
            size="large"
            class="w-100 ma-5"
            @click="isUploadFile = true"
          >
            上传证书
          </VBtn>
          <VDialog
            v-model="isUploadFile"
            width="500"
          >
            <VCard title="上传证书">
              <DialogCloseBtn
                variant="text"
                size="defalut"
                @click="isUploadFile = false"
              />
              <VCardActions class="ma-5">
                <VFileInput
                  label="请选择一个或多个PDF证书"
                  accept="application/pdf"
                  multiple
                  show-size
                  counter
                  chips
                  @change="handleUploadFile"
                />
              </VCardActions>
              <VCardActions>
                <VSpacer />
                <VBtn
                  color="primary"
                  @click="uploadFiles"
                >
                  确定
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
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
