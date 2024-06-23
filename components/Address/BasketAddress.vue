<template>
  <div class="address border bg-yellow-100 rounded lg:w-2/3 w-full">
   
    <strong class="flex  w-full bg-yellow-300 p-2">مشخصات گیرنده


      <button @click="showModal = true" class="text-sm
       bg-white flex border rounded p-1 items-center
        text-yellow-700 ms-auto">
      
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125"/></svg>
       تغیر آدرس</button>

    </strong>

    <div v-if="cartStore?.cart?.data?.addressId" 
    class="current-address flex flex-wrap p-1 ">

      <p class="w-full text-sm p-1 lg:w-1/2">نام: <b>{{currentAddress?.firstName}}</b></p>
      <p class="w-full text-sm p-1 lg:w-1/2">نام خانوادگی: <b>{{currentAddress?.lastName}}</b></p>
      <p class="w-full text-sm p-1 lg:w-1/2">شماره تماس: <b>{{currentAddress?.mobile}}</b> </p>
      <p class="w-full text-sm p-1 lg:w-1/2">کدپستی: <b>{{currentAddress?.postalCode}}</b></p>
      <p class=" text-sm">آدرس: <b>{{currentAddress?.addressValue}}</b></p>
    </div>
    <div v-if="showModal"
      class=" address-modal flex items-center justify-center fixed top-0 right-0 w-full h-full bg-[#000000d4] z-[1000]">
      <div class="modal bg-white w-[90%] lg:w-1/2 rounded p-1">
        <div class="modal-header flex items-ceter border-b p-1">
          <strong>آدرس ها</strong>

          <button @click="showModal = false


      " class="border border-black p-1 text-sm rounded ms-auto px-2">بستن</button>
          <!-- <button class="border border-yellow-500 text-yellow-600 p-1 text-sm rounded ms-auto px-2">آدرس جدید</button> -->
        </div>
        <div class="modal-body p-1">
          <div class="address-list " v-if="addStatus == false">
            <div
              class="address-active-item  flex items-center  p-3 rounded  mb-1  bg-green-100  border border-green-300 shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                data-v-inspector="pages/basket/invoice.vue:30:29">
                <path fill="#000"
                  d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"
                  data-v-inspector="pages/basket/invoice.vue:30:112" style="fill: #c80505;"></path>
              </svg>
              <div class="info">
                <strong>منزل </strong><sub>(گیرنده سینا)</sub>
                <p class="text-sm text-gray-500">تهران - خیابان سهروردی شمالی خیابان خرمشهر فرهاد پلاک 4
                </p>
              </div>
            </div>
            <span class="text-sm flex items-center jsutify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="25" height="25" viewBox="0 0 24 24">
                <path fill="#333" fill-rule="evenodd"
                  d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75M2.625 12a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0M7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12m-4.875 5.25a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75"
                  clip-rule="evenodd" />
              </svg>
              آدرس های من</span>
            <hr>
            <div v-for="item in addressStore?.addressData?.list" class="address-item  active p-1 text-sm  mb-1 flex">
              <div class="status w-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path fill="#888888" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                </svg>
              </div>
              <div class="info relative w-full">
                <strong>{{ item?.name }} </strong><sub>(گیرنده {{ item?.firstName }})</sub>
                <p class="text-sm text-gray-500">

                  {{ item?.phone }}
                </p>
                <p class="text-sm text-gray-500">

                  {{ item?.addressValue }}
                </p>

                <button class="bg-red-500 p-1 rounded absolute left-0 bottom-0 text-white">حذف</button>

              </div>
            </div>
            <button @click="addStatus = true"
              class="add-address w-full justify-center border p-2 rounded text-center bg-gray-100 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                <path fill="#888888"
                  d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z" />
              </svg>
              افزودن آدرس
            </button>
          </div>
          <div class="add-address flex flex-wrap p-1" v-else>
            <span class="text-sm flex w-full items-center jsutify-center">

              افزودن آدرس جدید


              <button @click="addStatus = false" class="p-1 rounded bg-gray-200 ms-auto border flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                بازگشت به لیست</button>
            </span>
            <hr>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.firstName" icon="i-heroicons-user-circle" size="sm" color="white"
                :trailing="false" placeholder="نام..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.lastName" icon="i-heroicons-user-circle" size="sm" color="white"
                :trailing="false" placeholder="نام خانوادگی..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.phone" icon="i-heroicons-phone" size="sm" color="white" :trailing="false"
                placeholder="تلفن..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.mobile" icon="i-heroicons-device-phone-mobile" size="sm" color="white"
                :trailing="false" placeholder="موبایل..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.postalCode" icon="i-heroicons-envelope" size="sm" color="white"
                :trailing="false" placeholder="کد پستی..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.nationalCode" icon="i-heroicons-information-circle" size="sm" color="white"
                :trailing="false" placeholder="کد ملی..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">

              <UInput v-model="addressData.name" icon="i-heroicons-map-pin" size="sm" color="white" :trailing="false"
                placeholder="نام آدرس ..." />




            </div>
            <div class="w-full lg:w-1/2 p-1">


              <USelectMenu searchable searchable-placeholder="نام استان..." class="w-full relative"
                placeholder="نام استان..." 
                :options="state" value-attribute="id" 
                option-attribute="fullName"
                v-model="addressData.cityId" />


            </div>

            <div class="w-full p-1">


              <UTextarea v-model="addressData.addressValue" placeholder="متن آدرس ..." />
            </div>

            <button 
            @click="addAddress"
            class="p-1 rounded border bg-green-600 hover:bg-green-700 m-1 w-full">{{ $t('submite') }}</button>
           
          </div>
        </div>
        <div class="modal-header"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false)
