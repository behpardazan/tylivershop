<template>
  <div>

    <LMap
      style="height: 350px; width: 100%;"
      :zoom="9"
      :center="[lat, lng]"
           :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />

      <!-- نشانگر قابل جابجایی -->
      <LMarker v-for="item in detailStore?.branchData?.list"
        :lat-lng="[parseFloat(item?.value?.split(',')[0].replace('[','')),parseFloat(item?.value?.split(',')[1].replace(']',''))]"
        
      > 
      </LMarker>
    </LMap>

<strong class="my-2 block">تعمیرکاران</strong>
    <div class="flex flex-wrap">
      <div class=" p-1 lg:w-1/4 w-1/2" v-for="item in detailStore?.branchData?.list">
      <div class="border p-2 rounded flex items-center">
      <img class="w-[70px] h-[70px] me-2" src="/img/loc.jpg" />
        {{item?.title}}
      </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const detailStore = useDetails();
  
onMounted(async() => {

  await detailStore.getDetails(detailStore.branches);
})
// تعریف مختصات اولیه
const lat = ref(35.71582441727612) // عرض جغرافیایی اولیه
const lng = ref(51.39296159332916) // طول جغرافیایی اولیه

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
