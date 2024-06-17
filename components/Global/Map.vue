<template>
  <div ref="mapContainer" class="leaflet-map bg-gray-200"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const mapContainer = ref(null);
const mapInstance = ref(null);

onMounted(async () => {
  if (typeof window !== 'undefined') {
    await nextTick();

    import('leaflet').then(L => {
      if (mapContainer.value) {
        mapInstance.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance.value);

        L.marker([51.5, -0.09]).addTo(mapInstance.value)
          .bindPopup('A marker on Leaflet map');
      } else {
        console.error('Map container not found.');
      }
    });
  }
});

onBeforeUnmount(() => {
  if (mapInstance.value) {
    mapInstance.value.remove();
  }
});
</script>

<style scoped>
.leaflet-map {
  width: 400px;
  height: 400px;
  overflow: hidden;
}
div {
  direction: ltr;
}
</style>
