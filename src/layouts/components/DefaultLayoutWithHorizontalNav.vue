<script lang="ts" setup>
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import navItems from '@/navigation/horizontal'
import NavBarI18n from '@core/components/I18n.vue'

import logo65 from '@images/logo/belling-logo-65.png'
import { HorizontalNavLayout } from '@layouts'

// import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

import { themeConfig } from '@themeConfig'

// SECTION: Loading Indicator
const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref<any>(null)

// watching if the fallback state is active and the refLoadingIndicator component is available
watch([isFallbackStateActive, refLoadingIndicator], () => {
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()

  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar>
      <RouterLink
        to="/"
        class="d-flex align-start gap-x-4"
      >
        <!--        <VNodeRenderer :nodes="themeConfig.app.logo" /> -->
        <img
          :src="logo65"
          alt="Belling Logo"
          class="index-logo"
        >
        <h1 class="leading-normal text-xl text-uppercase site-name ">
          {{ $t(themeConfig.app.title) }}
        </h1>
      </RouterLink>
      <VSpacer />

      <NavBarI18n
        v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
        :languages="themeConfig.app.i18n.langConfig"
      />

      <NavbarThemeSwitcher class="me-2" />
      <UserProfile />
    </template>

    <AppLoadingIndicator ref="refLoadingIndicator" />

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Suspense
        :timeout="0"
        @fallback="isFallbackStateActive = true"
        @resolve="isFallbackStateActive = false"
      >
        <Component :is="Component" />
      </Suspense>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </HorizontalNavLayout>
</template>

<style lang="scss">
.index-logo {
  height: 48px;
}

.site-name {
  line-height: 48px !important;
  font-size: 1.5rem;
}
</style>
