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
                <div class=" address-modal flex items-center justify-center fixed top-0 right-0 w-full h-full bg-[#000000d4] z-[1000]">
                    <div class="modal bg-white w-[90%] lg:w-1/2 rounded p-1">
                        <div class="modal-header flex items-ceter border-b p-1">
                            <strong>آدرس ها</strong>

                            <button class="border border-black p-1 text-sm rounded ms-auto px-2">بستن</button>
                            <!-- <button class="border border-yellow-500 text-yellow-600 p-1 text-sm rounded ms-auto px-2">آدرس جدید</button> -->
                        </div>
                        <div class="modal-body p-1">
                            <div class="address-list">
                                <div class="address-item  p-2 rounded text-sm  mb-1  bg-green-100  border border-green-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>
                                    
                                    <strong>منزل </strong><sub>(گیرنده سینا)</sub>
                                    <p class="text-sm text-gray-500">تهران - خیابان سهروردی شمالی خیابان خرمشهر فرهاد پلاک 4 </p>
                                </div>
                                <div class="address-item  p-1 text-sm  mb-1 flex" v-for="item in 5">
                                    <div class="status w-[30px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                                    </div>
                                    <div class="info">
                                        <strong>منزل </strong><sub>(گیرنده سینا)</sub>
                                    <p class="text-sm text-gray-500">تهران - خیابان سهروردی شمالی خیابان خرمشهر فرهاد پلاک 4 </p>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-header"></div>
                    </div>
                </div>
            </div>
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