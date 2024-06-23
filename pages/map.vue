<template>
  <section>
    <GlobalBreedCrumb
      :data="[
        {
          name:' تعمیرکاران',
          url: ``,
        },
      ]"
    />
    <div class="container">
      <GlobalMapMulti />
    </div>
  </section>
</template>

<script setup>
const detailStore = useDetails();
  await detailStore.getDetails(detailStore.conection);

</script>

