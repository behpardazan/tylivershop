<template>
    <UModal >
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

</template>

<script setup>
    const mobileNUm= ref()
    const mobileAlert = ref(false)
    const otpCode = ref()
    const validateMobile = (num) => {
  if (num.length > 7) {
    if (/^(\+98|0)?9\d{9}$/.test(num)) {
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
</script>