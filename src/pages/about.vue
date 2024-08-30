<script setup lang="ts">
import Profile from '@/views/pages/about/Profile.vue'
import Certification from '@/views/pages/about/Certification.vue'
import Team from '@/views/pages/about/Team.vue'
import History from '@/views/pages/about/History.vue'
import Wish from '@/views/pages/about/Wish.vue'
import Culture from '@/views/pages/about/Culture.vue'
import navImg from '@images/logo/nav.jpg'
import NavBar from '@/views/pages/about/NavBar.vue'

const sectionId = ref('')
const profile = ref()
const wish = ref()
const history = ref()
const certification = ref()
const team = ref()
const culture = ref()

useIntersectionObserver(
  [profile, wish, history, certification, team, culture],
  ([{ isIntersecting, target }]) => {
    if (isIntersecting)
      sectionId.value = target.id
  },
  {
    threshold: 0.25,
  },
)
</script>

<template>
  <VRow>
    <VImg :src="navImg" />
  </VRow>
  <!--  导航栏 -->
  <NavBar :active-id="sectionId" />
  <!-- 公司简介 -->
  <Profile
    id="profile"
    ref="profile"
  />
  <!-- 企业愿景 -->
  <Wish
    id="wish"
    ref="wish"
  />
  <!-- 公司历史 -->
  <History
    id="history"
    ref="history"
  />
  <!-- 资质认证 -->
  <Certification
    id="certification"
    ref="certification"
  />
  <!-- 团队介绍 -->
  <Team
    id="team"
    ref="team"
  />
  <!--  公司理念 -->
  <Culture
    id="culture"
    ref="culture"
  />
</template>

<style lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
