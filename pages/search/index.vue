<template>
  <section class="products p-2 bg-gray-100">
    <div class="container">
      <h1>محصولات تایلیورشاپ</h1>
      <div class="flex">
        <div class="lg:w-1/4 hidden lg:block p-2">
          <div class="bg-white p-2 border">
            <ProductsCategory />
            <div class="stock-box">
              <strong>برند ها</strong>
              <hr>
              <div class="flex items-center p-1 text-sm" v-for="item in 10">
                <input class="m-1" type="checkbox">
                <label for="">کالا های موجود</label>
              </div>
              
            </div>
            <div class="stock-box mt-2">
              <strong>موجودی</strong>
              <hr>
              <div class="flex items-center p-1 text-sm">
                <input class="m-1" type="radio">
                <label for="">کالا های موجود</label>
              </div>
              
              <div class="flex items-center p-1 text-sm">
                <input class="m-1" type="radio">
                <label for="">کالا های ناموجود</label>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="sort flex">
            <button
              class="bg-yellow-500 text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200"
            >
              {{ $t("bestSelling") }}
            </button>
            <button
              class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200"
            >
              {{ $t("mostVisited") }}
            </button>
            <button
              class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200"
            >
              {{ $t("cheapest") }}
            </button>
            <button
              class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200"
            >
              {{ $t("expensive") }}
            </button>
          </div>
          <div class="product-wrapper flex flex-wrap w-full">
            <div v-for="item in data?.list" class="w-1/2 lg:w-1/4 p-1">
              <ProductsProductItem :data="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const productsStore = useProducts();

const data = ref();
onMounted(async () => {
  data.value = await productsStore.getProducts(productsStore.lates);

  // console.log(await productsStore.getProducts(productsStore.popular));
});
</script>
