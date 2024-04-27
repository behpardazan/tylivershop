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
          <nuxt-link :to="'/search/' + item?.label" class="text-sm hover:font-bold">{{
            item?.name
          }}</nuxt-link>
          <ul class="text-sm itemBranch ps-5 w-fulll hidden">
            <li class="p-1 ps-3" v-for="element in item?.children">
              <nuxt-link :to="'/search/' + element?.label">{{ element?.name }}</nuxt-link>
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
strong {
  font-size: 14px !important;
}
</style>
