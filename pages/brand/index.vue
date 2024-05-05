<template>
  <section>
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('ourBrands'),
          url: ``,
        },
      ]"
    />
    <div class="container p-2">
      <h1>{{ $t("ourBrands") }}</h1>
      <!-- {{ data?.list?.length }} -->

      <div class="flex flex-wrap">
        <div class="w-1/4 p-2" v-for="item in data?.list">
          <NuxtLink :to="'/brand/' + item?.id" class="border p-2 rounded block">
            <img
              class="h-[200px] w-full rounded"
              :src="
                showImageBaseUrl + '/' + item?.picture?.url + '/' + item?.picture?.name
              "
            />
            <p class="mt-2">{{ $t("name") }}:{{ item?.name }}</p>
            <p class="text-sm text-justify">{{ $t("summary") }}:{{ item?.summary }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
const brandStore = useBrand();
const data = ref();
onMounted(async () => {
  data.value = await brandStore.getBrand(brandStore.lates);
  // console.log(await productsStore.getProducts(productsStore.popular));
});
</script>
