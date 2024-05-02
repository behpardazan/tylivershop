<template>
  <section class="product-inner">
    <GlobalBreedCrumb
      :data="[
        {
          name: $t('products'),
          url: `/search`,
        }, {
          name: data?.data?.name,
          url: ``,
        },
      ]"
    />
    <div class="container p-2 flex flex-wrap">
      <div class="title w-full">
        <h1>{{ data?.data?.name }}</h1>
        <div class="rate flex items-center justify-end">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2613_41)">
              <path
                d="M13.7299 3.51L15.4899 7.03C15.7299 7.52 16.3699 7.99 16.9099 8.08L20.0999 8.61C22.1399 8.95 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95 3.89991 8.61L7.08991 8.08C7.61991 7.99 8.25991 7.52 8.49991 7.03L10.2599 3.51C11.2199 1.6 12.7799 1.6 13.7299 3.51Z"
                fill="#FFD600"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2613_41"
                x="1.20098"
                y="2.0775"
                width="21.6022"
                height="21.6383"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2613_41"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2613_41"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span class="mt-1 ps-2">{{ data?.data?.rateAvg }}/5</span>
        </div>
      </div>
      <div class="icon-box text-xs w-full lg:w-1/2 flex items-center">
        <nuxt-link class="flex items-center p-1" to="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ $t("comments") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1" to="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 16.01H19"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 4V20"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4V20"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {{ $t("compare") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1" to="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3301 17.45C12.1501 17.51 11.8401 17.51 11.6601 17.45C10.1001 16.92 6.6001 14.69 6.6001 10.91C6.6001 9.24 7.9401 7.89001 9.6001 7.89001C10.5801 7.89001 11.4501 8.36001 12.0001 9.10001C12.5401 8.37001 13.4201 7.89001 14.4001 7.89001C16.0601 7.89001 17.4001 9.24 17.4001 10.91C17.4001 14.69 13.9001 16.92 12.3301 17.45Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {{ $t("like") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1" to="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"
              stroke="#0F0F0F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {{ $t("QR") }}
        </nuxt-link>
      </div>
      <div class="w-full lg:w-1/3"></div>
      <div class="image-box w-full lg:w-1/2 border rounded mt-1 flex justify-center">
        <img
          :src="showImageBaseUrl + data?.data?.picture?.url"
          alt="A fluffy cat"
          class="image-zoomable w-[250px] h-[250px]"
        />
      </div>
      <div class="info-box lg:w-1/2 w-full">
        <p><strong>{{ $t('brand') }}:</strong>{{ data?.data?.name }}</p>
        <p><strong>{{ $t('code') }}:</strong>{{ data?.data?.codeValue }}</p>
        <p><strong>{{ $t('category') }}:</strong>{{ data?.data?.category?.name }}</p>
        <p><strong>{{ $t('summary') }}:</strong>{{ data?.data?.category?.description }}</p>
        <p><strong>{{ $t('price') }}:</strong>{{ data?.data?.price?.toLocaleString() }} <span class="text-gray-500"> {{ $t('toman') }}</span></p>
        <p  class="text-gray-500"><strong>{{ $t('oldPrice') }}:</strong><del>{{ data?.data?.price?.toLocaleString() }}</del> <span> {{$t('toman')}}</span></p>
      </div>
      <div class="info-box"></div>
    </div>
  </section>
  <ProductsSimilarProducts :similarData="{categoryId:data?.data?.category?.id,productId: data?.data?.id}" />
  <!-- {{ data?.data }} -->
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch("/api/products/productItem", {
  query: { id: 5 },
});
</script>
<style lang="scss">
.medium-zoom-overlay {
  background-color: rgba(10, 0, 0, 0.657) !important;
  z-index: 1000;
}

.medium-zoom-image--opened {
  z-index: 10000;
}
</style>
