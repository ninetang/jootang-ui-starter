<script setup lang="ts">
import Profile from '@/views/pages/about/Profile.vue'
import Certification from '@/views/pages/about/Certification.vue'
import Team from '@/views/pages/about/Team.vue'
import History from '@/views/pages/about/History.vue'
import Wish from '@/views/pages/about/Wish.vue'
import Culture from '@/views/pages/about/Culture.vue'
import NavBar from "@/views/pages/about/NavBar.vue";
</script>

<template>
  <!-- 公司简介 -->
  <Profile />
  <!-- 企业愿景 -->
  <Wish />
  <!-- 公司历史 -->
  <History />
  <!-- 资质认证 -->
  <Certification />
  <!-- 团队介绍 -->
  <Team />
  <!--  公司理念 -->
  <Culture />
</template>

<style lang="scss">
.v-row {
  margin-block: 1rem;
}
</style>
