<template>
  <footer
    class="bg-yellow-500 min-h-[200px] mt-auto w-full py-3 pb-[82px] lg:pb-0 relative"
  >
    <div class="container p-1 lg:flex lg:pb-4">
      <div>
        <div class="about text-sm text-justify p-1">
          <img
            class="hidden lg:block w-[100px] h-auto m-auto"
            src="/img/logo/logo-black.png"
            alt=""
          />
          <strong>درباره تایلیور</strong>
          <p>
            متنی برای مثال برای و نمایشی در تایلیور شاپ متنی برای مثال برای و نمایشی در
            تایلیور شاپ ..
          </p>
          <NuxtLink
            to="/about"
            class="bg-black p-2 rounded-lg text-center m-auto mt-3 block w-1/3 text-yellow-500 py-3 text-xs"
            >مشاهده بیشتر</NuxtLink
          >
        </div>
        <hr class="my-2 border-[#3333]" />

        <div class="address text-sm text-justify p-1">
          <p class="flex items-start">
            <UIcon class="text-lg min-w-[20px]" name="i-heroicons-map-pin-16-solid" />

            <span>فروشگاه مرکزی: میدان سیلان خیابان سبلان شمالی کوچه امیدی پلاک 642</span>
          </p>
        </div>
      </div>

      <div class="links text-sm flex flex-wrap text-justify p-1">
        <ul class="p-2 w-1/2" v-for="item in 2">
          <li><strong>دسترسی سریع</strong></li>
          <li v-for="item in 5">
            <nuxt-link class="p-1 block" to="#">عنوان لینک</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="permission text-sm flex items-center justify-center p-1 lg:w-1/3">
        <nuxt-link
          v-for="item in 4"
          class="w-1/4 p-3 block transition-all hover:p-2"
          to="#"
        >
          <img class="w-full h-auto" src="/img/logo/logo-black.png" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div
      class="social text-sm flex items-center justify-center p-1 bg-gradient-to-r from-blue-700 to-cyan-600 p-2 lg:absolute lg:left-0 lg:bottom-0"
    >
      <span class="block w-3/5 text-xs text-white"
        >مارا در شبکه های اجتماعی دنبال کنید</span
      >
      <div class="social-parent w-2/5 flex">
        <nuxt-link v-for="item in 4" class="w-1/4 p-1 block transition-all" to="#">
          <div
            class="bg-white w-[30px] h-[30px] rounded-full shadow text-center items-center justify-center"
          ></div>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const detailStore = useDetails();
  
  onMounted(async()=>{

    
  })
</script>

<style lang="scss" scoped></style>
