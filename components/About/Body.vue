<template>
  <section class="py-3">
    <div class="container text-justify p-2">
      <h1>درباره ما </h1>
      <span v-html="result?.data?.summary"></span>
      <img class="m-auto my-2 w-[300px] h-auro" src="/img/about.jpg"  alt="درباره ما">
      <span v-html="result?.data?.description"></span>
    </div>
  </section>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const staticStore = useStaticPage();

const result = ref();

onMounted(async () => {
  result.value = await staticStore.getBody(staticStore.about);
});
</script>
