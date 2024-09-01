<script setup>
import { onMounted, ref } from 'vue'

const infoWindow = ref(null)
const map = ref(null)
const level = 15 // 调整缩放级别，使其更容易看到标记
const center = { lng: 113.98554, lat: 22.702527 }

const features = [
  {
    icon: 'cir',
    color: 'red',
    name: '深圳市贝岭能效技术有限公司',
    desc: '地址：深圳市龙华区大浪街道新石社区石龙仔路14号美宝和工业园1栋西侧',
    lnglat: { lng: 113.98554, lat: 22.702527 },
    offset: { x: -9, y: -31 },
    type: 'Marker',
  },
]

function loadFeatures() {
  features.forEach(data => {
    let feature
    if (data.type === 'Marker') {
      try {
        feature = new window.AMap.Marker({
          map: map.value,
          position: new window.AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
          zIndex: 3,
          extData: data,
          offset: new window.AMap.Pixel(data.offset.x, data.offset.y),
          title: data.name,
          content: `<div class="icon icon-${data.icon} icon-${data.icon}-${data.color}"></div>`,
        })
        console.log('Marker created:', feature)
      }
      catch (error) {
        console.error('Error creating marker:', error)
      }
    }
    if (feature)
      window.AMap.event.addListener(feature, 'click', mapFeatureClick)
  })
}

function mapFeatureClick(e) {
  if (!infoWindow.value)
    infoWindow.value = new window.AMap.InfoWindow({ autoMove: true, isCustom: false })

  const extData = e.target.getExtData()

  infoWindow.value.setContent(`<div class='myinfowindow'><h5>${extData.name}</h5><div>${extData.desc}</div></div>`)
  infoWindow.value.open(map.value, e.lnglat)
}

function initMap() {
  try {
    map.value = new window.AMap.Map('mapContainer', {
      center: new window.AMap.LngLat(center.lng, center.lat),
      zoom: level,
      keyboardEnable: true,
      dragEnable: true,
      scrollWheel: true,
      doubleClickZoom: true,
    })

    map.value.on('complete', () => {
      console.log('Map loaded completely')
      loadFeatures() // 确保在地图完全加载后再添加标记
      map.value.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
        map.value.addControl(new window.AMap.ToolBar({ ruler: false, direction: false, locate: false }))
        map.value.addControl(new window.AMap.Scale())
      })
    })
  }
  catch (error) {
    console.error('Error initializing map:', error)
  }
}

onMounted(() => {
  if (window.AMap) {
    initMap()
  }
  else {
    const script = document.createElement('script')

    script.src = '//webapi.amap.com/maps?v=1.3&key=db5ae16e1aa12a46ca0ed8873518b526'
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)
  }
})
</script>

<template>
  <div
    id="wrap"
    class="my-map"
  >
    <div id="mapContainer" />
  </div>
</template>

<style scoped>
.my-map {
  margin: 0 auto;
  width: 90%;
  height: 30rem;
}

.my-map .icon {
  background: url(//a.amap.com/lbs-dev-yuntu/static/web/image/tools/creater/marker.png) no-repeat;
}

.my-map .icon-cir {
  height: 31px;
  width: 28px;
}

.my-map .icon-cir-red {
  background-position: -11px -5px;
}

.amap-container {
  height: 100%;
}

.myinfowindow {
  width: 240px;
  min-height: 50px;
}

.myinfowindow h5 {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  width: 220px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}

.myinfowindow div {
  margin-top: 10px;
  min-height: 40px;
  line-height: 20px;
  font-size: 13px;
  color: #6f6f6f;
}
</style>
