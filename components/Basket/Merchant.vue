<template>
    <div class="merchant border mt-2 rounded">
        <strong class="p-1 flex bg-gray-200">
            انتخاب درگاه</strong>

        <div class="flex">
            <div class="item flex flex-col items-center 
              border p-1 m-1 " :class="{ active: index == 0 }" v-for="(item, index) in merchant?.merchantData?.list"
                :key="item?.id">
                <!-- {{ item }} -->
                <img class="w-[100px] h-[100px]" :src="showImageBaseUrl + item?.bank?.picture?.url" alt="">
                {{ item?.bank?.name }}
            </div>
        </div>
        <!-- {{merchant?.merchantData}} -->

    </div>
</template>

<script setup>
const cartStore = useCart();
const merchant = useMerchant();
const {
    public: { showImageBaseUrl },
} = useRuntimeConfig();
onMounted(async () => {
    await merchant?.getMerchant()
    await getDefaultMerchant()
})


const getDefaultMerchant = () => {
    if (merchant?.merchantData?.list?.length > 0


    ) {
        cartStore.getCart({
            "cartUpdateType": cartStore.cartStatus.setMerchant.id,
            "merchantId": merchant?.merchantData?.list[0]?.id
        })
    }
}

</script>

<style scoped>
.active {
    border: 2px solid rgb(1, 166, 1) !important;
    border-radius: 5px !important;
}
</style>