<script setup lang="ts">
import cultureBg from '@images/banner/culture.jpg'

const cultureData = ref([
  {
    icon: 'ri-stack-line',
    title: '我们的使命',
    description: '在追求全体员工物质和精神两方面幸福的同时，为人类社会的进步发展做出贡献',
  },
  {
    icon: 'ri-rocket-line',
    title: '我们的愿景',
    description: '致力于成为全球行业的领航者',
  },
  {
    icon: 'ri-heart-line',
    title: '核心价值观',
    description: '心存敬畏，行有所止',
  },
  {
    icon: 'ri-medal-2-line',
    title: '我们的宗旨',
    description: '以心为本的经营，贯彻顾客至上主义，为员工为公司创造财富，为人类社会作出应有的贡献',
  },
])
</script>

<template>
  <VRow>
    <VCard
      flat
      class="w-100 company-culture-wrapper"
    >
      <div
        class="culture-background"
        :style="`background-image: url(${cultureBg});`"
      />
      <div class="company-culture">
        <h2 class="text-center text-h4 mb-6 text-white">
          企业文化
        </h2>
        <VRow class="culture-cards-row">
          <VCol
            v-for="(item, index) in cultureData"
            :key="index"
            cols="12"
            lg="6"
            md="6"
            sm="6"
          >
            <VCard
              flat
              class="culture-card"
            >
              <VCardText class="text-center culture-card-content">
                <VIcon
                  :icon="item.icon"
                  size="64"
                  color="primary"
                  class="mb-4 culture-icon"
                />
                <h4 class="text-h5 font-weight-bold mb-3">
                  {{ item.title }}
                </h4>
                <p class="text-body-1">
                  {{ item.description }}
                </p>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VCard>
  </VRow>
</template>

<style lang="scss" scoped>
.company-culture-wrapper {
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.culture-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    backdrop-filter: blur(1px);
  }
}

.company-culture {
  position: relative;
  z-index: 2;
  padding: 2rem 1.5rem;
  margin-block: 2rem;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
}

.culture-cards-row {
  margin-top: 0;
}

.culture-card {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .culture-card-content {
    padding: 1.5rem 1rem !important;
    width: 100%;
  }

  .culture-icon {
    opacity: 0.9;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
}

:deep(.text-body-1) {
  line-height: 1.8;
  color: rgba(var(--v-theme-on-surface), 0.87);
  font-size: 1rem;
}
</style>
