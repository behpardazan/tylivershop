<template>
  <section class="blogs">
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('blogs'),
          url: `/blogs`,
        },
        {
          name: data?.data?.seoH1,
          url: ``,
        },
      ]"
    />
    <div class="container p-2">
      <h1 class="my-2">{{ data?.data?.seoH1 }}</h1>
      <div class="bg-gray-200 w-[200px] flex items-center text-sm p-1 rounded m-1">
        
      

      <span
        class="flex items-center"
      >
        <UIcon class="me-1" name="i-heroicons-eye" />
        {{ data?.data?.visitCount }}</span
      >
       
      <span class="text-gray-600 ms-5">{{
        moment(data?.data?.publishDate).locale("fa").format("dddd  YYYY/MM/DD")
      }}</span>
      </div>
      <div class="flex flex-wrap">
        <div class="p-2 w-full lg:w-1/2">
      <p>متنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپ</p>

      </div>
      <img class="w-full h-auto max-h-[300px] object-contain bg-gray-200 rounded border shadow lg:w-1/2"
       :src="showImageBaseUrl+data?.data?.picture?.url" 
      :alt="data?.data?.seoPictureAlt" >
      </div>
      <p>متنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپ</p>
      <p>متنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپ</p>
      <p>متنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپمتنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در تایلیور شاپ</p>


      {{ data?.data }}
    </div>
  </section>
</template>
<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
import moment from "jalali-moment";
const route = useRoute()

const result = ref();

const { data, pending, error, refresh } = await useFetch("/api/post/postItem", {
  query: { id: route.params.id.split("-")[0] },
});
</script>
