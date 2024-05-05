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

    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3 border p-2"></div>
        <div class="w-full lg:w-2/3 border p-2"></div>
        <div class="w-full border flex flex-wrap p-2">
          <div class="w-1/4 p-1" v-for="item in result?.list">
            <ProductsProductItem :data="item" />
          </div>
        </div>
        <div class="w-full border p-2"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const productsStore = useProducts();
const result = ref();
onMounted(async () => {
  result.value = await productsStore.getProducts({
    active: true,
    inStock: true,
    sortBy: 0,
    available: true,
    brandsId: [route.params.id.split("-")[0]],
  });
});

// const { data, pending, error, refresh } = await useFetch("/api/brand/brandItem", {
//   query: { id: route.params.id.split("-")[0] },
// });
</script>
