<script setup lang="ts">
import page5 from '@images/pages/5.jpg'
import TopImg from '@/views/pages/TopImg.vue'

const name = ref('')
const email = ref('')
const phone = ref(null)
const message = ref('')
const isDialogVisible = ref(false)
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      title="联系我们"
      class="w-100"
    >
      <VRow class="ma-5">
        <VCard class="w-100">
          <div class="d-flex flex-column-reverse flex-md-row align-center justify-space-between">
            <div class="ma-3">
              <VCardText class="text-h5">
                深圳市贝岭能效技术有限公司
              </VCardText>
              <VCardText>
                地址：深圳市龙华区大浪街道新石社区石龙仔路14号美宝和工业园1栋西侧
              </VCardText>
              <VCardText>
                电话：0755-21038430
              </VCardText>
            </div>
            <div>
              <VImg
                :width="700"
                :height="300"
                :src="page5"
                cover
                rounded
              />
            </div>
          </div>
        </VCard>
        <VCard
          title="在线留言"
          class="w-100 mt-3"
        >
          <VRow class="d-flex justify-center">
            <VCol
              cols="12"
              md="6"
            >
              <VForm @submit.prevent="() => {}">
                <VRow>
                  <VCol cols="12">
                    <VRow no-gutters>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <label for="name">姓名</label>
                      </VCol>
                      <VCol
                        cols="12"
                        md="10"
                      >
                        <VTextField
                          v-model="name"
                          label="姓名"
                          clearable
                          :rules="[requiredValidator]"
                          clear-icon="ri-close-line"
                          placeholder="请输入姓名"
                        />
                      </VCol>
                    </VRow>
                  </VCol>
                  <VCol cols="12">
                    <VRow no-gutters>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <label for="phone">电话</label>
                      </VCol>
                      <VCol
                        cols="12"
                        md="10"
                      >
                        <VTextField
                          v-model="phone"
                          type="number"
                          clearable
                          label="电话"
                          :rules="[requiredValidator]"
                          clear-icon="ri-close-line"
                          placeholder="请输入电话"
                        />
                      </VCol>
                    </VRow>
                  </VCol>
                  <VCol cols="12">
                    <VRow no-gutters>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <label for="email">邮箱</label>
                      </VCol>
                      <VCol
                        cols="12"
                        md="10"
                      >
                        <VTextField
                          v-model="email"
                          clearable
                          label="邮箱"
                          clear-icon="ri-close-line"
                          placeholder="请输入邮箱"
                          :rules="[emailValidator, requiredValidator]"
                        />
                      </VCol>
                    </VRow>
                  </VCol>
                  <VCol cols="12">
                    <VRow no-gutters>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <label for="message">留言</label>
                      </VCol>
                      <VCol
                        cols="12"
                        md="10"
                      >
                        <VTextarea
                          v-model="message"
                          label="留言"
                          placeholder="请输入留言"
                          :rules="[requiredValidator]"
                        />
                      </VCol>
                    </VRow>
                  </VCol>
                  <VCol
                    cols="12"
                    md="9"
                    offset-md="3"
                    class="d-flex gap-4"
                  >
                    <VDialog
                      v-model="isDialogVisible"
                      width="500"
                    >
                      <template #activator="{ props }">
                        <VBtn v-bind="props">
                          确定
                        </VBtn>
                      </template>
                      <VCard title="提交成功">
                        <DialogCloseBtn
                          variant="text"
                          size="default"
                          @click="isDialogVisible = false"
                        />
                        <VCardText>
                          收到您的留言
                        </VCardText>
                        <VCardActions>
                          <VSpacer />
                          <VBtn @click="isDialogVisible = false">
                            确定
                          </VBtn>
                        </VCardActions>
                      </VCard>
                    </VDialog>
                    <!--                    <VBtn type="submit"> -->
                    <!--                      提交 -->
                    <!--                    </VBtn> -->
                    <VBtn
                      color="secondary"
                      variant="tonal"
                      type="reset"
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
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}
</style>
