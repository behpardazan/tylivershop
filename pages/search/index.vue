<template>
  <section class="products bg-gray-100">
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('products'),
          url: `/search`,
        },
      ]"
    />
    <div class="container p-2">
      <h1>{{ $t("products") }}</h1>
      <div class="flex">
        <div class="lg:w-1/4 hidden lg:block p-2">
          <div class="bg-white p-2 border">
            <ProductsCategory />
            <!-- <div class="stock-box">
              <strong>برند ها</strong>
              <hr />
              <div class="flex items-center p-1 text-sm" v-for="item in 10">
                <input class="m-1" type="checkbox" />
                <label for="">کالا های موجود</label>
              </div>
            </div> -->
            <div class="stock-box mt-2">
              <strong>موجودی</strong>
              <hr />
              <div class="flex items-center p-1 text-sm">
                <input
                  id="isstock"
                  class="m-1"
                  type="radio"
                  name="stock"
                  :checked="customeConfig.InStock == true"
                  @change="customeConfig = true"
                />
                <label class="cursor-pointer" for="isstock">کالا های موجود</label>
              </div>

              <div class="flex items-center p-1 text-sm">
                <input
                  id="isnotstock"
                  class="m-1"
                  type="radio"
                  name="stock"
                  :checked="customeConfig.InStock == false"
                  @change="customeConfig = false"
                />
                <label class="cursor-pointer" for="isnotstock">کالا های ناموجود</label>
              </div>
            </div>

            <div dir="ltr" class="range text-end">
              <strong>قیمت </strong>
              <hr />
              <div class="flex flex-row-reverse my-2">
                <label for="">{{ $t("from") }}</label>
                <span class="bg-yellow-100 mx-2 rounded border px-2">{{
                  range1.toLocaleString()
                }}</span>

                تومان
              </div>
              <URange
                size="sm"
                color="yellow"
                v-model="range1"
                :step="100000"
                :min="0"
                :max="3000000"
              />
              <div class="flex flex-row-reverse my-2">
                <label for="">{{ $t("to") }}</label>
                <span class="bg-yellow-100 mx-2 rounded border px-2">{{
                  range2.toLocaleString()
                }}</span>

                تومان
              </div>
              <URange
                size="sm"
                color="yellow"
                v-model="range2"
                :step="100000"
                :min="3000000"
                :max="10000000"
              />
            </div>

            <button
              @click="filterReq(customeConfig)"
              class="filter bg-yellow-500 hover:bg-yellow-600 text-center w-full mt-2 rounded p-1"
            >
              {{ $t("filter") }}
            </button>
          </div>
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="sort flex scrollbar-hide overflow-scroll">
            <button
              @click="isOpen = true"
              class="text-xs flex lg:hidden items-center min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200"
            >
              <UIcon name="i-heroicons-adjustments-horizontal" />

              {{ $t("advancedSearch") }}
            </button>
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
          {{ data?.pageIndex }}
          <GlobalPaging
            :pageCount="parseInt(data?.totalCount / data?.pageSize) + 1"
            :pageIndex="data?.pageIndex"
            @getPageNummber="
              (n) => {
                customeConfig.PageIndex = n;
                filterReq(customeConfig);
              }
            "
          ></GlobalPaging>
        </div>
      </div>
    </div>
    <USlideover v-model="isOpen" prevent-close>
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ $t("advancedSearch") }}
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <ProductsCategory />
      </UCard>
    </USlideover>
  </section>
</template>

<script setup>
const productsStore = useProducts();
const isOpen = ref(false);
const data = ref();
const range1 = ref(100);
const range2 = ref(3000000);

const customeConfig = ref({
  active: true,
  inStock: true,
  sortBy: 0,
  available: true,
  PriceFrom: range1.value,
  PriceTo: range2.value,
  InStock: true,
  PageIndex: 1,
});

onMounted(async () => {
  data.value = await productsStore.getBrand(productsStore.lates);

  // console.log(await productsStore.getProducts(productsStore.popular));
});

const filterReq = async (conf) => {
  data.value = await productsStore.getProducts(conf);
};
</script>

<style lang="scss" scoped>
strong {
  font-size: 14px !important;
}
</style>
