<template>
  <nuxt-link
    :to="'/pr/' + data?.id + '-' + data?.name?.replaceAll(' ', '-')"
    class="productItemTiny flex"
  >
    <img
      class="min-w-[100px] object-contain w-[100px] h-[100px] border border-gray-400 rounded p-1 m-1"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <div
      class="info text-start pt-5 relative w-[calc(100%-100px)] border-gray-500 border-dashed"
      :class="{ 'border-b': (index + 1) % 3 != 0 }"
    >
       <UBadge 
            class="absolute left-0 top-0" 
            color="blue" variant="solid">{{index+1}}</UBadge>
      <strong>
        <!-- {{ data.id }} -->
        {{ data?.name }}
      </strong>
      <br />
      <br />

      <span> {{ data?.price?.toLocaleString() }} تومان</span>
      <!-- <br> -->
      <!-- <del class="text-gray-600">قیمت قبلی: 249000تومان</del class="text-gray-600"> -->
    </div>
  </nuxt-link>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

defineProps(["data", "index"]);
</script>

<style scoped>

.productItemTiny{
  img{
    transition: 0.2s
  }
}

.productItemTiny:hover{
  img{
    transform: scale(1.02);
  }
}

</style >