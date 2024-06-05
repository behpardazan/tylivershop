<template>

    <section class="invoice py-4 bg-white dark:text-black">
        <div class="container p-1">
            <div class="flex flex-wrap">
                <div class="address border bg-yellow-100 rounded lg:w-2/3 w-full">
                <strong class="block  w-full bg-yellow-300 p-2">مشخصات گیرنده</strong>
                
                <div class="current-address flex flex-wrap p-1">
                    
                    <p class="w-full text-sm p-1 lg:w-1/2">نام: سینا</p>
                    <p class="w-full text-sm p-1 lg:w-1/2">نام خانوادگی: صادقی</p>
                    <p class="w-full text-sm p-1 lg:w-1/2">شماره تماس: 09201137652 </p>
                    <p class="w-full text-sm p-1 lg:w-1/2">کدپستی: 1234567891</p>
                    <p class="w-full text-sm p-1 lg:w-1/2">استان: تهران</p>
                    <p class="w-full text-sm p-1 lg:w-1/2">شهر: تهران</p>
                    <p class="">آدرس: تهران- خیابان سهرودی - خیابان خرمشهر( آپادانا ) - کوچه فرهاد - نبش دوم - پلاک 4 - واخد 1</p>
                </div>
            </div>
            <div class="shiping border p-1 w-1/3">
                shiping
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