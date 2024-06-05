<template>
    <section class="basket py-3 bg-gray-100 min-h-[600px] dark:text-black">
        <div class="container p-1 flex flex-wrap">
            <h1 class="flex items-center mt-3 mb-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.137a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" />
                </svg> {{ $t('basket') }}
            </h1>
            <div class="cartItems p-1 border lg:w-3/4 bg-white mt-1 bg-[#ecf0e8]">
                <div class="flex flex-col items-center justify-center" v-if="cartStore?.cart?.data?.cartItems.length==0 || cartStore?.cart == null">
                    <img class="max-w-[50%] h-auto m-auto w-full" src="/img/empty.webp" />
                    <span>سبد خرید شما خالی میباشد</span>
                </div>
                <div v-else v-for="item in cartStore?.cart?.data?.cartItems"
                    class=" bg-white cart-item mb-1 border-b flex items-center rounded">
                    <img class="w-[150px] h-[150px]  object-contain me-1"
                        :src="showImageBaseUrl + item?.product?.picture?.url" />
                    <div class="cart-info">
                        <Strong class="text-[15px]">

                            {{ item?.product?.name }}

                        </Strong>
                        

                        <span class="block mt-3 w-full">
                            {{ item?.product?.price.toLocaleString() }}
                            تومان</span>

                            <div class="function borderp-1 flex items-center">
                                <div class="count flex items-center">
                                <button class="bg-green-600 hover:bg-green-700 text-white w-[30px] 
                                flex items-center justify-center  h-[30px] p-1 text-lg
                                 rounded">+</button>
                                 <span class="p-3 text-lg">2</span>

                                 <button class="bg-red-600 hover:bg-red-700 text-white w-[30px] 
                                flex items-center justify-center  h-[30px] p-1 text-lg
                                 rounded">-</button>
                                 
                                 
                                 </div>
                                 <button class="bg-gray-500 hover:bg-gray-600  ms-5 text-white w-[30px] 
                                flex items-center justify-center  h-[30px] p-1 text-lg
                                 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg></button>
                            
                            </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/4 p-1">
                <div class="border bg-white  flex items-start flex-col
                 rounded  h-[200px]  p-2 text-sm text-justify">
                 <span>تعداد آیتم های سبد: {{cartStore?.cart?.data?.itemCount}} تا</span>
                    <span>قیمت کل: <strong  class="text-lg text-green-600">{{cartStore?.cart?.data?.totalPrice.toLocaleString()}}</strong> تومان</span>
                 <p class="text-gray-400 border-t pt-1 mt-1">
                 کاربر عزیز توجه داشته باشیید برای دریافت باید روی دکمه 
                 ادامه کلیک کنید و در مرحله بعد آدرس خود را وارد کنید.</p>

                

                <NuxtLink @click="authStore.backURL = $route.fullPath" 
                class="bg-yellow-500 hover:bg-yellow-600 mt-auto p-1 rounded w-full flex items-center justify-center" to="/loginRegister" v-if="!authStore?.userData">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="width: 23px;height: 26px;"><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632" style="stroke: black;"></path></svg> 
                    ادامه
                </NuxtLink>
                <button v-else class="bg-yellow-500 hover:bg-yellow-600 mt-auto p-1 rounded w-full flex items-center justify-center">ادامه
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M15 10a.75.75 0 0 1-.75.75H7.612l2.158 1.96a.75.75 0 1 1-1.04 1.08l-3.5-3.25a.75.75 0 0 1 0-1.08l3.5-3.25a.75.75 0 1 1 1.04 1.08L7.612 9.25h6.638A.75.75 0 0 1 15 10" clip-rule="evenodd"/></svg>
                </button>

                </div>
                <img class="w-full h-auto rounded mt-2" src="/img/gif.gif" alt="">

            </div>
        </div>

    </section>
</template>

<script setup>
const {
    public: { showImageBaseUrl },
} = useRuntimeConfig();
const authStore = useAuth();
const cartStore = useCart();


</script>