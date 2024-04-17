<template>
  <div class="category-box">
    <strong>{{ $t("category") }}</strong>
    <hr />
    <div class="tree p-1">
      <ul class="treeItem" v-for="item in categoryStore?.data?.list">
        <li class="mb-1 flex flex-wrap items-center">
          <button
            @click="acardeonHandler"
            class="p-1 items-center flex transition hover:-rotate-45"
          >
            <UIcon class="pointer-events-none" name="i-heroicons-chevron-left-20-solid" />
          </button>
          <span class="text-sm hover:font-bold">{{ item?.name }}</span>
          <ul class="text-sm itemBranch ps-5 w-fulll hidden">
            <li class="p-1 ps-3" v-for="element in item?.children">
              {{ element?.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const categoryStore = useCategory();

const acardeonHandler = (event) => {
  const parent = event.target.parentElement;

  const subCat = parent.children[2];
  subCat.classList.remove("hidden");
  console.log(parent.children[2]);
};
</script>

<style scoped>
ul {
  li {
    list-style-type: unset !important;
  }
}
</style>
