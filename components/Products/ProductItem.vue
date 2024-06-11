<template>
  <nuxt-link
    :to="'/pr/' + data?.id + '-' + data?.name?.replaceAll(' ', '-')"
    class="block border p-1 dark:text-black text-sm bg-white rounded-lg flex flex-col min-h-[290px]"
  >
    <img
      class="min-w-[100px] object-contain w-[100%] h-[170px]"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <!-- showImageBaseUrl + data?.picture?.url -->
    <p>
      <strong>{{ data?.name }}</strong>
    </p>
    <p class="text-center text-green-600">
      <strong class="text-lg">{{ data?.price.toLocaleString() }} </strong><span class="text-gray-500 text-xs ms-1">تومان</span>
    </p>
    <div class="functions mt-auto">
      <div v-if="basketCount > 0" class="px-3 count flex justify-between mt-1 items-center">

        <button class="bg-yellow-500 p-2 w-[100px] rounded"
        >برو به سبد</button>

        <button class="bg-black text-white w-[30px] h-[30px] rounded-full text-xl">
          +
        </button>

        <span class="p-1 block">{{basketCount}}</span>
        <button class="bg-black text-white w-[30px] h-[30px] rounded-full text-xl">
          -
        </button>
      </div>
      <button v-else class="bg-yellow-500 hover:bg-green-500 text-yellow-950 p-2 w-full rounded flex items-center 
      justify-center">
      <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.137a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></svg>
      افزودن به سبد خرید</button>

      <!-- <div class="count flex justify-between mt-1 items-center">
        <button
          class="bg-red-600 p-2 w-2/3 rounded me-1 flex items-center justify-around"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.375 4.75H3.95833H16.625"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
            <path
              d="M6.33325 4.75004V3.16671C6.33325 2.74678 6.50007 2.34405 6.797 2.04712C7.09393 1.75019 7.49666 1.58337 7.91659 1.58337H11.0833C11.5032 1.58337 11.9059 1.75019 12.2028 2.04712C12.4998 2.34405 12.6666 2.74678 12.6666 3.16671V4.75004M15.0416 4.75004V15.8334C15.0416 16.2533 14.8748 16.656 14.5778 16.953C14.2809 17.2499 13.8782 17.4167 13.4583 17.4167H5.54159C5.12166 17.4167 4.71893 17.2499 4.422 16.953C4.12507 16.656 3.95825 16.2533 3.95825 15.8334V4.75004H15.0416Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.91675 8.70837V13.4584"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.0833 8.70837V13.4584"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="border border-white p-1 text-white rounded-full w-[21px] h-[21px] block text-xs"
            >1</span
          >
        </button>
        <button class="bg-yellow-500 p-2 w-1/3 rounded">سبد</button>
      </div>  -->
    </div>

    <!-- {{ data }} -->
  </nuxt-link> 
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
const cartStore = useCart();
const props=defineProps(["data", "index"]);
const basketCount = ref(0)

onMounted(() => {
  // console.log(cartStore?.productIdCount);
  // cartStore?.productIdCount.find(equval);
  // console.log(cartStore?.productIdCount);
 
  setTimeout(() => {
    cartStore?.productIdCount?.forEach(item => {
    // console.log(item?.productId);
    // console.log(props?.data?.id);
    if(item?.productId == props?.data?.id){
    basketCount.value=item?.count;
    // console.log(item?.productId);

  }
  });
  }, 1000);
})




</script>
