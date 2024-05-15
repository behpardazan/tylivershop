<template>
    <section class="adsBanner p-2">
        <div class="container flex flex-wrap">
            <NuxtLink to="#" class="h-[170px] w-1/2 lg:w-1/4 p-2">
                <img 
                class="h-full w-full rounded-lg object-cover" 
                :src=" showImageBaseUrl+result?.list[0]?.picture?.url" :alt="projectName" />
            </NuxtLink>

            <NuxtLink to="#" class="h-[170px] w-1/2 lg:w-1/4 p-2">
                <img 
                class="h-full w-full rounded-lg object-cover"
                :src=" showImageBaseUrl+result?.list[1]?.picture?.url" :alt="projectName"  />
            </NuxtLink>
            <NuxtLink to="#" class="h-[170px] w-1/2 lg:w-1/4 p-2">
                <img 
                class="h-full w-full rounded-lg object-cover" 
                :src=" showImageBaseUrl+result?.list[0]?.picture?.url" :alt="projectName" />
            </NuxtLink>

            <NuxtLink to="#" class="h-[170px] w-1/2 lg:w-1/4 p-2">
                <img 
                class="h-full w-full rounded-lg object-cover"
                :src=" showImageBaseUrl+result?.list[1]?.picture?.url" :alt="projectName"  />
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
      result.value = await bannerStore.getBanner(bannerStore.twoBanner);
  
  })
</script>



