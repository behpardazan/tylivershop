<template>
     <div>
        <div  v-for="item in cartStore?.cart?.data?.cartItems"
                    class=" bg-white cart-item mb-1 border-b flex items-center rounded">
                    <img class="border p-2 w-[150px] h-[150px]  object-contain me-1"
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
                                 <span class="p-3 text-lg">{{item?.count}}</span>

                                 <button class="bg-red-600 hover:bg-red-700 text-white w-[30px] 
                                flex items-center justify-center  h-[30px] p-1 text-lg
                                 rounded">-</button>
                                 
                                 
                                 </div>
                                 <button class="bg-gray-500 hover:bg-gray-600  ms-5 text-white w-[30px] 
                                flex items-center justify-center  h-[30px] p-1 text-lg
                                 rounded"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg></button>
                            
                            </div>
                    </div>
                </div></div>
</template>

<script setup>
const {
    public: { showImageBaseUrl },
} = useRuntimeConfig();
const cartStore = useCart()

</script>