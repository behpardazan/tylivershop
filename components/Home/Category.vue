<template>
    <section class=" border-t p-2">
    
        <div class="container">
            <strong class="block text-center">{{ $t('category') }}</strong>
            <div class="flex flex-wrap mt-3">
                <div class="item h-[110px]  lg:h-[200px] w-full p-1 lg:w-1/2 ">
                    <img class="w-full h-full object-contain border rounded" :src="showImageBaseUrl+ categoryStore?.data?.list[0]?.picture?.url"  />
                </div>
                <div class="item h-[110px]  lg:h-[200px]  w-1/2 p-1 lg:w-1/4 ">
                    <img class="w-full h-full object-contain border rounded" :src="showImageBaseUrl+ categoryStore?.data?.list[1]?.picture?.url"  />
                </div>
                <div class="item h-[110px] lg:h-[200px]  w-1/2  p-1 lg:w-1/4">
                    <img class="w-full h-full object-contain border rounded" :src="showImageBaseUrl+ categoryStore?.data?.list[2]?.picture?.url"  />
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
 const {public:{showImageBaseUrl}} = useRuntimeConfig();

    const categoryStore = useCategory()


</script>

    