<script setup>
import { onMounted, onUnmounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = null

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: 'bef55c143ccdb468229201fac01fd3b9',
  }
  AMapLoader.load({
    key: 'db5ae16e1aa12a46ca0ed8873518b526', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then(AMap => {
      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '2D', // 地图模式
        zoom: 16, // 初始化地图级别
        center: [113.98554, 22.702527], // 初始化地图中心点位置
      })

      const marker = new AMap.Marker({
        position: new AMap.LngLat(113.98554, 22.702527), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '贝岭能效技术有限公司',
        label: {
          content: '地址：深圳市龙华区大浪街道新石社区石龙仔路14号美宝和工业园1栋西侧',
        },
        color: 'red',
        anchor: 'bottom-center',
      })

      map.add(marker)
    })
    .catch(e => {
      console.log(e)
    })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<template>
  <div id="container" />
</template>

<style scoped>
#container {
  width: 100%;
  height: 500px;
}
</style>
