<template>
  <section>
    <div class="container">
      sina
      <GlobalMapMulti />
    </div>
  </section>
</template>

<script setup>
const detailStore = useDetails();
  await detailStore.getDetails(detailStore.conection);

</script>

