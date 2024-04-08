<template>
    <div class="productItemTiny flex ">
        <img 
        class="min-w-[100px] object-contain w-[100px] h-[100px]" 
        :src="showImageBaseUrl+data?.picture?.url " 
        :alt="data?.seoPictureAlt ">
        <div class="info text-start pt-5 relative w-[200px]
          border-gray-500 border-dashed" 
          :class="{'border-b':(index+1)%3!=0}">
            <!-- <UBadge 
            class="absolute right-0 top-[-5px]" 
            color="blue" variant="solid">{{index+1}}</UBadge> -->
            <strong>
                <!-- {{ data.id }} -->
                {{ data?.name }}
            </strong>
            <br>
            <br>

            <span>قیمت:  {{ data?.price?.toLocaleString() }}   تومان</span>
            <!-- <br> -->
            <!-- <del class="text-gray-600">قیمت قبلی: 249000تومان</del class="text-gray-600"> -->
        </div>
    </div>
</template>

<script setup>
 const {public:{showImageBaseUrl}} = useRuntimeConfig();

defineProps(['data','index'])
</script>