<template>
    <section class="border-b">

      <div class="container py-5 relativer">
        <swiper class="main"
        :modules="modules"
        :pagination="{ clickable: true }"
        :breakpoints="{
                    '350': {
                        slidesPerView: 2,
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
    >
      <swiper-slide v-for="item in 15" class="text-center text-xs bg-red-100 p-1 py-2 min-h-[260px] min-w-[260px] rounded rounded-lg">
        <nuxt-link to="#"></nuxt-link>

    </swiper-slide>

    </swiper>
    </div>
    </section>
    
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Pagination],
        };
      },
    };
  </script>
  

  <style  lang="scss" >
  .main.swiper {
    padding-bottom:40px;

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