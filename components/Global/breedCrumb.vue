<template>
  <div class="breedcrumb bg-gray-100 p-2bg-white dark:text-black">
    <div class="container">
      <ol
        class="flex items-center"
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <li
          class="breadcrumb-item px-1"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <NuxtLink class="text-[12px] flex items-center" to="/" itemprop="item">
            <span itemprop="name">
              <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 17px;height: 17px;margin: 0 5px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.31 1.77599C11.496 1.59871 11.743 1.49982 12 1.49982C12.2569 1.49982 12.504 1.59871 12.69 1.77599L20.69 9.39462L23.19 11.7745C23.3823 11.9575 23.494 12.2094 23.5005 12.4747C23.5071 12.7401 23.408 12.9972 23.225 13.1894C23.042 13.3817 22.7901 13.4934 22.5247 13.5C22.2594 13.5065 22.0023 13.4074 21.81 13.2244L21 12.4515V19.9991C21 20.5295 20.7893 21.0382 20.4142 21.4132C20.0391 21.7883 19.5304 21.999 19 21.999H4.99999C4.46955 21.999 3.96084 21.7883 3.58577 21.4132C3.2107 21.0382 2.99999 20.5295 2.99999 19.9991V12.4515L2.18999 13.2234C1.99797 13.4064 1.74112 13.5056 1.47594 13.4993C1.21077 13.4929 0.958985 13.3814 0.775986 13.1894C0.592986 12.9974 0.493761 12.7406 0.500137 12.4754C0.506513 12.2103 0.617969 11.9585 0.809986 11.7755L3.30999 9.39462L11.31 1.77499V1.77599ZM4.99999 10.5476V19.9991H8.99999V14.9993C8.99999 14.2037 9.31606 13.4407 9.87866 12.8781C10.4413 12.3155 11.2043 11.9995 12 11.9995C12.7956 11.9995 13.5587 12.3155 14.1213 12.8781C14.6839 13.4407 15 14.2037 15 14.9993V19.9991H19V10.5476L12 3.87989L4.99999 10.5466V10.5476ZM13 19.9991V14.9993C13 14.7341 12.8946 14.4798 12.7071 14.2923C12.5196 14.1047 12.2652 13.9994 12 13.9994C11.7348 13.9994 11.4804 14.1047 11.2929 14.2923C11.1053 14.4798 11 14.7341 11 14.9993V19.9991H13Z" fill="black"></path></svg>
                  -->
              {{ $t("websiteName") }}
            </span>

            /
            <meta itemprop="position" content="1" />
          </NuxtLink>
        </li>

        <li
          class="breadcrumb-item px-1 text-xs"
          v-for="(item, index) in data"
          itemprop="itemListElement"
          itemscope="itemscope"
          itemtype="http://schema.org/ListItem"
        >
          <NuxtLink class="text-[13px]" itemprop="item" :to="item?.url">
            <span itemprop="name">
              {{ item?.name }}
            </span>

            <span class="text-[13px]">/</span>
            <meta itemprop="position" :content="index + 2" />
          </NuxtLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ol {
  overflow: auto;
  height: 30px;

  li {
    a {
      white-space: nowrap;
    }
    &:last-child {
      color: #393939;
      span:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>

<script setup>
const props = defineProps({
  data: Object,
});

onMounted(() => {
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(props.data);
});
</script>
