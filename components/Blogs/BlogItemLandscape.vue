<template>
  <NuxtLink :to="'/blog/'+data?.id+'-'+data?.name "
    class="blogItem bg-gray-100 border rounded-xl 
    overflow-hidden flex mb-2 w-full lg:w-1/3 lg:p-1"
  >
  <!-- {{ data }} -->
  
    <img
      class="object-cover w-1/4 h-[100px] rounded"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <div class="info text-justify p-3 relative w-3/4">
      <strong class="text-sm">{{ data?.name }} </strong>

      <br />

      <span class="text-xs">{{ data?.summary?.slice(0, 35) }}...</span>
      <p class="flex text-xs flex-nowrap">
        <span class="text-gray-600 w-2/3">{{
          moment(data?.publishDate).locale("fa").format("YYYY/MM/DD")
        }}</span>

        <span class="bg-gray-100 p-1 flex w-1/3 items-center left-0">
          <UIcon class="me-1" name="i-heroicons-eye" />
          {{ data?.visitCount }}</span
        >
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import moment from "jalali-moment";
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

defineProps(["data"]);
</script>
