<template>
    <section class="products p-2">

        <div class="container">
            <h1>محصولات تایلیورشاپ</h1>
            <div class="flex">
                <div class="lg:w-1/4 hidden lg:block">1/4</div>
                <div class="lg:w-3/4 w-full">
                    <div class="sort flex">
                        <button 
                        class="bg-yellow-500 text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200" >
                        {{ $t('bestSelling') }}</button>
                        <button 
                        class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200" >
                        {{ $t('mostVisited') }}</button>
                        <button 
                        class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200" >
                        {{ $t('cheapest') }}</button>
                        <button 
                        class="text-xs min-w-[max-content] w-[max-content] m-1 border p-1 px-2 rounded-full border-gray-300 bg-gray-200" >
                        {{ $t('expensive') }}</button>
                    
                      
                    
                    </div>
                    <div class="product-wrapper flex flex-wrap w-full">
                        <div v-for="item in data?.list" 
                            class=" w-1/2 lg:w-1/4 p-1">
                            <nuxt-link to="" 
                            class="block border p-1 text-sm">
                                <img src="" alt="">
                                <p><strong>{{item?.name}}</strong></p>
                                <p>قیمت: {{item?.price}} تومان</p>
                                <div class="functions">
                                    <button>افزودن به سبد خرید</button>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<script setup>
const productsStore = useProducts()

const data = ref()
onMounted(async() => {
    data.value = await productsStore.getProducts(productsStore.lates)
    
    // console.log(await productsStore.getProducts(productsStore.popular));
})

</script>