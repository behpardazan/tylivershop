<template>
    <section class="adsBanner p-2">
        <div class="container flex flex-wrap">
            <NuxtLink to="#" class="h-[200px] lg:h-[400px] w-full p-1">
                <img class="h-full w-full rounded object-cover"
                :src=" showImageBaseUrl+result?.list[0]?.picture?.url" :alt="projectName" />
                
            </NuxtLink>


        </div>
    </section>

</template>
<script setup>
const {
    public: { showImageBaseUrl },
  } = useRuntimeConfig();
  
  const bannerStore = useBanner();
  
  const result = ref();
  
  onMounted(async()=>{
      result.value = await bannerStore.getBanner(bannerStore.singleBanner);
  
  })
</script>

