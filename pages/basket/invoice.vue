<template>

    <section class="invoice py-4 bg-white dark:text-black">
        <div class="container p-1">
            <div class="flex flex-wrap">
                <AddressBasketAddress />
            <div class="shiping  p-1 w-1/3">
                <BasketDelivery />
            </div>
            </div>
            <div class="factor border mt-2">
                <div class="factor-header flex w-full">
                    <div class="lg:w-1/12 text-center border bg-gray-100 p-1">ردیف</div>
                    <div class="lg:w-5/12 text-center border bg-gray-100 p-1">شرح</div>
                    <div class="lg:w-1/6 text-center border bg-gray-100 p-1">فی</div>
                    <div class="lg:w-1/6 text-center border bg-gray-100 p-1">تعداد</div>
                    <div class="lg:w-1/6 text-center border bg-gray-100 p-1">قیمت</div>
                </div>
                <div class="factor-body">
                    <div v-for="(item,index) in cartStore?.cart?.data?.cartItems" class="flex w-full">

                        <!-- {{ item }} -->
                    <div class="lg:w-1/12 text-center border bg-gray-100 p-1">{{index+1}}</div>
                    <div class="lg:w-5/12 text-center border  p-1">{{ item?.product?.name }}</div>
                    <div class="lg:w-1/6 text-center border   p-1">{{ item?.basePrice?.toLocaleString() }}</div>
                    <div class="lg:w-1/6 text-center border   p-1">{{ item?.count }}</div>
                    <div class="lg:w-1/6 text-center border   p-1">{{ item?.product?.price.toLocaleString() }}</div>
                </div>
                </div>
            </div>
            
            <div class="discount border p-1 mt-2">
                discount
            </div>
        </div>

    </section>
</template>

<script setup>

    const authStore = useAuth();
    const cartStore = useCart();
    const baskeId = useCookie('baskeId')
    onMounted(()=>{
        cartStore?.getCartCount({
            "cartUpdateType": cartStore.cartStatus.getDelivery.id,
      "uniqueId": baskeId.value,
        })
    })

</script>