const addStatus = ref(false)
const cartStore = useCart()
const addressStore = useAddress()
const selectedState = ref()
const currentAddress=ref()
const state=[
  {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - آذرشهر",
      "name": "آذرشهر",
      "id": 1
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - اسکو",
      "name": "اسکو",
      "id": 2
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - اهر",
      "name": "اهر",
      "id": 3
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - بستان آباد",
      "name": "بستان آباد",
      "id": 4
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - بناب",
      "name": "بناب",
      "id": 5
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - تبریز",
      "name": "تبریز",
      "id": 6
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - جلفا",
      "name": "جلفا",
      "id": 7
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - چار اویماق",
      "name": "چار اویماق",
      "id": 8
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - سراب",
      "name": "سراب",
      "id": 9
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - شبستر",
      "name": "شبستر",
      "id": 10
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - عجبشیر",
      "name": "عجبشیر",
      "id": 11
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - کلیبر",
      "name": "کلیبر",
      "id": 12
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - مراغه",
      "name": "مراغه",
      "id": 13
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - مرند",
      "name": "مرند",
      "id": 14
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - ملکان",
      "name": "ملکان",
      "id": 15
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - میانه",
      "name": "میانه",
      "id": 16
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - ورزقان",
      "name": "ورزقان",
      "id": 17
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - هریس",
      "name": "هریس",
      "id": 18
    },
    {
      "stateId": 1,
      "stateName": "آذربایجان شرقی",
      "fullName": "آذربایجان شرقی - هشترود",
      "name": "هشترود",
      "id": 19
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - ارومیه",
      "name": "ارومیه",
      "id": 20
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - اشنویه",
      "name": "اشنویه",
      "id": 21
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - بوکان",
      "name": "بوکان",
      "id": 22
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - پیر انشهر",
      "name": "پیر انشهر",
      "id": 23
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - تکاب",
      "name": "تکاب",
      "id": 24
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - چالدران",
      "name": "چالدران",
      "id": 25
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - خوی",
      "name": "خوی",
      "id": 26
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - سردشت",
      "name": "سردشت",
      "id": 27
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - سلماس",
      "name": "سلماس",
      "id": 28
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - شاهین دژ",
      "name": "شاهین دژ",
      "id": 29
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - ماکو",
      "name": "ماکو",
      "id": 30
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - مهاباد",
      "name": "مهاباد",
      "id": 31
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - میاندوآب",
      "name": "میاندوآب",
      "id": 32
    },
    {
      "stateId": 2,
      "stateName": "آذربایجان غربی",
      "fullName": "آذربایجان غربی - نقده",
      "name": "نقده",
      "id": 33
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - اردبیل",
      "name": "اردبیل",
      "id": 34
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - بیله سوار",
      "name": "بیله سوار",
      "id": 35
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - پارس آباد",
      "name": "پارس آباد",
      "id": 36
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - خلخال",
      "name": "خلخال",
      "id": 37
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - کوثر",
      "name": "کوثر",
      "id": 38
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - گرمی",
      "name": "گرمی",
      "id": 39
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - مشگین",
      "name": "مشگین",
      "id": 40
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - نمین",
      "name": "نمین",
      "id": 41
    },
    {
      "stateId": 3,
      "stateName": "اردبیل",
      "fullName": "اردبیل - نیر",
      "name": "نیر",
      "id": 42
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - آران و بیدگل",
      "name": "آران و بیدگل",
      "id": 43
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - اردستان",
      "name": "اردستان",
      "id": 44
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - اصفهان",
      "name": "اصفهان",
      "id": 45
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - برخوار و میمه",
      "name": "برخوار و میمه",
      "id": 46
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - تیران و کرون",
      "name": "تیران و کرون",
      "id": 47
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - چادگان",
      "name": "چادگان",
      "id": 48
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - خمینی شهر",
      "name": "خمینی شهر",
      "id": 49
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - خوانسار",
      "name": "خوانسار",
      "id": 50
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - سمیرم",
      "name": "سمیرم",
      "id": 51
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - شاهین شهر و میمه",
      "name": "شاهین شهر و میمه",
      "id": 52
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - شهر رضا",
      "name": "شهر رضا",
      "id": 53
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - سمیرم سفلی",
      "name": "سمیرم سفلی",
      "id": 54
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - فریدن",
      "name": "فریدن",
      "id": 55
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - فریدون شهر",
      "name": "فریدون شهر",
      "id": 56
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - فلاورجان",
      "name": "فلاورجان",
      "id": 57
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - کاشان",
      "name": "کاشان",
      "id": 58
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - گلپایگان",
      "name": "گلپایگان",
      "id": 59
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - لنجان",
      "name": "لنجان",
      "id": 60
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - مبارکه",
      "name": "مبارکه",
      "id": 61
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - نائین",
      "name": "نائین",
      "id": 62
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - نجف آباد",
      "name": "نجف آباد",
      "id": 63
    },
    {
      "stateId": 4,
      "stateName": "اصفهان",
      "fullName": "اصفهان - نطنز",
      "name": "نطنز",
      "id": 64
    },
    {
      "stateId": 5,
      "stateName": "البرز",
      "fullName": "البرز - ساوجبلاق",
      "name": "ساوجبلاق",
      "id": 65
    },
    {
      "stateId": 5,
      "stateName": "البرز",
      "fullName": "البرز - کرج",
      "name": "کرج",
      "id": 66
    },
    {
      "stateId": 5,
      "stateName": "البرز",
      "fullName": "البرز - نظرآباد",
      "name": "نظرآباد",
      "id": 67
    },
    {
      "stateId": 5,
      "stateName": "البرز",
      "fullName": "البرز - طالقان",
      "name": "طالقان",
      "id": 68
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - آبدانان",
      "name": "آبدانان",
      "id": 69
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - ایلام",
      "name": "ایلام",
      "id": 70
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - ایوان",
      "name": "ایوان",
      "id": 71
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - دره شهر",
      "name": "دره شهر",
      "id": 72
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - دهلران",
      "name": "دهلران",
      "id": 73
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - شیران و چرداول",
      "name": "شیران و چرداول",
      "id": 74
    },
    {
      "stateId": 6,
      "stateName": "ایلام",
      "fullName": "ایلام - مهران",
      "name": "مهران",
      "id": 75
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - بوشهر",
      "name": "بوشهر",
      "id": 76
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - تنگستان",
      "name": "تنگستان",
      "id": 77
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - جم",
      "name": "جم",
      "id": 78
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - دشتستان",
      "name": "دشتستان",
      "id": 79
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - دشتی",
      "name": "دشتی",
      "id": 80
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - دیر",
      "name": "دیر",
      "id": 81
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - دیلم",
      "name": "دیلم",
      "id": 82
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - کنگان",
      "name": "کنگان",
      "id": 83
    },
    {
      "stateId": 7,
      "stateName": "بوشهر",
      "fullName": "بوشهر - گناوه",
      "name": "گناوه",
      "id": 84
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - اسلام شهر",
      "name": "اسلام شهر",
      "id": 85
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - پاکدشت",
      "name": "پاکدشت",
      "id": 86
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - تهران",
      "name": "تهران",
      "id": 87
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - دماوند",
      "name": "دماوند",
      "id": 88
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - رباط کریم",
      "name": "رباط کریم",
      "id": 89
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - ری",
      "name": "ری",
      "id": 90
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - شمیرانات",
      "name": "شمیرانات",
      "id": 91
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - شهریار",
      "name": "شهریار",
      "id": 92
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - فیروزکوه",
      "name": "فیروزکوه",
      "id": 93
    },
    {
      "stateId": 8,
      "stateName": "تهران",
      "fullName": "تهران - ورامین",
      "name": "ورامین",
      "id": 94
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - اردل",
      "name": "اردل",
      "id": 95
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - بروجن",
      "name": "بروجن",
      "id": 96
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - شهرکرد",
      "name": "شهرکرد",
      "id": 97
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - فارسان",
      "name": "فارسان",
      "id": 98
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - کوهرنگ",
      "name": "کوهرنگ",
      "id": 99
    },
    {
      "stateId": 9,
      "stateName": "چهارمحال و بختیاری",
      "fullName": "چهارمحال و بختیاری - لردگان",
      "name": "لردگان",
      "id": 100
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - بیرجند",
      "name": "بیرجند",
      "id": 101
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - درمیان",
      "name": "درمیان",
      "id": 102
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - سرایان",
      "name": "سرایان",
      "id": 103
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - سر بیشه",
      "name": "سر بیشه",
      "id": 104
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - فردوس",
      "name": "فردوس",
      "id": 105
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - قائن",
      "name": "قائن",
      "id": 106
    },
    {
      "stateId": 10,
      "stateName": "خراسان جنوبی",
      "fullName": "خراسان جنوبی - نهبندان",
      "name": "نهبندان",
      "id": 107
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - برد سکن",
      "name": "برد سکن",
      "id": 108
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - بجستان",
      "name": "بجستان",
      "id": 109
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - تایباد",
      "name": "تایباد",
      "id": 110
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - تحت جلگه",
      "name": "تحت جلگه",
      "id": 111
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - تربت جام",
      "name": "تربت جام",
      "id": 112
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - تربت حیدریه",
      "name": "تربت حیدریه",
      "id": 113
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - چناران",
      "name": "چناران",
      "id": 114
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - جغتای",
      "name": "جغتای",
      "id": 115
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - جوین",
      "name": "جوین",
      "id": 116
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - خلیل آباد",
      "name": "خلیل آباد",
      "id": 117
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - خواف",
      "name": "خواف",
      "id": 118
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - درگز",
      "name": "درگز",
      "id": 119
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - رشتخوار",
      "name": "رشتخوار",
      "id": 120
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - زاوه",
      "name": "زاوه",
      "id": 121
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - سبزوار",
      "name": "سبزوار",
      "id": 122
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - سرخس",
      "name": "سرخس",
      "id": 123
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - فریمان",
      "name": "فریمان",
      "id": 124
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - قوچان",
      "name": "قوچان",
      "id": 125
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - طرقبه و شاندیز",
      "name": "طرقبه و شاندیز",
      "id": 126
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - کاشمر",
      "name": "کاشمر",
      "id": 127
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - کلات",
      "name": "کلات",
      "id": 128
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - گناباد",
      "name": "گناباد",
      "id": 129
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - مشهد",
      "name": "مشهد",
      "id": 130
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - مه ولات",
      "name": "مه ولات",
      "id": 131
    },
    {
      "stateId": 11,
      "stateName": "خراسان رضوی",
      "fullName": "خراسان رضوی - نیشابور",
      "name": "نیشابور",
      "id": 132
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - اسفراین",
      "name": "اسفراین",
      "id": 133
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - بجنورد",
      "name": "بجنورد",
      "id": 134
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - جاجرم",
      "name": "جاجرم",
      "id": 135
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - شیروان",
      "name": "شیروان",
      "id": 136
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - فاروج",
      "name": "فاروج",
      "id": 137
    },
    {
      "stateId": 12,
      "stateName": "خراسان شمالی",
      "fullName": "خراسان شمالی - مانه و سملقان",
      "name": "مانه و سملقان",
      "id": 138
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - آبادان",
      "name": "آبادان",
      "id": 139
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - امیدیه",
      "name": "امیدیه",
      "id": 140
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - اندیمشک",
      "name": "اندیمشک",
      "id": 141
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - اهواز",
      "name": "اهواز",
      "id": 142
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - ایذه",
      "name": "ایذه",
      "id": 143
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - باغ ملک",
      "name": "باغ ملک",
      "id": 144
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - بندرماهشهر",
      "name": "بندرماهشهر",
      "id": 145
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - بهبهان",
      "name": "بهبهان",
      "id": 146
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - خرمشهر",
      "name": "خرمشهر",
      "id": 147
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - دزفول",
      "name": "دزفول",
      "id": 148
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - دشت آزادگان",
      "name": "دشت آزادگان",
      "id": 149
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - رامشیر",
      "name": "رامشیر",
      "id": 150
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - رامهرمز",
      "name": "رامهرمز",
      "id": 151
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - شادگان",
      "name": "شادگان",
      "id": 152
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - شوش",
      "name": "شوش",
      "id": 153
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - شوشتر",
      "name": "شوشتر",
      "id": 154
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - گتوند",
      "name": "گتوند",
      "id": 155
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - لالی",
      "name": "لالی",
      "id": 156
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - مسجد سلیمان",
      "name": "مسجد سلیمان",
      "id": 157
    },
    {
      "stateId": 13,
      "stateName": "خوزستان",
      "fullName": "خوزستان - هندیجان",
      "name": "هندیجان",
      "id": 158
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - ابهر",
      "name": "ابهر",
      "id": 159
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - ایجرود",
      "name": "ایجرود",
      "id": 160
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - خدابنده",
      "name": "خدابنده",
      "id": 161
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - خرمدره",
      "name": "خرمدره",
      "id": 162
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - زنجان",
      "name": "زنجان",
      "id": 163
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - طارم",
      "name": "طارم",
      "id": 164
    },
    {
      "stateId": 14,
      "stateName": "زنجان",
      "fullName": "زنجان - ماه نشان",
      "name": "ماه نشان",
      "id": 165
    },
    {
      "stateId": 15,
      "stateName": "سمنان",
      "fullName": "سمنان - دامغان",
      "name": "دامغان",
      "id": 166
    },
    {
      "stateId": 15,
      "stateName": "سمنان",
      "fullName": "سمنان - سمنان",
      "name": "سمنان",
      "id": 167
    },
    {
      "stateId": 15,
      "stateName": "سمنان",
      "fullName": "سمنان - شاهرود",
      "name": "شاهرود",
      "id": 168
    },
    {
      "stateId": 15,
      "stateName": "سمنان",
      "fullName": "سمنان - گرمسار",
      "name": "گرمسار",
      "id": 169
    },
    {
      "stateId": 15,
      "stateName": "سمنان",
      "fullName": "سمنان - مهدی شهر",
      "name": "مهدی شهر",
      "id": 170
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - ایرانشهر",
      "name": "ایرانشهر",
      "id": 171
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - چابهار",
      "name": "چابهار",
      "id": 172
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - خاش",
      "name": "خاش",
      "id": 173
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - دلگان",
      "name": "دلگان",
      "id": 174
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - زابل",
      "name": "زابل",
      "id": 175
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - زاهدان",
      "name": "زاهدان",
      "id": 176
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - زهک",
      "name": "زهک",
      "id": 177
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - سراوان",
      "name": "سراوان",
      "id": 178
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - سرباز",
      "name": "سرباز",
      "id": 179
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - کنارک",
      "name": "کنارک",
      "id": 180
    },
    {
      "stateId": 16,
      "stateName": "سیستان و بلوچستان",
      "fullName": "سیستان و بلوچستان - نیکشهر",
      "name": "نیکشهر",
      "id": 181
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - آباده",
      "name": "آباده",
      "id": 182
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - ارسنجان",
      "name": "ارسنجان",
      "id": 183
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - استهبان",
      "name": "استهبان",
      "id": 184
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - اقلید",
      "name": "اقلید",
      "id": 185
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - بوانات",
      "name": "بوانات",
      "id": 186
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - پاسارگاد",
      "name": "پاسارگاد",
      "id": 187
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - جهرم",
      "name": "جهرم",
      "id": 188
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - خرم بید",
      "name": "خرم بید",
      "id": 189
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - خنج",
      "name": "خنج",
      "id": 190
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - داراب",
      "name": "داراب",
      "id": 191
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - زرین دشت",
      "name": "زرین دشت",
      "id": 192
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - سپیدان",
      "name": "سپیدان",
      "id": 193
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - شیراز",
      "name": "شیراز",
      "id": 194
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - فراشبند",
      "name": "فراشبند",
      "id": 195
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - فسا",
      "name": "فسا",
      "id": 196
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - فیروزآباد",
      "name": "فیروزآباد",
      "id": 197
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - قیر و کارزین",
      "name": "قیر و کارزین",
      "id": 198
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - کازرون",
      "name": "کازرون",
      "id": 199
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - لارستان",
      "name": "لارستان",
      "id": 200
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - لامرد",
      "name": "لامرد",
      "id": 201
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - نی ریز",
      "name": "نی ریز",
      "id": 205
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - مرودشت",
      "name": "مرودشت",
      "id": 290
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - ممسنی",
      "name": "ممسنی",
      "id": 291
    },
    {
      "stateId": 17,
      "stateName": "فارس",
      "fullName": "فارس - مهر",
      "name": "مهر",
      "id": 292
    },
    {
      "stateId": 18,
      "stateName": "قزوین",
      "fullName": "قزوین - بوئین زهرا",
      "name": "بوئین زهرا",
      "id": 296
    },
    {
      "stateId": 18,
      "stateName": "قزوین",
      "fullName": "قزوین - تاکستان",
      "name": "تاکستان",
      "id": 297
    },
    {
      "stateId": 18,
      "stateName": "قزوین",
      "fullName": "قزوین - قزوین",
      "name": "قزوین",
      "id": 298
    },
    {
      "stateId": 18,
      "stateName": "قزوین",
      "fullName": "قزوین - آبیک",
      "name": "آبیک",
      "id": 206
    },
    {
      "stateId": 18,
      "stateName": "قزوین",
      "fullName": "قزوین - البرز",
      "name": "البرز",
      "id": 207
    },
    {
      "stateId": 19,
      "stateName": "قم",
      "fullName": "قم - قم",
      "name": "قم",
      "id": 211
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - بیجار",
      "name": "بیجار",
      "id": 213
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - سروآباد",
      "name": "سروآباد",
      "id": 215
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - قروه",
      "name": "قروه",
      "id": 218
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - کامیاران",
      "name": "کامیاران",
      "id": 219
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - مریوان",
      "name": "مریوان",
      "id": 220
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - بانه",
      "name": "بانه",
      "id": 300
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - دیواندره",
      "name": "دیواندره",
      "id": 302
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - سقز",
      "name": "سقز",
      "id": 304
    },
    {
      "stateId": 20,
      "stateName": "کردستان",
      "fullName": "کردستان - سنندج",
      "name": "سنندج",
      "id": 305
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - بم",
      "name": "بم",
      "id": 311
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - جیرفت",
      "name": "جیرفت",
      "id": 312
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - رفسنجان",
      "name": "رفسنجان",
      "id": 314
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - رودبار جنوب",
      "name": "رودبار جنوب",
      "id": 315
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - سیرجان",
      "name": "سیرجان",
      "id": 317
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - شهر بابک",
      "name": "شهر بابک",
      "id": 318
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - قلعه گنج",
      "name": "قلعه گنج",
      "id": 320
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - کهنوج",
      "name": "کهنوج",
      "id": 323
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - بافت",
      "name": "بافت",
      "id": 221
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - بردسیر",
      "name": "بردسیر",
      "id": 222
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - راور",
      "name": "راور",
      "id": 225
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - زرند",
      "name": "زرند",
      "id": 228
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - عنبرآباد",
      "name": "عنبرآباد",
      "id": 231
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - کرمان",
      "name": "کرمان",
      "id": 233
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - کوهبنان",
      "name": "کوهبنان",
      "id": 234
    },
    {
      "stateId": 21,
      "stateName": "کرمان",
      "fullName": "کرمان - منوجان",
      "name": "منوجان",
      "id": 236
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - اسلام آباد غرب",
      "name": "اسلام آباد غرب",
      "id": 237
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - پاوه",
      "name": "پاوه",
      "id": 238
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - ثلاث باباجانی",
      "name": "ثلاث باباجانی",
      "id": 239
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - جوانرود",
      "name": "جوانرود",
      "id": 240
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - دالاهو",
      "name": "دالاهو",
      "id": 241
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - روانسر",
      "name": "روانسر",
      "id": 242
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - سر پل ذهاب",
      "name": "سر پل ذهاب",
      "id": 243
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - سنقر",
      "name": "سنقر",
      "id": 244
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - صحنه",
      "name": "صحنه",
      "id": 245
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - قصر شیرین",
      "name": "قصر شیرین",
      "id": 246
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - کنگاور",
      "name": "کنگاور",
      "id": 248
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - گیلان غرب",
      "name": "گیلان غرب",
      "id": 249
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - هرسین",
      "name": "هرسین",
      "id": 250
    },
    {
      "stateId": 22,
      "stateName": "کرمانشاه",
      "fullName": "کرمانشاه - کرمانشاه",
      "name": "کرمانشاه",
      "id": 335
    },
    {
      "stateId": 23,
      "stateName": "کهگیلویه و بویراحمد",
      "fullName": "کهگیلویه و بویراحمد - بهمئی",
      "name": "بهمئی",
      "id": 340
    },
    {
      "stateId": 23,
      "stateName": "کهگیلویه و بویراحمد",
      "fullName": "کهگیلویه و بویراحمد - دنا",
      "name": "دنا",
      "id": 341
    },
    {
      "stateId": 23,
      "stateName": "کهگیلویه و بویراحمد",
      "fullName": "کهگیلویه و بویراحمد - کهگیلویه",
      "name": "کهگیلویه",
      "id": 342
    },
    {
      "stateId": 23,
      "stateName": "کهگیلویه و بویراحمد",
      "fullName": "کهگیلویه و بویراحمد - گچساران",
      "name": "گچساران",
      "id": 343
    },
    {
      "stateId": 23,
      "stateName": "کهگیلویه و بویراحمد",
      "fullName": "کهگیلویه و بویراحمد - بویر احمد",
      "name": "بویر احمد",
      "id": 251
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - آزادشهر",
      "name": "آزادشهر",
      "id": 256
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - بندر گز",
      "name": "بندر گز",
      "id": 258
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - رامیان",
      "name": "رامیان",
      "id": 260
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - علی آباد",
      "name": "علی آباد",
      "id": 261
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - کرد کوی",
      "name": "کرد کوی",
      "id": 262
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - کلاله",
      "name": "کلاله",
      "id": 263
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - گرگان",
      "name": "گرگان",
      "id": 264
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - گنبد کاووس",
      "name": "گنبد کاووس",
      "id": 265
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - آق قلا",
      "name": "آق قلا",
      "id": 345
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - بندر ترکمن",
      "name": "بندر ترکمن",
      "id": 347
    },
    {
      "stateId": 24,
      "stateName": "گلستان",
      "fullName": "گلستان - مینو دشت",
      "name": "مینو دشت",
      "id": 354
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - آستارا",
      "name": "آستارا",
      "id": 355
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - رشت",
      "name": "رشت",
      "id": 359
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - رودبار",
      "name": "رودبار",
      "id": 361
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - سیاهکل",
      "name": "سیاهکل",
      "id": 363
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - صومعه سرا",
      "name": "صومعه سرا",
      "id": 365
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - طوالش",
      "name": "طوالش",
      "id": 366
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - ماسال",
      "name": "ماسال",
      "id": 370
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - آستانه اشرفیه",
      "name": "آستانه اشرفیه",
      "id": 268
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - املش",
      "name": "املش",
      "id": 269
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - بندر انزلی",
      "name": "بندر انزلی",
      "id": 270
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - رضوانشهر",
      "name": "رضوانشهر",
      "id": 272
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - رودسر",
      "name": "رودسر",
      "id": 274
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - شفت",
      "name": "شفت",
      "id": 276
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - فومن",
      "name": "فومن",
      "id": 279
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - لاهیجان",
      "name": "لاهیجان",
      "id": 280
    },
    {
      "stateId": 25,
      "stateName": "گیلان",
      "fullName": "گیلان - لنگرود",
      "name": "لنگرود",
      "id": 281
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - ازنا",
      "name": "ازنا",
      "id": 283
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - بروجرد",
      "name": "بروجرد",
      "id": 285
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - پلدختر",
      "name": "پلدختر",
      "id": 286
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - خرم آباد",
      "name": "خرم آباد",
      "id": 287
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - دورود",
      "name": "دورود",
      "id": 288
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - الیگودرز",
      "name": "الیگودرز",
      "id": 372
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - دلفان",
      "name": "دلفان",
      "id": 377
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - سلسله",
      "name": "سلسله",
      "id": 378
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - کوهدشت",
      "name": "کوهدشت",
      "id": 379
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - الشتر",
      "name": "الشتر",
      "id": 380
    },
    {
      "stateId": 26,
      "stateName": "لرستان",
      "fullName": "لرستان - نورآباد",
      "name": "نورآباد",
      "id": 381
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - آمل",
      "name": "آمل",
      "id": 382
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - بابل",
      "name": "بابل",
      "id": 383
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - بابلسر",
      "name": "بابلسر",
      "id": 384
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - بهشهر",
      "name": "بهشهر",
      "id": 385
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - تنکابن",
      "name": "تنکابن",
      "id": 386
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - جویبار",
      "name": "جویبار",
      "id": 387
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - چالوس",
      "name": "چالوس",
      "id": 388
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - رامسر",
      "name": "رامسر",
      "id": 389
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - ساری",
      "name": "ساری",
      "id": 390
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - سوادکوه",
      "name": "سوادکوه",
      "id": 391
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - قائم شهر",
      "name": "قائم شهر",
      "id": 392
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - گلوگاه",
      "name": "گلوگاه",
      "id": 393
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - محمود آباد",
      "name": "محمود آباد",
      "id": 394
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - نکا",
      "name": "نکا",
      "id": 395
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - نور",
      "name": "نور",
      "id": 396
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - نوشهر",
      "name": "نوشهر",
      "id": 397
    },
    {
      "stateId": 27,
      "stateName": "مازندران",
      "fullName": "مازندران - فریدونکنار",
      "name": "فریدونکنار",
      "id": 398
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - آشتیان",
      "name": "آشتیان",
      "id": 399
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - اراک",
      "name": "اراک",
      "id": 400
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - تفرش",
      "name": "تفرش",
      "id": 401
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - خمین",
      "name": "خمین",
      "id": 402
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - دلیجان",
      "name": "دلیجان",
      "id": 403
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - زرندیه",
      "name": "زرندیه",
      "id": 404
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - ساوه",
      "name": "ساوه",
      "id": 405
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - شازند",
      "name": "شازند",
      "id": 406
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - کمیجان",
      "name": "کمیجان",
      "id": 407
    },
    {
      "stateId": 28,
      "stateName": "مرکزی",
      "fullName": "مرکزی - محلات",
      "name": "محلات",
      "id": 408
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - بندرعباس",
      "name": "بندرعباس",
      "id": 409
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - میناب",
      "name": "میناب",
      "id": 410
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - بندر لنگه",
      "name": "بندر لنگه",
      "id": 411
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - رودان-دهبارز",
      "name": "رودان-دهبارز",
      "id": 412
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - جاسک",
      "name": "جاسک",
      "id": 413
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - قشم",
      "name": "قشم",
      "id": 414
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - حاجی آباد",
      "name": "حاجی آباد",
      "id": 415
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - ابوموسی",
      "name": "ابوموسی",
      "id": 416
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - بستک",
      "name": "بستک",
      "id": 417
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - گاوبندی",
      "name": "گاوبندی",
      "id": 418
    },
    {
      "stateId": 29,
      "stateName": "هرمزگان",
      "fullName": "هرمزگان - خمیر",
      "name": "خمیر",
      "id": 419
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - اسدآباد",
      "name": "اسدآباد",
      "id": 420
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - بهار",
      "name": "بهار",
      "id": 421
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - تویسرکان",
      "name": "تویسرکان",
      "id": 422
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - رزن",
      "name": "رزن",
      "id": 423
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - کبودر آهنگ",
      "name": "کبودر آهنگ",
      "id": 424
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - ملایر",
      "name": "ملایر",
      "id": 425
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - نهاوند",
      "name": "نهاوند",
      "id": 426
    },
    {
      "stateId": 30,
      "stateName": "همدان",
      "fullName": "همدان - همدان",
      "name": "همدان",
      "id": 427
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - ابرکوه",
      "name": "ابرکوه",
      "id": 428
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - اردکان",
      "name": "اردکان",
      "id": 429
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - بافق",
      "name": "بافق",
      "id": 430
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - تفت",
      "name": "تفت",
      "id": 431
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - خاتم",
      "name": "خاتم",
      "id": 432
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - صدوق",
      "name": "صدوق",
      "id": 433
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - طبس",
      "name": "طبس",
      "id": 434
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - مهریز",
      "name": "مهریز",
      "id": 435
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - میبد",
      "name": "میبد",
      "id": 436
    },
    {
      "stateId": 31,
      "stateName": "یزد",
      "fullName": "یزد - یزد",
      "name": "یزد",
      "id": 437
    }
 
]





