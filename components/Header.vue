<template>
  <header class="shadow min-h-10 sticky top-0 z-10 bg-white">
    <HeaderAds />
    <div
      v-if="isOpenDesktop == true"
      class="cover bg-[#000000a1] z-10 h-[calc(100vh-144px)] min-w-[100vw] p-2 right-0 fixed bottom-[0]"
    ></div>
    <div class="container lg:flex-row-reverse flex items-center p-1">
      <div
        @click="isOpen = true"
        class="menu lg:hidden w-[50px] min-w-[50px] flex justify-center items-center text-xl h-[50px]"
      >
        <UIcon name="i-heroicons-bars-3-16-solid" />
      </div>

      <div
        class="basket hidden relative lg:flex text-xs items-center w-[150px] border-s ps-2 justify-center"
      >
        <svg
          class="me-2"
          width="20"
          height="17"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-inspector="components/Header.vue:115:11"
          data-v-a81738bd=""
        >
          <path
            d="M28.7775 2H25.869C24.319 2 22.9735 3.06849 22.6224 4.57826L22.3607 5.70366M5.16662 21.9072H15.9453C17.4954 21.9072 18.8409 20.8387 19.192 19.3289L19.7767 16.8146M19.7767 16.8146H9.78657C7.00764 16.8146 4.5202 15.0908 3.54445 12.4889L2.12592 8.70612C1.58114 7.25336 2.65508 5.70366 4.20663 5.70366H22.3607M19.7767 16.8146L22.3607 5.70366"
            stroke="#0F0F0F"
            stroke-width="2.2222"
            stroke-linecap="round"
            data-v-a81738bd=""
          ></path>
          <ellipse
            cx="7.4814"
            cy="25.1482"
            rx="1.85183"
            ry="1.85183"
            fill="#0F0F0F"
            data-v-a81738bd=""
          ></ellipse>
          <ellipse
            cx="15.8146"
            cy="25.1482"
            rx="1.85183"
            ry="1.85183"
            fill="#0F0F0F"
            data-v-a81738bd=""
          ></ellipse>
        </svg>
        <span>{{ $t("basket") }}</span>
        <!-- <UBadge class="absolute left-0 top-[-5px] text-xs p-1" color="red" variant="solid"
          >5</UBadge> -->
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-4 w-4 bg-rose-500 flex items-center text-white justify-center"
            >5</span
          >
        </span>
      </div>
      <div
        class="account hidden lg:flex text-xs items-center w-[150px] ps-2 justify-center"
      >
        <svg
          class="me-2"
          width="20"
          height="17"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-inspector="components/Header.vue:70:11"
          data-v-a81738bd=""
        >
          <path
            d="M1 23.88V15.6594C1 13.7663 2.73197 12.3464 4.58835 12.7177L8.46991 13.494C10.8002 13.96 13.1998 13.96 15.5301 13.494L19.4116 12.7177C21.268 12.3464 23 13.7663 23 15.6594V21.0424C23 23.2086 20.7745 24.6608 18.7918 23.7884L12 20.8M15.96 4.96V4.96C15.96 7.14705 14.187 8.92 12 8.92V8.92C9.81295 8.92 8.04 7.14705 8.04 4.96V4.96C8.04 2.77295 9.81295 1 12 1V1C14.187 1 15.96 2.77295 15.96 4.96Z"
            stroke="#0F0F0F"
            stroke-width="2"
            stroke-linecap="round"
            data-v-a81738bd=""
          ></path>
        </svg>
        <NuxtLink to="/profile" v-if="authStor?.userData?.data?.firstName">
          {{ authStor?.userData?.data?.firstName }}
        </NuxtLink>
        <NuxtLink to="/loginRegister" v-else>{{ $t("Profile") }}</NuxtLink>
      </div>
      <HeaderSearch></HeaderSearch>
      <NuxtLink to="/" class="logo">
        <img class="w-[90px] h-auto" src="/img/logo/logo.png" alt="" />
      </NuxtLink>
    </div>
    <div
      class="toolbar lg:static py-1 lg:py-0 text-sm fixed bottom-0 right-0 w-full bg-gray-200 z-10"
    >
      <div
        class="container flex items-center justify-around lg:justify-start min-h-[20px]"
      >
        <nuxt-link class="px-1 flex flex-col items-center"
         to="/">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 24.64V11.0198C2 9.3482 2.79786 7.77694 4.14753 6.79065L10.866 1.88097C12.387 0.769527 14.4626 0.80955 15.9395 1.9788L22.0132 6.78712C23.2682 7.78063 24 9.2934 24 10.894V21.4971C24 23.2329 22.5929 24.64 20.8571 24.64H13.44V17.16"
              stroke="#0F0F0F"
              stroke-width="2.09524"
              stroke-linecap="round"
            />
          </svg>

          <span>{{ $t("home") }}</span>
        </nuxt-link>

        <button
          class="lg:hidden px-1 flex flex-col items-center lg:border-s border-gray-200  lg:block lg:ps-4 lg:ms-4"
          @click="isOpen = true"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/></svg>
          <span>{{ $t("products") }}</span>
        </button>
        <button
          class="px-1 flex flex-col relative items-center lg:border-s border-dotted border-gray-400 hidden lg:block lg:ps-4 lg:ms-4"
          @mouseover="isOpenDesktop = true"
          @mouseleave="isOpenDesktop = false"
        >
          <span>{{ $t("category") }}</span>

          <HeaderMegaMenu v-if="isOpenDesktop == true" />
        </button>
        <nuxt-link
          v-if="authStor?.userData?.data?.firstName"
          class="px-1 flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4 lg:hidden"
          to="/profile"
        >
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 23.88V15.6594C1 13.7663 2.73197 12.3464 4.58835 12.7177L8.46991 13.494C10.8002 13.96 13.1998 13.96 15.5301 13.494L19.4116 12.7177C21.268 12.3464 23 13.7663 23 15.6594V21.0424C23 23.2086 20.7745 24.6608 18.7918 23.7884L12 20.8M15.96 4.96V4.96C15.96 7.14705 14.187 8.92 12 8.92V8.92C9.81295 8.92 8.04 7.14705 8.04 4.96V4.96C8.04 2.77295 9.81295 1 12 1V1C14.187 1 15.96 2.77295 15.96 4.96Z"
              stroke="#0F0F0F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <span v-if="authStor?.userData?.data?.firstName">
            {{ authStor?.userData?.data?.firstName }}
          </span>
        </nuxt-link>
        <NuxtLink
          class="px-1 flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4 lg:hidden"
          to="/loginRegister"
          v-else
        >
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 23.88V15.6594C1 13.7663 2.73197 12.3464 4.58835 12.7177L8.46991 13.494C10.8002 13.96 13.1998 13.96 15.5301 13.494L19.4116 12.7177C21.268 12.3464 23 13.7663 23 15.6594V21.0424C23 23.2086 20.7745 24.6608 18.7918 23.7884L12 20.8M15.96 4.96V4.96C15.96 7.14705 14.187 8.92 12 8.92V8.92C9.81295 8.92 8.04 7.14705 8.04 4.96V4.96C8.04 2.77295 9.81295 1 12 1V1C14.187 1 15.96 2.77295 15.96 4.96Z"
              stroke="#0F0F0F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          {{ $t("Profile") }}</NuxtLink
        >

        <nuxt-link
          class="px-1 flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4"
          to="/contact"
        >
          <svg
            width="12"
            height="28"
            viewBox="0 0 12 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64879 7.88766H9.97973C10.4586 7.88766 10.8468 7.49947 10.8468 7.02062V2.7138C10.8468 2.23495 10.4586 1.84676 9.97973 1.84676H6.35547C3.48235 1.84676 1.15324 4.17588 1.15324 7.049L1.15324 20.8921C1.15324 23.7652 3.48235 26.0944 6.35547 26.0944H9.97973C10.4586 26.0944 10.8468 25.7062 10.8468 25.2273L10.8468 21.2497C10.8468 20.7708 10.4586 20.3826 9.97973 20.3826L5.64879 20.3826M5.64879 12.3932V15.9694"
              stroke="#0F0F0F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <span>{{ $t("contactus") }}</span>
        </nuxt-link>
        <nuxt-link
          class="px-1 lg:hidden flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4"
          to="#"
        >
          <svg
            width="30"
            height="27"
            viewBox="0 0 30 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.7775 2H25.869C24.319 2 22.9735 3.06849 22.6224 4.57826L22.3607 5.70366M5.16662 21.9072H15.9453C17.4954 21.9072 18.8409 20.8387 19.192 19.3289L19.7767 16.8146M19.7767 16.8146H9.78657C7.00764 16.8146 4.5202 15.0908 3.54445 12.4889L2.12592 8.70612C1.58114 7.25336 2.65508 5.70366 4.20663 5.70366H22.3607M19.7767 16.8146L22.3607 5.70366"
              stroke="#0F0F0F"
              stroke-width="2.2222"
              stroke-linecap="round"
            />
            <ellipse cx="7.4814" cy="25.1482" rx="1.85183" ry="1.85183" fill="#0F0F0F" />
            <ellipse cx="15.8146" cy="25.1482" rx="1.85183" ry="1.85183" fill="#0F0F0F" />
          </svg>

          <span>{{ $t("basket") }}</span>
        </nuxt-link>
        <nuxt-link
          class="px-1 hidden lg:flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4"
          to="/about"
        >
          <span>{{ $t("aboutus") }}</span>
        </nuxt-link>
        <nuxt-link
          class="px-1 hidden lg:flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4"
          to="/brand"
        >
          <span>{{ $t("ourBrands") }}</span>
        </nuxt-link>
        <nuxt-link
          class="px-1 hidden lg:flex flex-col items-center lg:border-s border-dotted border-gray-400 lg:ps-4 lg:ms-4"
          to="/blog"
        >
          <span>{{ $t("blogs") }}</span>
        </nuxt-link>

        <UTooltip
          class="hidden lg:flex ms-auto"
          text="پشتیبانی24 ساعته"
          :popper="{ arrow: true }"
        >
          <nuxt-link class="px-1 ms-auto flex items-center lg:ps-4 support" to="#">
            <span>09125012563</span>

            <svg
              class="ms-2"
              width="8"
              height="15"
              viewBox="0 0 12 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64879 7.88766H9.97973C10.4586 7.88766 10.8468 7.49947 10.8468 7.02062V2.7138C10.8468 2.23495 10.4586 1.84676 9.97973 1.84676H6.35547C3.48235 1.84676 1.15324 4.17588 1.15324 7.049L1.15324 20.8921C1.15324 23.7652 3.48235 26.0944 6.35547 26.0944H9.97973C10.4586 26.0944 10.8468 25.7062 10.8468 25.2273L10.8468 21.2497C10.8468 20.7708 10.4586 20.3826 9.97973 20.3826L5.64879 20.3826M5.64879 12.3932V15.9694"
                stroke="#0F0F0F"
                stroke-width="2"
                stroke-linecap="round"
              /></svg
          ></nuxt-link>
        </UTooltip>
      </div>
    </div>

    <USlideover v-model="isOpen" prevent-close>
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1 pad-0 ' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {{ $t("websiteName") }}
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <HeaderMegaMenuMobile />
        <!-- <Placeholder class="h-full" /> -->
      </UCard>
    </USlideover>

    
  </header>
