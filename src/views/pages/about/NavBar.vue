<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { useDisplay } from 'vuetify'

const props = defineProps({
  activeId: String,
})

const display = useDisplay()

const { y } = useWindowScroll()

const sidebar = ref(false)

watch(() => display, () => {
  return display.mdAndUp ? sidebar.value = false : sidebar.value
}, { deep: true })


</script>

<template>
  <!-- 👉 Navbar for desktop devices  -->
  <div class="front-page-navbar">
    <VAppBar
      :class="y > 20 ? 'front-page-navbar-box-shadow' : ''"
      elevation="0"
      class="rounded-b-lg"
    >
      <!-- toggle icon for mobile device -->
      <VAppBarNavIcon
        :class="$vuetify.display.mdAndUp ? 'd-none' : 'd-inline-block'"
        class="ms-0 me-1"
        color="high-emphasis"
        @click="() => sidebar = !sidebar"
      />

      <!-- Title and Landing page sections -->
      <div class="d-flex align-center">
        <!-- landing page sections -->
        <div
          :class="$vuetify.display.mdAndUp ? 'd-flex' : 'd-none'"
          class="text-base align-center gap-x-2"
        >
          <RouterLink
            v-for="(item, index) in ['Home', 'Features', 'Team', 'FAQ', 'Contact us']"
            :key="index"
            :to="{ name: 'about', hash: `#${item.toLowerCase().replace(' ', '-')}` }"
            class="nav-link font-weight-medium"
            :class="[props.activeId?.toLocaleLowerCase().replace('-', ' ') === item.toLocaleLowerCase() ? 'active-link' : '']"
          >
            {{ item }}
          </RouterLink>
        </div>
      </div>
    </VAppBar>
  </div>
</template>

<style lang="scss" scoped>
.front-page-navbar-box-shadow{
  /* stylelint-disable-next-line max-line-length */
  box-shadow: 0 4px 8px -4px rgba(var(--v-shadow-key-umbra-color), 42%) !important;
}

.nav-menu{
  display: flex;
  gap: 3rem;
}

.nav-title{
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity)) !important;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.15px;
  line-height: 1.5rem;
}

.nav-link{
  padding-inline: 0.625rem;

  &:not(:hover){
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))
  }
}

@media (min-width: 1920px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1440px - 32px);
    }
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(1200px - 32px);
    }
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(900px - 32px);
    }
  }

  .nav-menu{
    gap: 2rem;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 64px);
    }
  }
}

@media (max-width: 600px) {
  .front-page-navbar {
    .v-toolbar {
      max-inline-size: calc(100% - 32px);
    }
  }
}

.nav-item-img {
  border: 10px solid rgb(var(--v-theme-background));
  border-radius: 10px;
}

.active-link {
  color: rgb(var(--v-theme-primary)) !important;
}

.mega-menu-item {
  &:not(:hover){
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))
  }
}
</style>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutMixins;

.mega-menu{
  position: fixed !important;
  inset-block-start: 4.1rem;
  inset-inline-start: 50%;
  transform: translateX(-50%);
}

.front-page-navbar {
  .v-toolbar__content {
    padding-inline: 2rem !important;
  }

  .v-toolbar {
    inset-inline: 0 !important;
    margin-inline: auto !important;
  }
}

#navigation-drawer-close-btn {
  position: absolute;
  cursor: pointer;
  inset-block-start: 0.5rem;
  inset-inline-end: 1rem;
}

@media (max-width: 600px) {
  .front-page-navbar {
    .v-toolbar__content {
      padding-inline: 0.75rem !important;
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .front-page-navbar {
    .v-toolbar__content {
      padding-inline: 1rem !important;
    }
  }
}
</style>
