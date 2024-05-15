<template>
  <section class="border-t p-2">
    <div class="container">
      <strong class="block text-center text-xl">{{ $t("products") }}</strong>
      <div class="flex flex-wrap mt-3">
        <Nuxt-link
          :to="'/search/' + categoryStore?.data?.list[0]?.label"
          class="item h-[110px] lg:h-[200px] w-full p-1 lg:w-1/2"
        >
          <img
            class="w-full h-full object-cover border rounded"
            :src="showImageBaseUrl + categoryStore?.data?.list[0]?.picture?.url"
          />
        </Nuxt-link>
        <Nuxt-link
          :to="'/search/' + categoryStore?.data?.list[1]?.label"
          class="item h-[110px] lg:h-[200px] w-1/2 p-1 lg:w-1/4"
        >
          <img
            class="w-full h-full object-cover border rounded"
            :src="showImageBaseUrl + categoryStore?.data?.list[1]?.picture?.url"
          />
        </Nuxt-link>
        <Nuxt-link
          :to="'/search/' + categoryStore?.data?.list[2]?.label"
          class="item h-[110px] lg:h-[200px] w-1/2 p-1 lg:w-1/4"
        >
          <img
            class="w-full h-full object-cover border rounded"
            :src="showImageBaseUrl + categoryStore?.data?.list[2]?.picture?.url"
          />
        </Nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const categoryStore = useCategory();
</script>
