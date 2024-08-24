<script setup lang="ts">
import appleImg from '@images/icons/brands/facebook.png'
import googlePlayImg from '@images/icons/brands/google.png'
import { themeConfig } from '@themeConfig'
import logo65 from '@images/logo/belling-logo-65.png'

interface Menu {
  name: string
  to: any
  isNew?: boolean
}

const services: Menu[] = [
  { name: '产品检测', to: { name: '' } },
  { name: '国际认证', to: { name: '' } },
  { name: '检测项目', to: { name: '' } },
  { name: '在线预约', to: { name: '' } },
]

const powers: Menu[] = [
  { name: '资质证书', to: { name: '' } },
  { name: '实验室环境', to: { name: '' } },
  { name: '合作客户', to: { name: '' } },
]

const news: Menu[] = [
  { name: '公司新闻', to: { name: '' } },
  { name: '行业资讯', to: { name: '' } },
  { name: '技术文章', to: { name: '' } },
]

const abouts: Menu[] = [
  { name: '公司简介', to: { name: '' } },
  { name: '发展历程', to: { name: '' } },
  { name: '资质认证', to: { name: '' } },
  { name: '团队介绍', to: { name: '' } },
]

const contacts: Menu[] = [
  { name: '联系方式', to: { name: '' } },
  { name: '在线留言', to: { name: '' } },
  { name: '公司地址', to: { name: '' } },
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
                  服务项目
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
                        <div>{{ item.name }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  公司实力
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
                        <div>{{ item.name }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  新闻中心
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
                        <div>{{ item.name }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  关于我们
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in abouts"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ item.name }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <div class="footer-heading mb-6">
                  联系我们
                </div>
                <ul style="list-style: none;">
                  <li
                    v-for="(item, index) in contacts"
                    :key="index"
                    class="mb-4"
                  >
                    <RouterLink
                      class="footer-text text-no-wrap"
                      :to="item.to"
                    >
                      <div class="d-flex align-center">
                        <div>{{ item.name }}</div>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <!-- 👉 Download App -->
              <div>
                <div class="footer-heading mb-6">
                  Download our app
                </div>
                <div>
                  <VBtn
                    v-for="(item, index) in [
                      { image: appleImg, store: 'App Store' },
                      { image: googlePlayImg, store: 'Google Play' },
                    ]"
                    :key="index"
                    color="#211B2C"
                    size="x-large"
                    class="mb-4 d-block"
                  >
                    <template #default>
                      <div class="d-flex gap-x-3">
                        <div>
                          <VImg
                            :src="item.image"
                            height="34"
                            width="34"
                          />
                        </div>
                        <div>
                          <div class="text-body-2 text-white">
                            Download on the
                          </div>
                          <div class="text-body-2 font-weight-medium text-white">
                            {{ item.store }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </VBtn>
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
