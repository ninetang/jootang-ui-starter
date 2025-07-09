<script setup lang="ts">
const statData = ref([
  { value: '合作', color: 'primary', isHover: false },
  { value: '诚信', color: 'success', isHover: false },
  { value: '品质', color: 'warning', isHover: false },
  { value: '共赢', color: 'primary', isHover: false },
  { value: '执行', color: 'success', isHover: false },
  { value: '创新', color: 'warning', isHover: false },
])
</script>

<template>
  <VRow>
    <VCard class="w-100">
      <h2 class="text-center mt-15">
        公司理念
      </h2>
      <div :style="{ 'background-color': 'rgb(var(--v-theme-surface))' }">
        <VContainer>
          <div class="py-1">
            <VRow>
              <VCol
                v-for="(product, index) in statData"
                :key="index"
                cols="12"
                md="2"
                sm="4"
              >
                <VCard flat>
                  <VCardText class="text-center">
                    <VAvatar
                      size="100"
                      :color="product.color"
                      :variant="product.isHover ? 'elevated' : 'tonal'"
                      class="mb-6 cursor-pointer"
                      @mouseenter="() => product.isHover = true"
                      @mouseleave="product.isHover = false"
                    >
                      <div style="font-size: 1.5rem">
                        {{ product.value }}
                      </div>
                    </VAvatar>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </div>
        </VContainer>
      </div>
    </VCard>
  </VRow>
</template>
