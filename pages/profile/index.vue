<template>
  <div class="dashboard-veiw">
    <p class="my-2 flex">
      <strong>داشبورد پنل کاربر</strong>
    </p>
    <!-- {{ authStor?.userData }} -->
    <hr />
    <div role="alert" class="mb-2 mt-4">
      <div class="border border-[#4BB543] rounded bg-green-100 px-4 py-3 text-green-700">
        <p>
          <strong>{{ authStor?.userData?.data?.firstName }} عزیز !</strong> سلام، خوش
          آمدید.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap sm:flex-nowrap">
      <div class="info-box lg:w-6/6 m-1 w-full">
        <strong class="flex items-center content-start">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 9.99511C8 8.93424 8.42143 7.91683 9.17157 7.16668C9.92172 6.41654 10.9391 5.99511 12 5.99511C13.0609 5.99511 14.0783 6.41654 14.8284 7.16668C15.5786 7.91683 16 8.93424 16 9.99511C16 11.056 15.5786 12.0734 14.8284 12.8235C14.0783 13.5737 13.0609 13.9951 12 13.9951C10.9391 13.9951 9.92172 13.5737 9.17157 12.8235C8.42143 12.0734 8 11.056 8 9.99511ZM15.824 14.6181C16.7755 13.831 17.461 12.7694 17.7868 11.5783C18.1127 10.3871 18.0631 9.12449 17.6448 7.96259C17.2265 6.8007 16.4599 5.79618 15.4495 5.0861C14.4392 4.37603 13.2344 3.995 11.9995 3.995C10.7646 3.995 9.55978 4.37603 8.54946 5.0861C7.53913 5.79618 6.77251 6.8007 6.35421 7.96259C5.9359 9.12449 5.8863 10.3871 6.21217 11.5783C6.53803 12.7694 7.22349 13.831 8.175 14.6181C4.986 15.7411 3 18.2421 3 20.9951C3 21.2603 3.10536 21.5147 3.29289 21.7022C3.48043 21.8898 3.73478 21.9951 4 21.9951C4.26522 21.9951 4.51957 21.8898 4.70711 21.7022C4.89464 21.5147 5 21.2603 5 20.9951C5 18.7251 7.355 15.9951 12 15.9951C16.645 15.9951 19 18.7251 19 20.9951C19 21.2603 19.1054 21.5147 19.2929 21.7022C19.4804 21.8898 19.7348 21.9951 20 21.9951C20.2652 21.9951 20.5196 21.8898 20.7071 21.7022C20.8946 21.5147 21 21.2603 21 20.9951C21 18.2421 19.016 15.7411 15.824 14.6181Z"
              fill="black"
            />
          </svg>

          اطلاعات کاربری</strong
        >
        <hr />
        <div class="info-item">
          <span>نام :</span>
          <span> {{ authStor?.userData?.data?.firstName }}</span>
        </div>
        <div class="info-item">
          <span> نام خانوادگی :</span>
          <span> {{  authStor?.userData?.data?.lastName }}</span>
        </div>
        <div class="info-item">
          <span> نام کاربری ( شماره تماس) :</span>
          <span> {{ authStor?.userData?.data?.mobile }}</span>
        </div>
        <div class="info-item">
          <span> ایمیل:</span>
          <!-- <span > آقا</span> -->
          <span> {{  authStor?.userData?.data?.email }}</span>
        </div>
        <div class="info-item">
          <span> پست الکترونیک(ایمیل):</span>
          <span> دارد</span>
        </div>
      </div>
      <div
        class="w-2/6 bg-gradient-to-b hidden from-blue-500 to-blue-800 flex items-center justify-center rounded rounded-[10px] m-1 flex-col relative"
      >
        <!-- <img class="w-[100px] h-[100px]" src="/img/wallet.png" /> -->
        <span class="text-white"> موجودی کیف پول: </span>
        <br />
        <span class="text-white">250.000.000 تومان </span>
        <nuxt-link
          to="/profile/wallet"
          class="absolute bottom-0 text-center right-[calc(50%-70px)] text-[#1e42a0] rounded-t-lg bg-gray-200 w-[140px] p-1 text-sm"
        >
          افزایش موجودی
        </nuxt-link>
      </div>
    </div>
    <div class="tableContainer">
      <div class="info-box mt-2 tablePro">
        <strong class="flex items-center content-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C11.245 4.00007 10.5096 4.24044 9.90031 4.6863C9.29102 5.13217 8.83946 5.76039 8.611 6.48L7.811 9H16.189L15.389 6.48C15.1605 5.76039 14.709 5.13217 14.0997 4.6863C13.4904 4.24044 12.755 4.00007 12 4ZM18.287 9L17.295 5.875C16.9383 4.75048 16.2328 3.76872 15.2808 3.07195C14.3288 2.37518 13.1797 1.99959 12 1.99959C10.8203 1.99959 9.67115 2.37518 8.71915 3.07195C7.76715 3.76872 7.0617 4.75048 6.705 5.875L5.713 9H3.348C3.03575 9.00001 2.72784 9.07313 2.44893 9.21351C2.17001 9.35388 1.92784 9.55761 1.7418 9.80839C1.55576 10.0592 1.43102 10.35 1.37757 10.6577C1.32412 10.9653 1.34345 11.2812 1.434 11.58L2.558 15.29L3.946 19.87C4.13269 20.4861 4.51259 21.0258 5.02959 21.4093C5.54659 21.7929 6.17326 22 6.817 22H17.183C17.8266 21.9998 18.453 21.7926 18.9698 21.409C19.4866 21.0255 19.8664 20.4859 20.053 19.87L21.442 15.29L22.566 11.58C22.6566 11.2812 22.6759 10.9653 22.6224 10.6577C22.569 10.35 22.4442 10.0592 22.2582 9.80839C22.0722 9.55761 21.83 9.35388 21.5511 9.21351C21.2722 9.07313 20.9642 9.00001 20.652 9H18.287ZM6.444 11H3.348L4.257 14H8.037L7.627 11H6.444ZM9.646 11L10.055 14H13.945L14.355 11H9.645H9.646ZM16.373 11L15.963 14H19.743L20.652 11H16.373ZM19.137 16H15.69L15.145 20H17.182C17.3966 20 17.6055 19.931 17.7778 19.8031C17.9501 19.6753 18.0768 19.4954 18.139 19.29L19.136 16H19.137ZM13.127 20L13.672 16H10.327L10.873 20H13.127ZM8.854 20L8.309 16H4.863L5.86 19.29C5.92223 19.4954 6.04886 19.6753 6.2212 19.8031C6.39353 19.931 6.60242 20 6.817 20H8.854Z"
              fill="black"
            />
          </svg>

          علاقه مندی ها</strong
        >
        <hr />
        <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center">
          <div class="product-counter w-2/12">
            <strong>تصویر</strong>
          </div>
          <div class="product-id w-1/12">
            <strong> شناسه </strong>
          </div>
          <div class="product-name w-6/12">
            <strong> عنوان </strong>
          </div>
          <div class="product-date lg:w-3/12">
            <strong>قیمت </strong>
          </div>

          <!-- <div class="product-details lg:w-1/12">
                                    <strong>
                                        عملیات
                                    </strong>
                                </div> -->
        </div>
        <div
          class="info-line my-2 bg-white rounded flex p-1 items-center"
          v-for="item in likedProductList?.list"
          :key="item?.id"
        >
          <a
            class="product-counter w-2/12 flex justify-center"
            target="_blank"
            :href="`/search/${item?.categoryId}/${item?.id}-${item?.name
              .split(' ')
              .join('-')}`"
          >
            <img
              :src="showImageBaseUrl + item?.picture?.url"
              class="w-[50px] h-[50px] object-cover"
              alt=""
            />
          </a>
          <a class="product-id w-1/12 text-center">
            <span> {{ item?.id }} </span>
          </a>
          <a class="product-name w-6/12 text-center">
            <span>{{ item?.name }}</span>
          </a>
          <div class="product-date lg:w-3/12">
            <span>{{ item?.price.toLocaleString() }} تومان</span>
          </div>

          <!-- <div class="product-details lg:w-1/12">
                                    
                                </div> -->
        </div>
      </div>
    </div>

    <div class="tableContainer">
      <div class="info-box mt-2 tablePro">
        <strong class="flex items-center content-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C11.245 4.00007 10.5096 4.24044 9.90031 4.6863C9.29102 5.13217 8.83946 5.76039 8.611 6.48L7.811 9H16.189L15.389 6.48C15.1605 5.76039 14.709 5.13217 14.0997 4.6863C13.4904 4.24044 12.755 4.00007 12 4ZM18.287 9L17.295 5.875C16.9383 4.75048 16.2328 3.76872 15.2808 3.07195C14.3288 2.37518 13.1797 1.99959 12 1.99959C10.8203 1.99959 9.67115 2.37518 8.71915 3.07195C7.76715 3.76872 7.0617 4.75048 6.705 5.875L5.713 9H3.348C3.03575 9.00001 2.72784 9.07313 2.44893 9.21351C2.17001 9.35388 1.92784 9.55761 1.7418 9.80839C1.55576 10.0592 1.43102 10.35 1.37757 10.6577C1.32412 10.9653 1.34345 11.2812 1.434 11.58L2.558 15.29L3.946 19.87C4.13269 20.4861 4.51259 21.0258 5.02959 21.4093C5.54659 21.7929 6.17326 22 6.817 22H17.183C17.8266 21.9998 18.453 21.7926 18.9698 21.409C19.4866 21.0255 19.8664 20.4859 20.053 19.87L21.442 15.29L22.566 11.58C22.6566 11.2812 22.6759 10.9653 22.6224 10.6577C22.569 10.35 22.4442 10.0592 22.2582 9.80839C22.0722 9.55761 21.83 9.35388 21.5511 9.21351C21.2722 9.07313 20.9642 9.00001 20.652 9H18.287ZM6.444 11H3.348L4.257 14H8.037L7.627 11H6.444ZM9.646 11L10.055 14H13.945L14.355 11H9.645H9.646ZM16.373 11L15.963 14H19.743L20.652 11H16.373ZM19.137 16H15.69L15.145 20H17.182C17.3966 20 17.6055 19.931 17.7778 19.8031C17.9501 19.6753 18.0768 19.4954 18.139 19.29L19.136 16H19.137ZM13.127 20L13.672 16H10.327L10.873 20H13.127ZM8.854 20L8.309 16H4.863L5.86 19.29C5.92223 19.4954 6.04886 19.6753 6.2212 19.8031C6.39353 19.931 6.60242 20 6.817 20H8.854Z"
              fill="black"
            />
          </svg>

          سفارشات</strong
        >
        <hr />
        <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center">
          <!-- <div class="product-counter w-2/12">
                                    <strong>تصویر</strong>
                                </div> -->
          <div class="product-id w-3/12">
            <strong> شناسه </strong>
          </div>
          <div class="product-name w-2/12">
            <strong> میزان تخفیف </strong>
          </div>
          <div class="product-date lg:w-2/12">
            <strong>قیمت </strong>
          </div>

          <!-- <div class="product-details lg:w-1/12">
                                    <strong>
                                        عملیات
                                    </strong>
                                </div> -->
        </div>
        <div
          class="info-line my-2 bg-white rounded flex p-1 items-center"
          v-for="item in orederData?.list"
          :key="item?.id"
        >
          <!-- <a  class="product-counter w-2/12 flex justify-center" target="_blank" :href="`/curse/${item?.id}`">
                                    <img :src="showImageBaseUrl+item?.picture?.url" class="w-[50px] h-[50px] object-cover"  alt="">
                                    
                                </a> -->
          <a class="product-id w-3/12 flex justify-center">
            <span> {{ item?.id }} </span>
          </a>
          <a class="product-name w-2/12 flex justify-center">
            <span class="">{{ item?.discountPrice }}%</span>
          </a>
          <div class="product-date lg:w-2/12 flex justify-center">
            <span class="">{{ item?.paymentPrice.toLocaleString() }} تومان</span>
          </div>

          <!-- <div class="product-details lg:w-1/12">
                                    
                                </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.downLoad {
  margin-right: auto;
  border: 1px solid #3333;
  background: #e5e7eb;
  color: #fff;
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
  background: #22418d;
  transition: 0.2s;
}

.downLoad:hover {
  background: #22418d;
  color: #fff;
}
</style>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();

const user = ref();
const likedProductList = ref();
const orederData = ref();
const authStor = useAuth();

onMounted(() => {
  // getCurrentUser();
  // console.log("==========================profile================");
  // console.log(authStore);
  // getLike();
  // getOrder();
});

const getCurrentUser = async () => {
  try {
    const response = await $fetch("/api/user/currentUser", {
      method: "GET",
    });
    // user.value = response.data;
    // console.log("user.value");
    // console.log(user.value);
  } catch (error) {
    console.log(error);
    // navigateTo("/authorize/login")
  }
};

const getLike = async () => {
  try {
    const response = await $fetch("/api/product/like", {
      method: "GET",
    });
    console.log("like");
    console.log(user.value);
    likedProductList.value = response;
  } catch (error) {
    console.log(error);
    // navigateTo("/authorize/login")
  }
};

const getOrder = async () => {
  try {
    const response = await $fetch("/api/productOrder/productOrder", {
      method: "GET",
    });
    // console.log("like");
    // console.log(user.value);
    orederData.value = response;
  } catch (error) {
    console.log(error);
    // navigateTo("/authorize/login")
  }
};
</script>
