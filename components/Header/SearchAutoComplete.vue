<template>
    <div class="relative px-2 lg:px-0">
        <UInput
    v-model="q"
    name="q"
    placeholder="نام محصول یا دسته بندی خود را وارد کنید..."
    icon="i-heroicons-magnifying-glass-20-solid"
    autocomplete="off"
    :ui="{ icon: { trailing: { pointer: '' } } }"
  >
    <template #trailing>
      <UButton
        v-show="q !== ''"
        color="gray"
        variant="link"
        icon="i-heroicons-x-mark-20-solid"
        :padded="false"
        @click="q = ''"
      />
    </template>
  </UInput>

  <div v-if="q.length>3"
   class="result absolute top-[34px] mx-1 right-0 bg-white w-full p-1 rounded text-sm ">
    <ul>
      <li v-for="item in 5">
        <nuxt-link to="/" class="flex items-center justify-start p-1 border-t" @click="$emit('closeSearch')">
          <img class="w-[50px] h-[50px] me-3" src="https://tylivershop.com/panel/thumb/_panel_Uploads_6_1_1_41a3ebf7-4961-4e00-b004-1ab6ac25932c.webp" alt="">
        <div class="name">
          <span class="block">لوازم یدکی برای موتورسیکلت</span>
        <sub>دسته بندی لاستیک</sub>
        </div>
        </nuxt-link>
      </li>
      <li class=" flex items-center justify-start">
        <UIcon  name="i-heroicons-face-frown" />
        محصول مرتبطی یافت نشد</li>
    </ul>
  </div>
    </div>
</template>


<script setup>
const q = ref('')
</script>