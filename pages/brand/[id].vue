<template>
  <section>
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('ourBrands'),
          url: `/brand`,
        },
        {
          name: data?.data?.name,
          url: ``,
        },
      ]"
    />

    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-1/2 lg:w-1/5 p-2 m-auto">
          <img
            :src="
              showImageBaseUrl +
              data?.data?.picture?.url +
              '/' +
              data?.data?.picture?.name
            "
            class="w-full h-auto rounded"
            :alt="data?.data?.name"
          />
        </div>

        <div class="w-full lg:w-4/5 p-2">
          <h1>{{ data?.data?.name }}</h1>
          <hr class="my-3" />
          <p class="text-justify text-sm">{{ data?.data?.summary }}</p>
        </div>
        <div class="w-full flex flex-wrap p-2">
          <div class="w-1/2 lg:w-1/4 p-1" v-for="item in result?.list">
            <ProductsProductItem :data="item" />
          </div>
        </div>
        <div class="w-full p-2">
          <p v-html="data?.data?.description"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
const route = useRoute();
const productsStore = useProducts();
const result = ref();
onMounted(async () => {
  console.log(route.params.id.split("-")[0]);
  result.value = await productsStore.getProducts({
    active: true,
    inStock: true,
    sortBy: 0,
    available: true,
    brandIds: [route.params.id.split("-")[0]],
  });
});

const { data, pending, error, refresh } = await useFetch("/api/brand/brandItem", {
  query: { id: route.params.id.split("-")[0] },
});
</script>
