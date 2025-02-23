<script setup lang="ts">
import ItemDetail from '@/views/pages/news/items/ItemDetail.vue'
import pages5 from '@images/pages/5.jpg'

const props = defineProps<{ title: string }>()

const isShowDetail = ref(false)
const newsId = ref('')

const showDetail = (id: string) => {
  isShowDetail.value = true
  newsId.value = id
}

const articles = [
  {
    id: '1',
    title: 'Influencing The Influencer',
    content: 'Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism',
    time: '2024-08-11',
  },
  {
    id: '2',
    title: 'Influencing The Influencer',
    content: 'Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism',
    time: '2024-08-11',
  },
  {
    id: '3',
    title: 'Influencing The Influencer',
    content: 'Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism',
    time: '2024-08-11',
  },
  {
    id: '4',
    title: 'Influencing The Influencer',
    content: 'Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism',
    time: '2024-08-11',
  },
  {
    id: '5',
    title: 'Influencing The Influencer',
    content: 'Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism',
    time: '2024-08-11',
  },
]

const toggle = ref(true)
function changeGrid() {
  toggle.value = true
}
function changeList() {
  toggle.value = false
}
const currentPage = ref(1)
</script>

<template>
  <VRow>
    <VCard
      v-if="!isShowDetail"
      class="w-100 pa-3"
    >
      <VCol class="d-flex justify-space-between align-center title">
        <h2>{{ props.title }}</h2>
        <div>
          <VIcon
            color="primary"
            size="large"
            class="icon-grid"
            icon="ri-layout-grid-2-fill"
            @click="changeGrid"
          />
          <VIcon
            color="primary"
            size="large"
            icon="ri-list-unordered"
            @click="changeList"
          />
        </div>
      </VCol>
      <div class="d-flex mb-5 flex-wrap">
        <template v-if="toggle">
          <VCol
            v-for="item in articles"
            :key="item.id"
            cols="12"
            md="4"
          >
            <VCard
              class="h-100"
              @click="showDetail(item.id)"
            >
              <VImg
                :height="200"
                :src="pages5"
                cover
              />

              <VCardItem>
                <VCardTitle>{{ item.title }}</VCardTitle>
              </VCardItem>

              <VCardText>
                {{ item.content }}
              </VCardText>
              <VCardText>
                {{ item.time }}
              </VCardText>
            </VCard>
          </VCol>
        </template>
        <template v-if="!toggle">
          <VCol
            v-for="item in articles"
            :key="item.id"
            cols="12"
          >
            <VCard @click="showDetail(item.id)">
              <div class="item-container">
                <div class="item-txt">
                  <VCardItem>
                    <VCardTitle>{{ item.title }}</VCardTitle>
                  </VCardItem>

                  <VCardText>
                    {{ item.content }}
                  </VCardText>

                  <VCardText class="text-body-1">
                    <span>Time :</span> <span class="font-weight-medium">{{ item.time }}</span>
                  </VCardText>

                  <VCardActions class="justify-space-between">
                    <VBtn>
                      <span class="ms-2">查看详情</span>
                      <VIcon icon="ri-arrow-right-line" />
                    </VBtn>
                  </VCardActions>
                </div>
                <div class="item-img">
                  <VImg
                    :src="pages5"
                    cover
                  />
                </div>
              </div>
            </VCard>
          </VCol>
        </template>
      </div>
      <div>
        <VPagination
          v-model="currentPage"
          :length="15"
          :total-visible="$vuetify.display.mdAndUp ? 4 : $vuetify.display.sm ? 2 : 1 "
        />
      </div>
    </VCard>
    <VCard class="w-100 pa-3">
      <ItemDetail
        v-if="isShowDetail"
        :id="newsId"
      />
    </VCard>
  </VRow>
</template>

<style scoped lang="scss">
.icon-grid {
  margin-right: 1rem;
}
.item-container {
  display: flex;
  flex-wrap: nowrap !important;
  justify-content: space-between;
  align-items: center;
}
.item-txt {
  width: 60%;
}
.item-img {
  width: 40%;
  display: flex;
  justify-content: end;
  flex-wrap: nowrap;
  align-items: center;
  height: 15rem;
}
</style>
