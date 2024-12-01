<script setup lang="ts">
import { themeConfig } from '@themeConfig'
import logo65 from '@images/logo/belling-logo-65.png'
import kewin from '@images/contacts/kewin.webp'
import bonnie from '@images/contacts/bonnie.webp'

interface Menu {
  name: string
  to: any
  isNew?: boolean
}

const services: Menu[] = [
  { name: 'Efficiency Test', to: { name: '' } },
  { name: 'Safety Test', to: { name: '' } },
  { name: 'EMC Test', to: { name: '' } },
  { name: 'RF Test', to: { name: '' } },
  { name: 'Chemical Test', to: { name: '' } },
  { name: 'Laser Product Test', to: { name: '' } },
  { name: 'Reliability Test', to: { name: '' } },
]

const powers: Menu[] = [
  { name: 'North America Certification', to: { name: '' } },
  { name: 'European Certification', to: { name: '' } },
  { name: 'Australia Certification', to: { name: '' } },
  { name: 'Asia Certification', to: { name: '' } },
  { name: 'South America Certification', to: { name: '' } },
  { name: 'China Certification', to: { name: '' } },
  { name: 'Other Certifications', to: { name: '' } },
]

const news: Menu[] = [
  { name: 'Company News', to: { name: '' } },
  { name: 'Industry Information', to: { name: '' } },
  { name: 'Standard Code', to: { name: '' } },
]

const products: Menu[] = [
  { name: 'Luminaries Test', to: { name: '' } },
  { name: 'Home Appliance Test', to: { name: '' } },
  { name: 'Wireless Device Test', to: { name: '' } },
  { name: 'IT/AV Media', to: { name: '' } },
  { name: 'Smart Product Test', to: { name: '' } },
  { name: 'Laboratory Equipment Test', to: { name: '' } },
  { name: 'More Test', to: { name: '' } },
]
</script>

<template>
  <div class="footer">
    <VSheet
      class="footer-top"
      theme="dark"
    >
      <VContainer>
        <VRow>
          <!-- 👉 Footer  -->
          <VCol
            cols="12"
            lg="5"
          >
            <div class="mb-4 footer-form">
              <div class="d-flex align-center gap-x-3 mb-6">
                <img
                  :src="logo65"
                  alt="Belling Logo"
                  class="index-logo"
                >
                <div class="footer-title">
                  {{ $t(themeConfig.app.title) }}
                </div>
              </div>
            </div>
          </VCol>

          <!-- 👉 Pages -->
          <VCol>
            <div class="d-flex justify-space-between  flex-grow-1 gap-x-16 gap-y-8 flex-md-row flex-column">
              <div>
                <div class="footer-heading mb-6">
                  {{ $t('Test Items') }}
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in services"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ $t(item.name) }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  {{ $t('Global Certification') }}
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in powers"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ $t(item.name) }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  {{ $t('Products Testing') }}
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in products"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ $t(item.name) }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  {{ $t('News Center') }}
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in news"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ $t(item.name) }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <!-- 👉 Download App -->
              <div class="d-flex flex-column align-end">
                <div class="d-flex footer-heading mb-6 gap-4">
                  <div>
                    <VImg
                      :src="bonnie"
                      alt="Bonnie Lai"
                      :width="100"
                    />
                  </div>
                  <div>
                    <VImg
                      :src="kewin"
                      alt="Kewin Liu"
                      :width="100"
                    />
                  </div>
                </div>
                <div class="footer-heading mb-6 text-h3 text-no-wrap">
                  159-8938-1627
                </div>
                <div class="footer-heading mb-6 text-h3 text-no-wrap">
                  137-2348-0550
                </div>
                <div>
                  <span class="d-block mb-4">
                    {{ $t('Company Address') }}
                  </span>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </VSheet>

    <div class="footer-line w-100">
      <VContainer>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <!-- 👉 Footer: left content -->
          <span class="d-flex align-center">
            &copy;
            {{ new Date().getFullYear() }}
            Made With
            <VIcon
              icon="ri-heart-line"
              color="error"
              size="1.25rem"
              class="mx-1"
            />
            By <a
              href="//JooTang.cn"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary ms-1"
            >JooTang</a>
          </span>
          <!-- 👉 Footer: right content -->
          <span class="d-md-flex gap-x-4 text-primary d-none">
            <a
              href="mailto:mp@jootang.cn"
              target="noopener noreferrer"
            >Documentation</a>
          </span>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-heading{
  color: rgba(255, 255, 255, var(--v-high-emphasis-opacity));
  font-weight: 500;
}

.footer-text{
  color: rgba(255, 255, 255, var(--v-medium-emphasis-opacity));
}

.footer-title{
  color: rgba(255, 255, 255, var(--v-high-emphasis-opacity));
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
}

.footer-line {
  background: #211b2c;
  color: rgba(255, 255, 255, var(--v-medium-emphasis-opacity));
  font-size: 13px;
  line-height: 20px;
}

.footer{
  color: rgba(255, 255, 255, 70%);
}
</style>

<style lang="scss" scoped>
.footer {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}

.footer-form{
  @media (min-width: 1280px) {
    max-inline-size: 400px;
  }
}
</style>
