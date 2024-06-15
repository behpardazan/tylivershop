<template>
    <div class="shiping-box border rounded bg-gray-100 mt-2">
                    <strong class="bg-gray-200 flex p-2">نحوه ارسال</strong>
                    <ul class=" p-1  mt-1 min-h-[150px]">
                        <li v-for="item in  cartStore?.deliveryMethod?.data">
                            <label class="flex items-center " for="">
                                <input type="checkBox" :checked="item?.deliveryPrice == cartStore?.cart?.data?.deliveryPrice" name="" id="">
                                <span class="flex items-center " >
                                    <svg class="m-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14">
                                        <g fill="none" stroke="#333" stroke-linecap="round">
                                            <path stroke-linejoin="round" d="M10.499 13.5a1.501 1.501 0 1 1 0-3.002a1.501 1.501 0 0 1 0 3.002m-7 0a1.501 1.501 0 1
                                             1 0-3.002a1.501 1.501 0 0 1 0 3.002"/><path stroke-linejoin="round" d="M2 12H.5v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5A1.5 
                                             1.5 0 0 0 8 12h1h-4m7 0h.5c.552 0 1.012-.452.908-.994C13.077 9.278 11.866 8 10 8h-.5"/><path stroke-linejoin="round"
                                              d="M8 3.5h1.5v7.379"/><path stroke-linejoin="round" d="M11.5 4.5h-1a1 1 0 0 0 0 2h1z"/>
                                              <path d="M1.5 8H4a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1Z"/></g></svg>
                                    ارسال با {{item?.deliveryType?.name}}
                                    
                                    <sub>({{ item?.maxDaysString }})</sub>
                                    <span class="bg-gray-200 border px-1 border-gray-300 rounded ms-1">{{ item?.deliveryPrice?.toLocaleString() }} تومان</span>
                                    </span>
                            </label>
                        </li>
                        <li class="hidden">
                            <del class="flex items-center  text-gray-500" for="">
                                <!-- <input type="checkBox" name="" id=""> -->
                                <span class="flex items-center " >
                                    <svg  class="m-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#888888"><path d="M21 7v5M3 7v10.161c0 1.383 1.946 2.205 5.837 3.848C10.4 21.67 11.182 22 12 22V11.355M15 19s.875 0 1.75 2c0 0 2.78-5 5.25-6"/><path d="M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9"/></g></svg>
                                    ارسال با پست</span>
                            </del>
                        </li>
                        <li class="hidden">
                            <del class="flex items-center text-gray-500" for="">
                                <!-- <input type="checkBox" name="" id=""> -->
                                <span class="flex items-center " >
                                    
                                    <svg class="m-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><g fill="#888888"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911c-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/></g></svg>
                                    ارسال سریع ( هزینه به عهده مشتری )</span>
                            </del>
                        </li>
                    </ul>
                </div>
</template>

<script setup>

const cartStore = useCart();

onMounted(()=>{
    console.log("cartStore?.deliveryMethod?.data");
    console.log(cartStore?.deliveryMethod?.data);
})

// cartStore.getCart({
//       "cartUpdateType": cartStore.cartStatus.setMerchant.id,
//       "merchantId":merchant?.merchantData?.list[0]?.id 
//     })
</script>