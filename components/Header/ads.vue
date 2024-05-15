<template>
  <img
    class="w-full h-[40px] object-cover"
    :src="showImageBaseUrl + result?.list[0]?.picture?.url"
    :alt="projectName"
  />
  <!-- {{ showImageBaseUrl+result?.list[0]?.picture?.url}} -->
</template>

<script setup>
const {
  public: { projectName },
} = useRuntimeConfig();
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const bannerStore = useBanner();

const result = ref();

onMounted(async () => {
  result.value = await bannerStore.getBanner(bannerStore.topGif);
});
</script>
