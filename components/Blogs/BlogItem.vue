<template>
  <div class="blogItem bg-gray-100 border rounded-xl overflow-hidden">
    <img
      class="object-cover w-full h-[200px]"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <div class="info text-justify p-3 relative">
      <strong>{{ data?.name }} </strong>
      <br />
      <br />

      <span>{{ data?.summary }}</span>
      <br />
      <span class="text-gray-600">{{
        moment(data?.publishDate).locale("fa").format("dddd  YYYY/MM/DD")
      }}</span>
      <br />

      <span
        class="bg-gray-100 opacity-80 absolute top-[-24px] p-1 flex items-center left-0"
      >
        <UIcon class="me-1" name="i-heroicons-eye" />
        {{ data?.visitCount }}</span
      >
    </div>
  </div>
</template>

<script setup>
import moment from "jalali-moment";
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

defineProps(["data"]);
</script>
