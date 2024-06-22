<template>
  <div>

    <LMap
      style="height: 350px; width: 100%;"
      :zoom="9"
      :center="[lat, lng]"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />

      <!-- نشانگر قابل جابجایی -->
      <LMarker
        :lat-lng="[lat, lng]"
        
      >
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>


// تعریف مختصات اولیه
const lat = ref(41.8329) // عرض جغرافیایی اولیه
const lng = ref(-87.7327) // طول جغرافیایی اولیه

// تابع برای به‌روزرسانی مختصات نشانگر
const onMarkerDragEnd = (event) => {
  const { lat: newLat, lng: newLng } = event.target.getLatLng()
  lat.value = newLat
  lng.value = newLng
}
</script>

<style>
#map {
  height: 100%;
  width: 100%;
}
</style>
