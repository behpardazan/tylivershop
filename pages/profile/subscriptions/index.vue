<template>
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

        اشتراک های من</strong
      >
      <hr />
      <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center">
        <div class="product-counter w-1/12">
          <strong>ردیف</strong>
        </div>

        <div class="product-counter w-6/12">
          <strong>نام</strong>
        </div>
        <div class="product-id w-5/12">
          <strong> تاریخ انقضا </strong>
        </div>

        <!--  <div class="product-date lg:w-3/12">
                                          <strong>هزینه </strong>
                                      </div> 
  
                                      <div class="product-date lg:w-2/12">
                                          <strong>وضعیت </strong>
                                      </div> 
                                 
                                   <div class="product-details lg:w-1/12">
                                      <strong>
                                          عملیات
                                      </strong>
                                  </div> -->
      </div>
      <!-- {{ orederData }} -->
      <div
        class="border cursor-pointer border-gray-300 my-2 flex-wrap bg-white rounded flex p-1 items-center"
        v-for="(item, index) in catData?.list"
        :key="item?.id"
        @click="getNewBlogs(item?.category?.label, item.id)"
        :class="`acc-title-${item.id}`"
      >
        <!-- <a  class="product-counter w-2/12 flex justify-center" target="_blank" :href="`/curse/${item?.id}`">
                                      <img :src="showImageBaseUrl+item?.picture?.url" class="w-[50px] h-[50px] object-cover"  alt="">
                                      
                                  </a> -->
        <a class="product-id w-1/12 flex justify-center">
          <span> {{ index + 1 }} </span>
        </a>

        <div class="w-6/12 text-center">
          <!-- {{  }} -->
          <!-- <span class="text-sm">{{  moment(item?.createDate, 'YYYY-MM-DD HH:mm:ss').locale('fa').format('YYYY/MM/DD') }}</span> -->
          <span class="text-sm">{{ item?.category?.name }}</span>
          <span
            @click="
              () => {
                isShowModal = true;
                getCtegoryItem(item?.category?.id);
              }
            "
            class="text-sm p-1 rounded text-xs mx-3 bg-orange-500 text-white"
            >تمدید</span
          >
        </div>

        <div class="product-id w-5/12 flex relative justify-center items-center">
          <span class="text-sm">
            {{ moment(item?.expireDate).locale("fa").format("YYYY/MM/DD") }}</span
          >
          <svg
            class="absolute left-[5px] top-[10px]"
            width="10"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- <a  class="product-name w-1/12 flex justify-center">
                                      <span class="">{{item?.product}}</span>
                                  </a> -->
        <!-- <div class="product-date lg:w-3/12 flex justify-center">
                                          <span class="">{{item?.product?.price.toLocaleString()}}</span>
            
                              </div> -->
        <div :class="`acc-body-${item.id}`" class="w-full hidden acc-body bg-gray-200">
          <!-- <div class="w-full  bg-rose-300 rounded my-3 hidden">
                                      <div class="lg:w-1/6 w-2/6 flex justify-center">
                                        تصویر
                                      </div>
                                      <div class="lg:w-3/6 w-4/6 flex justify-center">
                                      نام مقاله
                                      </div>
                                    
                                      <div class="w-2/6 flex justify-center">
                                          لینک
                                      </div>
                                  </div> -->
          <nuxt-link
            :to="`/blog/${item.id + '-' + item.name.split(' ').join('-')}`"
            class="w-[98%] p-2 rounded-[5px] border border-[#d9d9d9] mx-auto my-2 flex bg-[#fff]"
            v-for="item in blogList"
          >
            <div class="w-2/6 flex justify-center">
              <img
                class="w-[100px] object-contain"
                :src="`${showImageBaseUrl}/${item.picture.url}`"
                :alt="item.name"
              />
            </div>

            <div class="w-4/6 flex justify-center items-center text-xs">
              {{ item.name }}
            </div>

            <div class="w-2/6 flex justify-center items-center hidden">
              <nuxt-link
                :to="`/blog/${item.id + '-' + item.name.split(' ').join('-')}`"
                class="bg-rose-100 w-full flex justify-center rounded"
                to=""
                >ورود به مقاله</nuxt-link
              >
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      v-if="isShowModal"
      class="modal-cover fixed z-[1000] flex items-center justify-center right-0 top-0 w-full h-full bg-[#00000091]"
    >
      <div class="modal overflow-hidden bg-white w-1/2 rounded">
        <div
          class="modal-title flex items-center justify-between bg-blue-950 text-white p-3"
        >
          <span>تمدید دوره</span>
          <span
            class="cursor-pointer"
            @click="
              () => {
                isShowModal = false;
              }
            "
            >x</span
          >
        </div>
        <div class="modal-body p-1">
          <div
            v-for="item in categoryList"
            :key="item?.id"
            @click="addToBasketCat(item?.id)"
            class="cursor-pointer item flex items-center mt-2 justify-between bg-blue-100 p-3 border border-blue-300 rounded text-blue-900"
          >
            <span> {{ item?.name }} </span>
            <span>{{ item?.price.toLocaleString() }} تومان</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "jalali-moment";
