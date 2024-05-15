<template>
    <section class="border-b">

      <div class="container py-5 relativer">
        <swiper class="main"
        :modules="modules"
        :pagination="{ clickable: true }"
        :breakpoints="{
                    '350': {
                        slidesPerView: 1,
                    },
                    '600': {
                        slidesPerView: 3,
                    },
                    '1024': {
                        slidesPerView: 3,
                    },


                }"
      :space-between="10"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    >
      <swiper-slide v-for="item in result?.list"
       class="text-center text-xs bg-red-100 overflow-hidden min-h-[260px] min-w-[260px] rounded rounded-lg">
        <nuxt-link to="#" class="block">
          <img :src="showImageBaseUrl+item?.picture?.url"
            class="w-full h-[250px] object-cover"
          alt="item?.name">
        </nuxt-link>

    </swiper-slide>

    </swiper>
    </div>
    </section>
    
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {

        const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const bannerStore = useBanner();

const result = ref();

onMounted(async()=>{
    result.value = await bannerStore.getBanner( bannerStore.mainSlider);

})
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Autoplay,Pagination],
          bannerStore,
result,showImageBaseUrl
        };
      },
    };
  </script>
  

  <style  lang="scss" >
  .main.swiper {
    padding-bottom:40px;
    padding-left: 50px;

    .swiper-pagination{
        top: unset !important;
        bottom: 0px !important;
        span{
          border: 1px solid #000 !important;
          background:#fff;
          opacity:1;
          width:11px !important;
          height:11px !important;

          &.swiper-pagination-bullet-active{
            background:#000
          }
        }
      }
    }

  </style>