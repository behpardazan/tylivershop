<template>

    <div class="address border bg-yellow-100 rounded lg:w-2/3 w-full">
        {{ addressStore?.addressData }}
        <strong class="flex  w-full bg-yellow-300 p-2">مشخصات گیرنده


            <button @click="showModal=true" class="text-sm text-orange-800 ms-auto">آدرس دیگر</button>

        </strong>

        <div class="current-address flex flex-wrap p-1">

            <p class="w-full text-sm p-1 lg:w-1/2">نام: سینا</p>
            <p class="w-full text-sm p-1 lg:w-1/2">نام خانوادگی: صادقی</p>
            <p class="w-full text-sm p-1 lg:w-1/2">شماره تماس: 09201137652 </p>
            <p class="w-full text-sm p-1 lg:w-1/2">کدپستی: 1234567891</p>
            <p class="w-full text-sm p-1 lg:w-1/2">استان: تهران</p>
            <p class="w-full text-sm p-1 lg:w-1/2">شهر: تهران</p>
            <p class="">آدرس: تهران- خیابان سهرودی - خیابان خرمشهر( آپادانا ) - کوچه فرهاد - نبش دوم - پلاک 4 - واخد 1
            </p>
        </div>
        <div v-if="showModal"
            class=" address-modal flex items-center justify-center fixed top-0 right-0 w-full h-full bg-[#000000d4] z-[1000]">
            <div class="modal bg-white w-[90%] lg:w-1/2 rounded p-1">
                <div class="modal-header flex items-ceter border-b p-1">
                    <strong>آدرس ها</strong>

                    <button  @click="showModal=false
                    
                    
                    "  class="border border-black p-1 text-sm rounded ms-auto px-2">بستن</button>
                    <!-- <button class="border border-yellow-500 text-yellow-600 p-1 text-sm rounded ms-auto px-2">آدرس جدید</button> -->
                </div>
                <div class="modal-body p-1">
                    <div class="address-list " v-if="addStatus==false">
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="25" height="25"
                                viewBox="0 0 24 24">
                                <path fill="#333" fill-rule="evenodd"
                                    d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75M2.625 12a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0M7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12m-4.875 5.25a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75"
                                    clip-rule="evenodd" />
                            </svg>
                            آدرس های من</span>
                        <hr>
                        <div v-for="item in addressStore?.addressData?.list"
                        class="address-item  active p-1 text-sm  mb-1 flex" >
                            <div class="status w-[30px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                    <path fill="#888888"
                                        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                                </svg>
                            </div>
                            <div class="info relative w-full">
                                <strong>{{item?.name}} </strong><sub>(گیرنده {{item?.firstName}})</sub>
                                <p class="text-sm text-gray-500">
                                    
                                    {{item?.phone}}
                                </p>
                                <p class="text-sm text-gray-500">
                                    
                                    {{item?.addressValue}}
                                </p>

                                <button class="bg-red-500 p-1 rounded absolute left-0 bottom-0 text-white" >حذف</button>

                            </div>
                        </div>
                        <button @click="addStatus=true"
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
                            

                            <button @click="addStatus=false"
                            class="p-1 rounded bg-gray-200 ms-auto border flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
                                بازگشت به لیست</button>
                        </span>
                        <hr>
                        <div class="w-full lg:w-1/2 p-1">

                                    <UInput icon="i-heroicons-user-circle" size="sm" color="white" :trailing="false"
                                        placeholder="نام..." />
                             

                            
                            
                        </div>
                        <div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-user-circle" size="sm" color="white" :trailing="false"
    placeholder="نام خانوادگی..." />




</div>
<div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-phone" size="sm" color="white" :trailing="false"
    placeholder="تلفن..." />




</div>
<div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-device-phone-mobile" size="sm" color="white" :trailing="false"
    placeholder="موبایل..." />




</div>
<div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-envelope" size="sm" color="white" :trailing="false"
    placeholder="کد پستی..." />




</div>
<div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-information-circle" size="sm" color="white" :trailing="false"
    placeholder="کد ملی..." />




</div>
<div class="w-full lg:w-1/2 p-1">

<!-- <UInput icon="i-heroicons-map" size="sm" color="white" :trailing="false"
    placeholder="استان ..." /> -->
{{ selectedState }}
    <USelectMenu
    searchable
    searchable-placeholder="نام استان..."
    class="w-full relative"
    placeholder="نام استان..."
    :options="state"
        value-attribute="id"
    option-attribute="name"
    v-model="selectedState"
  />


</div>
<div class="w-full lg:w-1/2 p-1">

<UInput icon="i-heroicons-map-pin" size="sm" color="white" :trailing="false"
    placeholder="شهر ..." />




</div>
<div class="w-full p-1">


    <UTextarea placeholder="متن آدرس ..." />
</div>

<button class="p-1 rounded border bg-green-600 hover:bg-green-700 m-1 w-full">{{ $t('submite') }}</button>

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
const addressStore = useAddress()
const selectedState = ref()
const state = [
{
      "name": "آذربايجان شرقي",
      "id": 1
    },
    {
      "name": "آذربايجان غربي",
      "id": 2
    },
    {
      "name": "اردبيل",
      "id": 3
    },
    {
      "name": "اصفهان",
      "id": 4
    },
    {
      "name": "البرز",
      "id": 5
    },
    {
      "name": "ايلام",
      "id": 6
    },
    {
      "name": "بوشهر",
      "id": 7
    },
    {
      "name": "تهران",
      "id": 8
    },
    {
      "name": "چهارمحال و بختياري",
      "id": 9
    },
    {
      "name": "خراسان جنوبي",
      "id": 10
    },
    {
      "name": "خراسان رضوي",
      "id": 11
    },
    {
      "name": "خراسان شمالي",
      "id": 12
    },
    {
      "name": "خوزستان",
      "id": 13
    },
    {
      "name": "زنجان",
      "id": 14
    },
    {
      "name": "سمنان",
      "id": 15
    },
    {
      "name": "سيستان و بلوچستان",
      "id": 16
    },
    {
      "name": "فارس",
      "id": 17
    },
    {
      "name": "قزوين",
      "id": 18
    },
    {
      "name": "قم",
      "id": 19
    },
    {
      "name": "كردستان",
      "id": 20
    },
    {
      "name": "كرمان",
      "id": 21
    },
    {
      "name": "كرمانشاه",
      "id": 22
    },
    {
      "name": "كهگيلويه و بويراحمد",
      "id": 23
    },
    {
      "name": "گلستان",
      "id": 24
    },
    {
      "name": "گيلان",
      "id": 25
    },
    {
      "name": "لرستان",
      "id": 26
    },
    {
      "name": "مازندران",
      "id": 27
    },
    {
      "name": "مركزي",
      "id": 28
    },
    {
      "name": "هرمزگان",
      "id": 29
    },
    {
      "name": "همدان",
      "id": 30
    },
    {
      "name": "يزد",
      "id": 31
    }
]

const address = ref({
  "cityId": 0,
  "firstName": "",
  "lastName": "",
  "phone": "",
  "mobile": "",
  "addressValue": "",
  "latLong": "",
  "postalCode": "",
  "nationalCode": ""
})

onMounted(async()=>{
    await addressStore.getAddress()  
})


const addAddress = ()=>{
    showModal.value = false;


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