<template>
  <section class="blogs">
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('blogs'),
          url: `/blogs`,
        },
      ]"
    />
    <div class="container p-2">
      <div class="adsbanner">
        <HomeAdsBannerOne />
      </div>
      <div class="lastBlog">
        <br />
        <strong>{{ $t("LatestNewsandArticles") }}</strong>
        <br />
        <br />
        <div class="flex flex-wrap">
          <BlogsBlogItemTop v-for="item in result?.list" :data="item" />
        </div>
      </div>
      <div class="archive">
        <br />
        <strong>{{ $t("archive") }}</strong>
        <br />
        <br />
        <div class="flex flex-wrap">
          <BlogsBlogItemLandscape
            class="lg:w-1/3 lg:p-2"
            v-for="item in result?.list"
            :data="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const postStore = usePost();

const result = ref();

onMounted(async () => {
  result.value = await postStore.getPost(postStore.latest);
});
</script>