</template>

<script setup>
const route = useRoute();
const categoryStore = useCategory();
const authStor = useAuth();

const isOpen = ref(false);
const isOpenDesktop = ref(false);
const links = [
  {
    label: `حساب کاربری`,
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
  },
  {
    label: "Installation",
    icon: "i-heroicons-home",
    to: "/getting-started/installation",
  },
  {
    label: "Vertical Navigation",
    icon: "i-heroicons-chart-bar",
    to: `${route.path.startsWith("/dev") ? "/dev" : ""}/navigation/vertical-navigation`,
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
    to: "/navigation/command-palette",
  },
];
const items = [
  {
    label: "لوازم یدکی",
    content: "This is the content shown for Tab1",
  },
  {
    label: "لوازم جانبی",
    content: "And, this is the content for Tab2",
  },
  {
    label: "لوازم مصرفی",
    content: "Finally, this is the content for Tab3",
  },
];

onMounted(async () => {
  await categoryStore.getCategory();
  await authStor.getCurrentUser();
});
</script>

<style>
.pad-0 {
  padding: 0 !important;
}
</style>

<style lang="scss" scoped>
@media (min-width: 1000px) {
  header {
    z-index: 1000;
    background-color: #fff;
  }
}
.toolbar {
  svg {
    margin-bottom: 10px;
    width: 17px;
    height: 20px;
  }

  @media (min-width: 1000px) {
    svg {
      display: none;
    }

    .support {
      svg {
        display: block !important;
        margin-bottom: 0;

        animation: shake 2s infinite;
      }
    }
    a,
    button {
      padding-top: 10px;
      padding-bottom: 10px;
      
    }
  }
}

.activeMenu {
  animation: load 1s;
}

@keyframes load {
  from {
    // transform: scale(.9);
    translate: 0 10px;
    opacity: 0;
  }
  to {
    // transform: scale(1);
    translate: 0 0px;
    opacity: 1;
  }
}

@keyframes shake {
  0% {
    // transform: scale(.9);
    translate: 3px 0px;
    opacity: 0;
    transform: rotate(20deg);
  }
  50% {
    // transform: scale(1);
    translate: -3px 0px;
    opacity: 1;
    transform: rotate(-20deg);
  }
  100% {
    // transform: scale(1);
    translate: 0px 0px;
    opacity: 1;
    transform: rotate(0deg);
  }
}
</style>
