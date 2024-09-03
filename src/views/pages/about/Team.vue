<script setup lang="ts">
import teamPerson1 from '@images/pages/teamPerson1.png'
import teamPerson2 from '@images/pages/teamPerson2.png'
import teamPerson3 from '@images/pages/teamPerson3.png'
import teamPerson4 from '@images/pages/teamPerson4.png'

const teamData = ref([
  { name: 'Sophie Gilbert', position: 'Project Manager', image: teamPerson1, backgroundColor: 'rgba(144, 85, 253, 0.16)', borderColor: 'rgba(144, 85, 253,0.38)', isHover: true },
  { name: 'Nannie Ford', position: 'Development Lead', image: teamPerson2, backgroundColor: 'rgba(255, 76, 81, 0.16)', borderColor: 'rgba(255, 76, 81,0.38)', isHover: false },
  { name: 'Chris Watkins', position: 'Marketing Manager', image: teamPerson3, backgroundColor: 'rgba(86, 202, 0, 0.16)', borderColor: 'rgba(86, 202, 0,0.38)', isHover: false },
  { name: 'Paul Miles', position: 'UI Designer', image: teamPerson4, backgroundColor: 'rgba(22, 177, 255, 0.16)', borderColor: 'rgba(22, 177, 255,0.38)', isHover: false },
])

const isDialogVisible = ref(false)
const member = ref()

const showMessage = data => {
  isDialogVisible.value = true
  member.value = data
  console.log(member.value.image)
}
</script>

<template>
  <VRow>
    <VCard class="w-100">
      <div class="our-team">
        <h2 class="text-center">
          团队介绍
        </h2>
        <VRow>
          <VCol
            v-for="(data, index) in teamData"
            :key="index"
            cols="12"
            lg="3"
            sm="6"
          >
            <VCard
              flat
              variant="outlined"
              min-width="267"
              class="position-relative overflow-visible mt-16"
              :style="data.isHover ? { border: `1px solid ${data.borderColor}` } : {}"
              @mouseenter="data.isHover = true"
              @mouseleave="data.isHover = false"
              @click="showMessage(data)"
            >
              <VImg
                :src="data.image"
                height="240px"
                class="team-image"
              />
              <div :style="{ maxHeight: '185px', minHeight: '185px', backgroundColor: data.backgroundColor }" />
              <VCardText class="text-center">
                <div class="mb-3">
                  <h5 class="text-h5">
                    {{ data.name }}
                  </h5>
                  <div class="text-body-1 text-medium-emphasis">
                    {{ data.position }}
                  </div>
                </div>

                <div class="d-flex gap-x-2 align-center justify-center">
                  <template
                    v-for="{ icon, color } in [
                      { icon: 'ri-mail-line', color: 'rgba(0, 119, 181, 1)', link: 'https://linkedin.com' },
                    ]"
                    :key="color"
                  >
                    <VIcon
                      :icon="icon"
                      size="22"
                      :color="data.isHover ? color : ''"
                      class="cursor-pointer"
                    />
                  </template>
                </div>
              </VCardText>
            </VCard>
            <VDialog
              v-model="isDialogVisible"
              width="500"
            >
              <VCard title="成员信息">
                <DialogCloseBtn
                  variant="text"
                  size="default"
                  @click="isDialogVisible = false"
                />
                <VRow>
                  <VCol
                    cols="12"
                    md="5"
                    class="pa-5"
                  >
                    <VImg
                      :src="member.image"
                      width="200"
                      class="ma-auto"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="7"
                  >
                    <VCardText class="text-h5">
                      {{ member.name }}
                    </VCardText>
                    <VCardText class="text-h5">
                      {{ member.position }}
                    </VCardText>
                    <VCardText class="text-body-1">
                      content
                    </VCardText>
                  </VCol>
                </VRow>
              </VCard>
            </VDialog>
          </VCol>
        </VRow>
      </div>
    </VCard>
  </VRow>
</template>

<style lang="scss" scoped>
.team-image {
  position: absolute;
  inset-block-start: -3.4rem;
  inset-inline: 0;
}

.headers {
  margin-block-end: 1.25rem;
}

.our-team {
  padding: 1rem;
  margin-block: 3.25rem;
}
</style>
