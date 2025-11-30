<script setup lang="ts">
import banner1 from '@images/logo/banner1.jpeg'
import banner2 from '@images/logo/banner2.jpeg'
import banner3 from '@images/logo/banner3.jpg'
import navImg from '@images/logo/nav.jpg'

const route = useRoute()

const topImage = computed(() => {
  const routeName = String(route.name || '')

  // 关于我们页面
  if (routeName === 'about') {
    return banner2
  }

  // 服务项目页面（路由名称以 services 开头）
  if (routeName.startsWith('services')) {
    return navImg
  }

  // 新闻资讯页面（路由名称是 news 或以 news- 开头）
  if (routeName === 'news' || routeName.startsWith('news-')) {
    return banner1
  }

  // 证书查询页面（路由名称是 info-query 或以 info-query- 开头）
  if (routeName === 'info-query' || routeName.startsWith('info-query-')) {
    return banner3
  }

  // 其他页面默认显示 banner2
  return banner2
})
</script>

<template>
  <VRow>
    <VImg
      :src="topImage"
      cover
      height="300"
    />
  </VRow>
</template>
