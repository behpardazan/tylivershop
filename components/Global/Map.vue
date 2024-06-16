<template>
    <div  class="leaflet-map" ref="map"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const map = ref(null);
  
  onMounted(() => {
    setTimeout(()=>{
        if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        map.value = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map.value);
  
        L.marker([51.5, -0.09]).addTo(map.value)
          .bindPopup('A marker on Leaflet map');
      });
    }
    },5000)
  });
  
  onBeforeUnmount(() => {
    if (map.value) {
      map.value.remove();
    }
  });
  </script>
  
  <style scoped>
  .leaflet-map {
    height: 400px;
  }
  div{
    direction: ltr;
  }
  </style>
  