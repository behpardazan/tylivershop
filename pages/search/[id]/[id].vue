<template>
  <section class="product-inner">
    <GlobalBreedCrumb :data="[
      {
        name: $t('products'),
        url: `/search`,
      },
      {
        name: data?.data?.name,
        url: ``,
      },
    ]" />
    <div class="container p-2 flex flex-wrap">

      <div class="title w-full mt-2 flex items-center justify-between">
        <h1 class="text-lg">{{ data?.data?.name }}</h1>
        <div class="rate flex items-center justify-end">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2613_41)">
              <path
                d="M13.7299 3.51L15.4899 7.03C15.7299 7.52 16.3699 7.99 16.9099 8.08L20.0999 8.61C22.1399 8.95 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95 3.89991 8.61L7.08991 8.08C7.61991 7.99 8.25991 7.52 8.49991 7.03L10.2599 3.51C11.2199 1.6 12.7799 1.6 13.7299 3.51Z"
                fill="#FFD600" />
            </g>
            <defs>
              <filter id="filter0_d_2613_41" x="1.20098" y="2.0775" width="21.6022" height="21.6383"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2613_41" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2613_41" result="shape" />
              </filter>
            </defs>
          </svg>
          <span class="mt-1 ps-2">{{ data?.data?.rateAvg }}/5</span>
        </div>
      </div>
      
      <div class="image-box w-full lg:w-1/3 border rounded mt-1 flex justify-center flex-col justify-center items-center">
        <img :src="showImageBaseUrl + data?.data?.picture?.url" alt="A fluffy cat"
          class="image-zoomable w-[250px] h-[250px]" />

