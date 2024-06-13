<template>

    <section class="invoice pذ-4 bg-white dark:text-black">
        <GlobalBreedCrumb :data="[
      {
        name: $t('basket'),
        url: `/basket`,
      },
      {
        name: 'نهایی سازی خرید',
        url: ``,
      },
    ]" />
        <div class="container p-1">
            <div class="flex flex-wrap">
                <AddressBasketAddress />
            <div class="shiping text-sm p-1 w-full lg:w-1/3">

                <div class="delivery flex w-full">
                    <div class="w-1/2 lg:w-3/6 text-center border flex items-center justify-start ps-5  p-1">
                        <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6zm7 1l3.5 3.5L10 14v-2.5H5v-2h5z"/></svg>
                        هزینه ارسال
                   </div>
                    <div class="w-1/2 lg:w-3/6 text-center border   p-1">
                    {{ cartStore?.cart?.data?.deliveryPrice.toLocaleString() }}</div>
                    
                </div>
                <div class="delivery flex w-full ">
                    <div class="w-1/2 lg:w-3/6 text-center border flex items-center justify-start ps-5  p-1">
                        <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5l-3.75 1.5l-3.75-1.5l-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.5 48.5 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185M9.75 9h.008v.008H9.75zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m4.125 4.5h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"/></svg>
                         میزان تخفیف
                   </div>
                    <div class="w-1/2 lg:w-3/6 text-center border   p-1">
                    {{ cartStore?.cart?.data?.totalDiscount?.toLocaleString() }}</div>
                    
                </div>
                <div class="delivery flex w-full">
                    <div class="w-1/2 lg:w-3/6 text-center border flex items-center justify-start ps-5  p-1">

                        <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm0 2.25h.008v.008H8.25zm2.498-6.75h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm0 2.25h.007v.008h-.007zm2.504-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.498-6.75h.008v.008h-.008zm0 2.25h.008v.008h-.008zM8.25 6h7.5v2.25h-7.5zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A49 49 0 0 0 12 2.25"/></svg>
                         جمع
                   </div>
                    <div class="w-1/2 lg:w-3/6 text-center border   p-1">
                        {{ cartStore?.cart?.data?.totalPrice?.toLocaleString() }}
                    </div>
                    
                </div>
                <div class="delivery flex w-full">
                    <div class="w-1/2 lg:w-3/6 text-center border flex items-center justify-start ps-5  p-1">

                        <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0s1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659c-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/></svg>
                          قابل پرداخت
                   </div>
                    <div class="w-1/2 lg:w-3/6 text-center border   p-1">
                        {{ cartStore?.cart?.data?.paymentPrice?.toLocaleString() }}
                    </div>
                    
                </div>
            </div>
            </div>
            <div class="factor border border-gray-300 overflow-hidden  mt-2 rounded">
                <div class="factor-header flex w-full bg-black text-white">
                    <div class="lg:w-1/12 text-center   p-1">ردیف</div>
                    <div class="lg:w-5/12 text-center   p-1">شرح</div>
                    <div class="lg:w-1/6 text-center   p-1">فی</div>
                    <div class="lg:w-1/6 text-center   p-1">تعداد</div>
                    <div class="lg:w-1/6 text-center   p-1">قیمت</div>
                </div>
                <div class="factor-body">
                    <div v-for="(item,index) in cartStore?.cart?.data?.cartItems"
                     class="flex w-full">

                        <!-- {{ item }} -->
                    <div class="lg:w-1/12 text-center border border-gray-300 bg-gray-00 p-1">{{index+1}}</div>
                    <div class="lg:w-5/12 text-center border border-gray-300  p-1">{{ item?.product?.name }}</div>
                    <div class="lg:w-1/6 text-center border  border-gray-300  p-1">{{ item?.basePrice?.toLocaleString() }}</div>
                    <div class="lg:w-1/6 text-center border  border-gray-300  p-1">{{ item?.count }}</div>
                    <div class="lg:w-1/6 text-center border  border-gray-300  p-1">{{ item?.product?.price.toLocaleString() }}</div>
                </div>
                </div>
                
            </div>
            <BasketDelivery />
            
            <!-- <div class="discount border p-1 mt-2">
                discount
            </div> -->

          <BasketMerchant />

<div v-if="showRuleAlarm"
class="alert bg-red-300 p-1 my-2 rounded border border-red-700 text-red-700">
    <p>کاربر عزیز برای خرید باید قوانین و  مقررارت مارا خوانده و تایید نمایید.</p>
</div>

          <div class="btn-box w-full flex items-center lg:flex-nowrap flex-wrap">
          <p><input @click="cartCheck" 
          :checked="acceptRule==true" type="checkbox">
            <NuxtLink class="text-blue-700 ps-2">قوانین و مقررات</NuxtLink>
            را خوانده ام و می پذیرم.
          </p>{{ acceptRule }}
            <button @click="setOrder"
            
            class="bg-green-500 hover:bg-green-600
             flex items-center p-1 rounded px-3
              text-green-900 mt-2 ms-auto lg:w-1/3
              w-full justify-center lg:mb-0 mb-5">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/></svg>
                نهایی سازی خرید
                
            </button>
          </div>
        </div>

    </section>
</template>

<script setup>

    const authStore = useAuth();
    const cartStore = useCart();
    const baskeId = useCookie('baskeId')
    const acceptRule = ref(false)
    const showRuleAlarm = ref(false)
    onMounted(()=>{
        cartStore?.getDelivery()
    })

    const cartCheck = ()=>{
        acceptRule.value=!acceptRule.value
        cartStore.getCartCount({
            cartUpdateType:cartStore.cartStatus.getCart.id,

        })

    }

    const setOrder = ()=>{
        if(acceptRule.value){
        cartStore.getCartCount({
            cartUpdateType:cartStore.cartStatus.setOrder.id,

        })
    }else{
        showRuleAlarm.value = true
    }

    }

</script>