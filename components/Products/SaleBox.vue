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

    <button class="bg-green-600 hover:bg-green-700 rounded p-2 mt-2 text-white w-full" @click="add2Basket">
      <!-- {{ authStor?.userData }}
      
      :class="{ 'cursor-no-drop ': !authStor?.userData }" -->
      {{ $t("add2basket") }}
    </button>
    <UNotifications />
    
  </div>
</template>

<script setup>
const toast = useToast()
const authStor = useAuth();
const cartStore = useCart();
const props = defineProps(["price", "productId"]);
const count = ref(1);

const mobileAlert = ref(false);
const mobileNUm = ref();
const otpCode = ref();
const authState = ref('mobile')
const baskeId = useCookie('baskeId')
const cart = ref()
onMounted(() => {
  // baskeId.value=""
})

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
const add2Basket = async () => {




  if (!baskeId.value) {
    baskeId.value=""
    cart.value = await cartStore.getCart({
      "cartUpdateType": cartStore.cartStatus.add.id,
      "productId": props.productId,
    })

    console.log(cart.value);

    if (cart.value?.isSuccess) {
      toast.add({ title: 'با موفقیت به سبد اضافه شد' })
      baskeId.value = cart?.value?.data;
      setTimeout(() => {
        cartStore.getCartCount({
          "cartUpdateType": cartStore.cartStatus.getCart.id,
          "uniqueId": baskeId.value,
        })
      }, 5000);
    }
  } else {
    cart.value = await cartStore.getCart({
      "cartUpdateType": cartStore.cartStatus.add.id,
      "productId": props.productId,
      "uniqueId": baskeId.value
    })
    if (cart.value?.isSuccess) {
      toast.add({ title: 'با موفقیت به سبد اضافه شد' })
      setTimeout(() => {
        cartStore.getCartCount({
          "cartUpdateType": cartStore.cartStatus.getCart.id,
          "uniqueId": baskeId.value,
        })
      }, 5000);

    }
  }


  // **** sample code for check if login add to basket ****
  // if (authStor?.userData) {
  //   cartStore.add2Basket({
  //     "cartUpdateType": cartStore.cartStatus.add.id,
  //     "productId": props.productId,
  //   })
  // } else {
  //   // alert("no");
  //   isOpen.value = true;
  // }
};
</script>
