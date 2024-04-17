<template>
  sina
  <section>{{ result }}</section>
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
