<template>
  <div class="saleBox bg-yellow-500 p-3 mt-4 rounded-lg">

    <div class="finalPrice text-sm flex items-center justify-between">
      <span class="flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_2692_489" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
            height="24">
            <rect width="24" height="24" fill="white" />
          </mask>
          <g mask="url(#mask0_2692_489)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4 4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4H4ZM20 6V8H4V6H20ZM4 12H20.001L20.002 18H4V12ZM13 14V16H6V14H13Z"
              fill="#0F0F0F" />
          </g>
        </svg>
        {{ $t("paymentPrice") }}</span>

      <span>{{ (price * count)?.toLocaleString() }}
        <span class="text-gray-800"> {{ $t("toman") }}</span></span>
    </div>
    <div class="counBox p-2 bg-yellow-300 rounded mt-3 flex items-center justify-between">
      <span>{{ $t("selectCount") }}:</span>

      <button @click="count++"
        class="bg-black p-2 rounded-full w-[30px] h-[30px] text-white text-xl flex items-center justify-center">
        +
      </button>
      <span>{{ count }}</span>
      <button v-if="count > 0" @click="count--"
        class="bg-black p-2 rounded-full w-[30px] h-[30px] text-white text-xl flex items-center justify-center">
        -
      </button>
    </div>

    <button class="bg-green-600 hover:bg-green-700 rounded p-2 mt-2 text-white w-full"
      :class="{ 'cursor-no-drop ': !authStor?.userData }" @click="add2Basket">
      <!-- {{ authStor?.userData }} -->
      {{ $t("add2basket") }}
    </button>
    <UModal v-model="isOpen">
      <div class="p-4">
        <UAlert icon="i-heroicons-command-line" color="blue" variant="solid" :description="$t('add2basketLoginMessage')"
          :title="$t('wait')" />
        <div class="mobile">
          <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" @keyup="validateMobile(mobileNUm)"
            @keydown.enter="" v-model="mobileNUm" :placeholder="$t('mobilePlaceHolder')" />


          <UAlert class="mt-2" v-if="mobileAlert" icon="i-heroicons-command-line" color="red" variant="solid"
            title="دقت کن" description="          فرمت موبایل صحیح نیست!
" />
          <button class="bg-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
            {{ $t("submite") }}
          </button>
        </div>
        <div class="otp">

          <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" @keydown.enter="" v-model="otpCode"
            :placeholder="$t('code')" />
          <button class="bg-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
            {{ $t("submite") }}
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>

const authStor = useAuth();
const cartStore = useCart();
const props = defineProps(["price","productId"]);
const count = ref(1);
const isOpen = ref(false);
const mobileAlert = ref(false);
const mobileNUm = ref();
const otpCode = ref();

const authState=ref('mobile')

const validateMobile = (mobile) => {
  if (mobile.length > 7) {
    if (/^(\+98|0)?9\d{9}$/.test(mobile)) {
      mobileAlert.value = false;

      return true;
    } else {
      mobileAlert.value = true;
      return false;
    }
  } else {
    return false;
  }
};
const add2Basket = () => {
  if (authStor?.userData) {
    cartStore.add2Basket({
      "cartUpdateType": cartStore.cartStatus.add.id,
      "productId": props.productId,
    })
  } else {
    // alert("no");
    isOpen.value = true;
  }
};
</script>
