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
        <span class="flex items-center">
          <UIcon class="me-1" name="i-heroicons-eye" />
          {{ data?.data?.visitCount }}</span
        >

        <span class="text-gray-600 ms-5">{{
          moment(data?.data?.publishDate).locale("fa").format("dddd  YYYY/MM/DD")
        }}</span>
      </div>
      <div class="flex flex-wrap">
        <div class="p-2 w-full lg:w-1/2 text-justify">
          <p>{{ data?.data?.summary }}</p>
        </div>
        <img
          class="w-full h-auto max-h-[300px] object-contain bg-gray-200 rounded border shadow lg:w-1/2"
          :src="showImageBaseUrl + data?.data?.picture?.url"
          :alt="data?.data?.seoPictureAlt"
        />

        <div
          class="text-justify mt-3 content w-full p-2 lg:w-3/4"
          v-html="data?.data?.description"
        ></div>

        <div
          class="lastBlog mt-3 p-2 w-full h-[max-content] lg:w-1/4 lg:sticky lg:top-[150px]"
        >
          <strong>{{ $t("lastBlogs") }}</strong>
          <BlogsBlogItemLandscape v-for="item in lastBlog?.list" :data="item" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
import moment from "jalali-moment";
const route = useRoute();
const postStore = usePost();

const lastBlog = ref();
onMounted(async () => {
  lastBlog.value = await postStore.getPost(postStore.latestInBlog);
});

const { data, pending, error, refresh } = await useFetch("/api/post/postItem", {
  query: { id: route.params.id.split("-")[0] },
});
</script>

<style lang="scss">
h1 {
  font-size: 30px; /* 3 times the body text */
}

h2 {
  font-size: 27px; /* 2 times the body text */
}

h3 {
  font-size: 25px; /* 1 ½ times the body text */
}

.content {
  img {
    max-width: 800px;
    height: auto;
    margin: 15px auto;
  }
}
</style>
