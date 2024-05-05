<template>
  <div>
    <div class="address-title flex justify-between items-center">
      <p class="address-title-text">آدرس های من</p>
      <button
        class="bg-gray-100 text-sm p-1 rounded px-3 mb-1 border"
        @click="showAddressModal"
      >
        آدرس جدید
      </button>
    </div>
    <AddressModal
      v-if="isShowAddressModal"
      @refreshAddres="getAddressList"
      class="modalAddressBox"
      @closeModal="closAddressModal"
    />

    <div class="basket-address">
      <div class="addressList" v-if="addressData?.list.length > 0">
        <AddressItem
          v-for="item in addressData?.list"
          :key="item?.id"
          :class="{ 'bg-green-200 border-gray-400': selectedId == item?.id }"
          :data="item"
          @click="
            () => {
              adressSelect(item?.id);
              selectedId = item?.id;
            }
          "
        />
      </div>
      <div
        v-else
        class="bg-orange-100 border border-orange-300 p-2 rounded text-orange-500 text-center"
      >
        <p>آدرسی ثبت نکرده اید</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useToast } from "vue-toastification";
// const toast = useToast();
const isShowAddressModal = ref(false);
const selectedId = ref();

const cartBody = ref({
  cartUpdateType: 5,
  returnCart: true,

  addressId: 0,
});
const addressData = ref();

onMounted(async () => {
  // await getState();
  getAddressList();
});

const getAddressList = async () => {
  try {
    const response = await $fetch("/api/address/address", {
      method: "GET",
    });
    console.log("================= city response ========");

    addressData.value = response;
  } catch (error) {
    console.log(error);
  }
};

const adressSelect = async (id) => {
  try {
    cartBody.value.addressId = id;
    const response = await $fetch("/api/cart/cart", {
      method: "POST",
      body: cartBody.value,
    });

    if (response.isSuccess) {
      cartData.value = response.data;
    }
    console.log("================= cart response ========");
    console.log(cartData.value);
  } catch (error) {
    console.log(error);
  }
};

const showAddressModal = () => {
  isShowAddressModal.value = true;
};
const closAddressModal = () => {
  isShowAddressModal.value = false;
};
</script>
