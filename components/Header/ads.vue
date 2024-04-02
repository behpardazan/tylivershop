<template>
    <img class="w-full h-auto max-h-[100px] min-h-[50px] object-cover" src="/img/ads.gif" :alt="projectName">
</template>

<script setup>
const { public: { projectName } } = useRuntimeConfig()

</script>