const addressData = ref({
  "cityId": 8,
  "firstName": "",
  "lastName": "",
  "phone": "",
  "mobile": "",
  "addressValue": "",
  "latLong": "",
  "postalCode": "",
  "nationalCode": ""
})

onMounted(async () => {
  await addressStore.getAddress()


   let counter = 0;

const intervalId = setInterval(async() => {
  // انجام عملیات مورد نظر در اینجا
  console.log('Interval callback');
  await getCurrentAddress()
  await cartStore?.getCartCount({
      "cartUpdateType": cartStore.cartStatus.getCart.id,

  })
  // افزایش شمارنده
  counter++;

  // بررسی برای متوقف کردن setInterval پس از 5 بار فراخوانی
  if (counter === 5) {
    clearInterval(intervalId); // متوقف کردن setInterval
    console.log('Interval stopped after 5 calls');
  }
}, 1000); // هر 1000 میلی‌ثانیه (یک ثانیه) یک بار فراخوانی می‌شود

})

const setBasketAddress = (id)=>{
  cartStore.getCart({
      "cartUpdateType": cartStore.cartStatus.setAddrees.id,
      "addressId":id 
    })
}

const addAddress = () => {
  showModal.value = false;
  addressStore.setAddress(addressData.value)


}

const getCurrentAddress = ()=>{
  if(cartStore?.cart?.data?.addressId){
    if(addressStore.addressData?.list?.length > 0){
      addressStore.addressData?.list?.forEach(element => {
        if(element?.id == cartStore?.cart?.data?.addressId)
      currentAddress.value = element
        
      });
    }
  }else{
    if(addressStore.addressData?.list?.length > 0){
      setBasketAddress(addressStore.addressData?.list[0].id)
      currentAddress.value = addressStore.addressData?.list[0]
    }
  }
}
</script>

<style lang="scss">
.address-item {
  cursor: pointer;

  .status {
    svg {
      display: none;
    }
  }

  &:hover {
    .status {
      svg {
        display: block;
      }
    }
  }

  &.active {
    .status {
      svg {
        display: block;

        path {
          fill: green
        }
      }
    }

  }
}
</style>