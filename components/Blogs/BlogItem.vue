<template>
  <NuxtLink
    :to="'/blog/' + data?.id + '-' + data?.name"
    class="blogItem bg-gray-100 border rounded-xl overflow-hidden"
  >
    <img
      class="object-cover w-full h-[200px]"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <div class="info text-justify p-3 relative bg-gray-100 h-[120px]">
      <strong>{{ data?.name }} </strong>
      <br />
      <br />

      <span v-if="data?.summary?.length > 100">{{
        data?.summary?.substr(0, 100) + "..."
      }}</span>
      <span v-else> {{ data?.summary }}</span>
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
  </NuxtLink>
</template>

<script setup>
import moment from "jalali-moment";
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

defineProps(["data"]);
</script>