<!-- {{pictureList}} -->
          <div class="tiny-images flex flex-wrap">
            <img class="w-[60px] image-zoomable  h-[60px] border rounded m-1" v-for="item in pictureList?.list" :src="showImageBaseUrl+item?.picture?.url" :key="ite?.id" >
          </div>
      </div>
      <div class="info-box lg:w-1/3 w-full p-2 text-sm">
        <p>
          <strong class="min-w-[90px] inline-block">{{ $t("brand") }}:</strong>{{ data?.data?.brand?.name }}
        </p>
        <p>
          <strong class="min-w-[90px] inline-block">{{ $t("code") }}:</strong>{{ data?.data?.codeValue }}
        </p>
        <p>
          <strong class="min-w-[90px] inline-block">{{ $t("status") }}:</strong>{{ data?.data?.status?.name }}
        </p>
        <p>
          <strong class="min-w-[90px] inline-block">{{ $t("category") }}:</strong>{{ data?.data?.category?.name }}
        </p>
        <p>
          <strong class="min-w-[90px] inline-block">{{ $t("summary") }}:</strong>
        <p class="text-justify text-sm">
          {{ data?.data?.summary }}</p>
        </p>
      </div>
      <div class="info-box lg:w-1/3 w-full p-1">
        <div class="icon-box text-xs w-full flex items-center justify-around py-2 border my-2 rounded bg-gray-100">
        <nuxt-link class="flex items-center p-1 hover:bg-green-200 px-2 border-gray-100 border rounded hover:border hover:border-green-300" to="">
          <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          {{ $t("comments") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1 hover:bg-green-200 px-2 border-gray-100 border rounded hover:border hover:border-green-300" to="">
          <svg class="me-1"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 16.01H19" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 4V20" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 4V20" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          {{ $t("compare") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1 hover:bg-green-200 px-2 border-gray-100 border rounded hover:border hover:border-green-300" to="">
          <svg class="me-1"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M12.3301 17.45C12.1501 17.51 11.8401 17.51 11.6601 17.45C10.1001 16.92 6.6001 14.69 6.6001 10.91C6.6001 9.24 7.9401 7.89001 9.6001 7.89001C10.5801 7.89001 11.4501 8.36001 12.0001 9.10001C12.5401 8.37001 13.4201 7.89001 14.4001 7.89001C16.0601 7.89001 17.4001 9.24 17.4001 10.91C17.4001 14.69 13.9001 16.92 12.3301 17.45Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          {{ $t("like") }}
        </nuxt-link>
        <nuxt-link class="flex items-center p-1 hover:bg-green-200 px-2 border-gray-100 border rounded hover:border hover:border-green-300" to="">
          <svg class="me-1"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="#0F0F0F" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"
              stroke="#0F0F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          {{ $t("QR") }}
        </nuxt-link>
      </div>
        <p>
          <strong>{{ $t("price") }}:</strong>{{ data?.data?.price?.toLocaleString() }}
          <span class="text-gray-500"> {{ $t("toman") }}</span>
        </p>
        <!-- <p class="text-gray-500">
          <strong>{{ $t("oldPrice") }}:</strong><del>{{ data?.data?.price?.toLocaleString() }}</del>
          <span> {{ $t("toman") }}</span>
        </p> -->
      <ProductsSaleBox :price="data?.data?.price" />
        
      </div>
      <div class="info-box"></div>
    </div>
  </section>
  <ProductsSimilarProducts :similarData="{ categoryId: data?.data?.category?.id, productId: data?.data?.id }" />

  <div class="container">
    <div class="details p-2 text-justify">
      <strong class="bg-black text-white lg:text-black lg:bg-white lg:text-start block rounded  text-center p-2 my-2">{{
        $t('introductionOfProduct') }}</strong>
      <p v-html="data?.data?.description"></p>
    </div>
  
  <div class="details p-2 text-justify">
    <strong class="bg-black text-white lg:text-black lg:bg-white lg:text-start block rounded  text-center p-2 my-2">
{{ $t('technicalDescription') }}</strong>
    <UTable :rows="productFeature" />
  </div>
  <div class="details p-2 text-justify">
    <strong class="bg-black text-white lg:text-black lg:bg-white lg:text-start block rounded  text-center p-2 my-2">{{
 $t('comments') }}</strong>
      <div class="flex">
        <div class="commentBox bg-[#a8a6a6] py-[10px] rounded-[5px] w-full lg:w-1/2" v-if="productComment?.length > 0">
          <div
            class="commentItem bg-[#fff] sm:p-5 p-2 rounded-[5px] my-[6px] sm:my-[10px] w-[98%] m-auto"
            v-for="(item, index) in productComment"
            :key="index"
          >
            <div class="commentInfo flex items-start">
              <img
                src="/img/user.png"
                class="w-[40px] h-[40px] object-cover rounded"
                alt=""
              />
              <div class="commentDetail ms-[5px]">
                <p class="UserName sm:text-[17px] text-[13px]">
                  {{ item.user?.fullName }}
                </p>
                <p
                  class="dateTime text-[#807f7f] sm:text-[14px] text-[12px] mt-[3px]"
                >
                  {{ item.createDate }}
                </p>
                <div class="rateBox flex">
                  <svg
                    v-for="i in item?.rate"
                    :key="i"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-star-fill rate"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="commentText mt-[15px] sm:text-[15px] text-[13px]">
              <p>
                {{ item?.text }}
              </p>
              <div
                class="commentBossItem bg-[#d7e1fc91] p-5 rounded-[5px] my-[10px] w-[98%] m-auto"
                v-if="item.answer != ''"
              >
                <div class="commentInfo flex items-center">
                  <img
                    src="/img/user.png"
                    class="w-[40px] h-[40px] object-cover rounded"
                    alt=""
                  />
                  <div class="commentDetail ms-[8px]">
                    <p class="UserName sm:text-[17px] text-[13px]">manager</p>
                  </div>
                </div>
                <div class="commentText mt-[15px] sm:text-[15px] text-[13px]">
                  <p>
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sendComment p-3 bg-[#ebeaea] mt-4 rounded-[5px] border-[#d8d8d8] border w-full lg:w-1/2"
        >
        
          <div
            class="rateBox1 flex flex-row-reverse justify-end "
          >
            <input
              type="radio"
              name="rate"
              id="oneRate"
              @change="rate = 1"
              class="hidden"
            />
            <label class="ml-[8px] my-[15px]" for="oneRate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-star-fill rate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                /></svg
            ></label>
            <input
              type="radio"
              name="rate"
              id="twoRate"
              @change="rate = 2"
              class="hidden"
            />
            <label class="ml-[8px] my-[15px]" for="twoRate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-star-fill rate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                /></svg
            ></label>
            <input
              type="radio"
              name="rate"
              id="threeRate"
              @change="rate = 3"
              class="hidden"
            />
            <label class="ml-[8px] my-[15px]" for="threeRate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-star-fill rate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                /></svg
            ></label>
            <input
              type="radio"
              name="rate"
              id="fourRate"
              @change="rate = 4"
              class="hidden"
            />
            <label class="ml-[8px] my-[15px]" for="fourRate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-star-fill rate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                /></svg
            ></label>
            <input
              type="radio"
              name="rate"
              id="fiveRate"
              @change="rate = 5"
              class="hidden"
            />
            <label class="ml-[8px] my-[15px]" for="fiveRate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi bi-star-fill rate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                /></svg
            ></label>
          </div>
          <textarea
            class="min-h-[100px] w-full p-1"
            v-model="commentText"
          ></textarea>
          <button class="py-2 px-3 text-[18px] bg-green-600 text-white p-2 w-[300px] rounded mt-3" @click="sendComment">
            {{ $t('add') }}
            
          </button>
        </div>
        </div>
</div>
  </div>

  <!-- <ProductsRelatedProducts
    :similarData="{ categoryId: data?.data?.category?.id, productId: data?.data?.id }"
  /> -->
  <!-- {{ data?.data }} -->
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
const productsStore = useProducts();
const authStor = useAuth();
const productFeature = ref();
const pictureList=ref();
const route = useRoute();
const count = ref(1);
const commentText = ref("");
const { data, pending, error, refresh } = await useFetch("/api/products/productItem", {
  query: { id: route.params.id.split("-")[0] },
});


onMounted(async ()=>{
   pictureList.value=await productsStore.getProductPictures(route.params.id.split("-")[0])
   productFeature.value=await productsStore.productFeatureValue(route.params.id.split("-")[0])
   console.log("=============================");
  console.log(productFeature);
})

const sendComment = async () => {
  if (authStore.profile == null) {
    toast.warning("Melden Sie sich an, um einen Kommentar zu posten !", {
      position: "top-right",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: true,
      rtl: false,
    });

    navigateTo('/authorize/login')
    authStore.backUrl = route.fullPath
    
    
  
  } else {
    try {
      const response = await $fetch("/api/comments/comment", {
        method: "POST",
        query: {
          body: {
            text: commentText.value,
            rate: rate.value,
            productId: route.params.id.split("-")[0],
          },
        },
      });

      // console.log("================= comment =============");
      if (response.isSuccess) {
        toast.success(" Ihr Kommentar wurde erfolgreich registriert!", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        await getComments();
      }else{
        response?.messages.forEach((item)=>{
          toast.error(item?.item1, {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        })
      }
    } catch (error) {
      // console.log(error);
    }
  }
};
const getComments = async () => {
  try {
    const response = await $fetch("/api/comments/comments", {
      method: "GET",
      query: {
        id: route.params.id.split("-")[0],
      },
    });

    console.log("================= comment =============");
    console.log(response);
    productComment.value = response.list;
  } catch (error) {
    // console.log(error);
  }
};



// cartBody.value = {
//                     cartUpdateType: 5,
//                     returnCart: false,
//                     userId: 0,
//                     uniqueId: "",
//                     addressId: 0,
//                     rebateCode: "",
//                     deliveryId: 0,
//                     merchantId: 0,
//                     productId: id,
//                 };
</script>


<style lang="scss">
.medium-zoom-overlay {
  background-color: rgba(10, 0, 0, 0.657) !important;
  z-index: 1000;
}

.medium-zoom-image--opened {
  z-index: 10000;
}

.details {
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 10px auto;
    border: 1px solid #3333;
    border-radius: 6px;
  }
}


.rate {
  fill: rgb(250, 219, 47);
}
.rateBox1 .rate {
  fill: #9b9a9a;
}
.rateBox1 svg {
  width: 20px;
}
.rateBox1 label:hover svg {
  fill: gold;
}
.rateBox1 label:hover svg path,
.rateBox1 label:hover ~ label svg path,
.rateBox1 input[type="radio"]:checked ~ label svg path {
  fill: #f2b600;
  stroke: #f2b600;
  cursor: pointer;
}

</style>
