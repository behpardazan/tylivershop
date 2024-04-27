<template>
  <ul class="paging flex m-auto justify-center mt-5 flex-wrap" v-if="props?.pageCount">
    <!-- <li class="border hover:border-[#1f2937] cursor-pointer rounded bg-white m-1 py-1 px-3 text-xs "
                @click="$emit('getPageNummber',currentPage--)">قبلی</li> -->
    <!-- <li class="border hover:border-[#1f2937] cursor-pointer rounded bg-white m-1 py-1 px-3 text-xs bg-[darkgray] text-white border-0">1</li> -->
    <li
      class="border hover:border-[#1f2937] cursor-pointer rounded bg-white m-1 py-1 px-3 text-xs"
      :class="{ active: index == currentPage }"
      v-for="(index, item) in props?.pageCount"
      @click="$emit('getPageNummber', index)"
      :key="index"
    >
      {{ index }}
    </li>
    <!-- <li class="border hover:border-[#1f2937] cursor-pointer rounded bg-white m-1 py-1 px-3 text-xs"
            @click="$emit('getPageNummber',currentPage++)">بعدی</li> -->
  </ul>
</template>
<script setup>
const props = defineProps({
  pageIndex: String,
  pageCount: Number,
});

const currentPage = ref(1);
onUpdated(() => {
  currentPage.value = props.pageIndex;
});

//  onUpdated(()=>{
//     currentPage.value = props?.pageIndex
//     console.log("props.pageIndex");
//     console.log(props?.pageIndex);
//  })
</script>

<style lang="scss" scoped>
.active {
  background: rgb(7, 8, 8);
  border: 0;
  color: #fff;
}
</style>