// import { useToast } from "vue-toastification";

// const toast = useToast();
const {
  public: { showImageBaseUrl, baseUrl },
} = useRuntimeConfig();
const authStore = useAuth();
const store = useCartStore();
const catData = ref();
const blogList = ref([]);
const isShowModal = ref(false);
const categoryList = ref([]);
const localData = ref({});
const cartBody = ref({
  cartUpdateType: 0,
  returnCart: false,
  categoryItemId: 0,
});
onMounted(async () => {
  console.log("====== pr =====");
  console.log(authStore.profile);
  localData.value = await useLocalData();
  getUserCat();
});

const addToBasketCat = async (id) => {
  console.log("ooooo");
  if (authStore.profile) {
    cartBody.value = {
      cartUpdateType: localData.value.cart?.add.id,
      returnCart: false,
      categoryItemId: id,
    };
    try {
      const response = await $fetch("/api/cart/cart", {
        method: "POST",
        body: cartBody.value,
      });
      console.log("---- cart --------");
      console.log(response);
      if (response.isSuccess) {
        // toast.success("با موفقیت به سبد خرید اضافه شد", {
        //   position: "top-left",
        //   timeout: 5000,

        // });
        navigateTo("/basket/products");
        store.getItemCount();
      } else {
        // toast.error(response?.messages[0]?.item1, {
        //   position: "top-left",
        //   timeout: 5000,
        // });
      }
      // console.log("================= add products cart response ========");
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
  } else {
    // toast.error("برای خرید باید ابتدا وارد حساب شوید", {
    //   position: "top-right",
    //   timeout: 5000,
    // });
    navigateTo("/authorize/login");
    authStore.backUrl = route.fullPath;
  }
};
const getCtegoryItem = async (id) => {
  try {
    const response = await $fetch("/api/categoryItem/categoryItem", {
      method: "GET",
      query: {
        id: id,
      },
    });
    console.log("----- categoryItem ------------");
    console.log(response);
    categoryList.value = response.list;
  } catch (error) {
    console.log(error);
    // navigateTo("/authorize/login")
  }
};

const getUserCat = async () => {
  try {
    const response = await $fetch("/api/userCategory/userCat", {
      method: "GET",
      query: {
        id: authStore?.profile?.userId,
      },
    });
    console.log("-----  ------------ ");
    console.log(response);
    catData.value = response;
  } catch (error) {
    console.log(error);
    // navigateTo("/authorize/login")
  }
};
const getNewBlogs = async (label, id) => {
  try {
    const response = await $fetch(`${baseUrl}/api/Post?CategoryLabels=${label}`, {
      method: "GET",
      headers: {
        "Accept-Language": "fa",
      },
    });

    console.log("bbbbbbbbbbb");
    console.log(response);
    blogList.value = response.list;

    document.querySelectorAll(".acc-body").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelector(`.acc-body-${id}`).classList.remove("hidden");
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.tbl_header {
  position: sticky;
  top: 10px;
  z-index: 1000;
}
.orderBox {
  display: none;
}
.active {
  display: flex;
}

.product-img img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.btn-box {
  .btn {
    background-color: #e3e3e3;
    margin: 10px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;

    &.active {
      background: linear-gradient(180deg, #0267ff 0%, #003686 100%);
      color: #fff;
    }
  }
}

.info-box {
  border: 1px solid #3333;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  line-height: 33px;
  width: 100% !important;

  & > div:nth-child(2n) {
    .info-line,
    .orderBox {
      background-color: rgb(221, 221, 221) !important;
    }
  }

  .info-item {
    span {
      &:first-child {
        color: #848484;
        margin-left: 10px;
      }
    }
  }

  .info-line {
    min-height: 50px;
    border: 1px solid #3333;
    transition: 0.2s;

    &:hover {
      border-color: #cba12c;
      box-shadow: 0 0 5px -2px #3333;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px;

      img {
        width: 80px;
        height: 80px;
        border: 1px solid #3333;
      }

      span {
        font-size: 13px;
      }
    }
  }
}

.infoBoxContainer {
  overflow: auto;
}
@media only screen and (max-width: 600px) {
  .btn-box .btn {
    margin: 4px;
  }
}
@media only screen and (max-width: 1200px) {
  .profileContainer {
    overflow: auto;
  }
}

.storeName {
  background: #cba12c;
  padding: 0 15px;
  height: 30px;
  border-radius: 5px;
}
@media only screen and (max-width: 991px) {
  .profileContainer {
    height: 350px;
  }
  .info-box .info-line > div {
    padding: 0;
  }
}
</style>
