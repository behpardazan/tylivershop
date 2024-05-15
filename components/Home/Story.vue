<template>
  <div class="container pt-5 px-4">
    <swiper
      :breakpoints="{
        '350': {
          slidesPerView: 4,
        },
        '600': {
          slidesPerView: 6,
        },
        '1024': {
          slidesPerView: 8,
        },
      }"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        @click="
          () => {
            showModal = true;
            storydata.name = item?.name;
            storydata.image = showImageBaseUrl + item?.picture?.url;
          }
        "
        v-for="item in result?.list"
        class="text-center min-w-[60px] text-xs hover:bg-gray-100 p-1 py-2 rounded rounded-lg"
      >
        <div
          class="story w-[60px] h-[60px] bg-gray-200 rounded-full m-auto border border-blue-600 overflow-hidden shadow-lg flex items-center justify-center"
        >
          <img
            class="w-full h-full object-cover border-[3px] border-white rounded-full"
            :src="showImageBaseUrl + item?.picture?.url"
            alt=""
          />
        </div>
        <span class="text-xs mt-2 block">{{ item?.name }}</span>
        <!-- {{}} -->
        <!-- <svg
          width="10"
          height="10"
          class="m-auto mt-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.707 4.29535C11.8945 4.48288 11.9998 4.73719 11.9998 5.00235C11.9998 5.26751 11.8945 5.52182 11.707 5.70935L6.41403 11.0023H20C20.2652 11.0023 20.5196 11.1077 20.7071 11.2952C20.8947 11.4828 21 11.7371 21 12.0023C21 12.2676 20.8947 12.5219 20.7071 12.7095C20.5196 12.897 20.2652 13.0023 20 13.0023H6.41403L11.707 18.2953C11.8892 18.484 11.99 18.7366 11.9877 18.9988C11.9854 19.2609 11.8803 19.5118 11.6948 19.6972C11.5094 19.8826 11.2586 19.9877 10.9964 19.99C10.7342 19.9923 10.4816 19.8915 10.293 19.7094L3.29303 12.7093C3.10556 12.5218 3.00024 12.2675 3.00024 12.0023C3.00024 11.7372 3.10556 11.4829 3.29303 11.2954L10.293 4.29535C10.4806 4.10788 10.7349 4.00256 11 4.00256C11.2652 4.00256 11.5195 4.10788 11.707 4.29535Z"
            fill="black"
          />
        </svg> -->
      </swiper-slide>
    </swiper>
    <div
      class="modal fixed top-0 right-0 w-full h-full z-[1000] bg-[#000000c4] flex flex-col justify-center items-center"
      v-if="showModal"
    >
      <div class="story-header flex items-center justify-between w-[300px]">
        <span class="text-white"> {{ storydata?.name }}</span>
        <button class="text-white" @click="showModal = false" type="">
          <UIcon name="i-heroicons-x-mark-16-solid" />
        </button>
      </div>
      <img class="w-[300px]" :src="storydata?.image" alt="" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const showModal = ref(false);
    const {
      public: { showImageBaseUrl },
    } = useRuntimeConfig();

    const storydata = ref({
      name: "",
      image: "",
    });

    const bannerStore = useBanner();

    const result = ref();

    onMounted(async () => {
      result.value = await bannerStore.getBanner(bannerStore.story);
    });
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      showModal,
      bannerStore,
      result,
      showImageBaseUrl,
      storydata,
    };
  },
};
</script>
