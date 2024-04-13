<template>
  <div class="relative px-2 lg:px-0">
    <UInput
      v-model="q"
      @keyup="getResult(q)"
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

    <div
      v-if="q.length > 3"
      class="result absolute top-[34px] mx-1 right-0 bg-white w-full p-1 rounded text-sm z-10"
    >
      <ul>
        <li v-for="item in result?.list">
          <nuxt-link
            to="/"
            class="flex items-center justify-start p-1 border-t"
            @click="$emit('closeSearch')"
          >
            <img
              :src="showImageBaseUrl + item?.picture?.url"
              class="w-[50px] h-[50px] me-3"
              alt=""
            />
            <div class="name">
              <span class="block">{{ item?.name }}</span>
              <sub>{{ $t("code") + ": " + item?.codeValue }}</sub>
            </div>
          </nuxt-link>
        </li>
        <li class="flex items-center justify-start" v-if="result?.list?.length == 0">
          <UIcon name="i-heroicons-face-frown" />
          محصول مرتبطی یافت نشد
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const productsStore = useProducts();
const q = ref("");
const result = ref();

const getResult = async (name) => {
  if (name.length > 3) {
    // alert("sina");

    result.value = await productsStore.getSearchedProducts(name);
    console.log(result.value);
  }
};
</script>
