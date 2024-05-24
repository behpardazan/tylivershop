<template>
  <section class="p-2 flex justify-center">
    <div class="auth-form w-full lg:w-1/3 p-2">
      <img
        class="w-[300px] h-auto m-auto"
        src="/img/lock.jpg"
        alt="عکس صفحه ورود به حساب"
      />
      <div v-if="!authStor?.userDetailData?.code" class="getMobile flex items-center flex-col align-center">
  <h1>{{ $t("login") }}</h1>
  <p class="text-sm text-gray-400">{{ $t("loginMessage") }}</p>

  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" @keyup="validateMobile(mobileNUm)"
    @keydown.enter="" v-model="mobileNUm" :placeholder="$t('mobilePlaceHolder')" />
  <!-- <div class="btext-red-500 mx-auto text-center mt-2"></div> -->
  <UAlert class="mt-2" v-if="mobileAlert" icon="i-heroicons-command-line" color="red" variant="solid" title="دقت کن"
    description="          فرمت موبایل صحیح نیست!
" />
  <UButton  @click="getCode(mobileNUm)" :loading="loading"
    class="bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-1 rounded w-full mt-3 p-1 py-2 flex justify-center">
    {{ $t("getCode") }}
  </UButton >
</div>
<div class="loginPassword flex items-center flex-col align-center hidden">
  <h1>{{ $t("password") }}</h1>
  <p class="text-sm text-gray-400">{{ $t("passwordMessage") }}</p>

  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" :placeholder="$t('mobilePlaceHolder')" />
  <button class="bg-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
    {{ $t("submite") }}
  </button>
  <button class="border border-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
    {{ $t("GetAone-timeCode") }}
  </button>
</div>

<div v-if="authStor?.userDetailData?.code == authStor?.state?.login || authStor?.userDetailData?.code == authStor?.state?.register"
  class="getCode flex items-center flex-col align-center">
  <h1>{{ $t("code") }}</h1>

  <p class="text-sm text-gray-700">
    {{ $t("mobileNumber") + ": " + mobileNUm }}

    <button class="text-xs text-blue-800" @click="authStor.userDetailData.code = null">
      (
      <UIcon name="i-heroicons-pencil" dynamic /> ویرایش)
    </button>
  </p>

  <p class="text-sm text-gray-400">{{ $t("codeMessage") }}</p>

  <div class="input-group flex flex-row-reverse justify-around w-full mt-2">
    <input class="border border-gray-300 p-1 rounded w-[50px] px-5" maxlength="1" type="text"
      @keyup="focusNext('inpu2')" v-model="pin1" />
    <input id="inpu2" class="border border-gray-300 p-1 rounded w-[50px] px-5" maxlength="1" type="text"
      @keyup="focusNext('inpu3')" v-model="pin2" />
    <input id="inpu3" class="border border-gray-300 p-1 rounded w-[50px] px-5" maxlength="1" type="text"
      @keyup="focusNext('inpu4')" v-model="pin3" />
    <input id="inpu4" class="border border-gray-300 p-1 rounded w-[50px] px-5" maxlength="1" type="text"
      v-model="pin4" />
  </div>
  <button v-if="authStor?.userDetailData?.code == authStor?.state?.login"
   @click="check(mobileNUm, pin1 + pin2 + pin3 + pin4)"
    class="bg-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
    {{ $t("submite") }}
  </button>
  
</div>

<div class="register flex items-center flex-col align-center hidden">
  <h1>{{ $t("register") }}</h1>
  <p class="text-sm text-gray-400">{{ $t("registerMessage") }}</p>
  <label class="me-auto mt-3" for="">{{ $t("name") }}:</label>
  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" 
  :placeholder="$t('namePlaceHolder')" />
  <label class="me-auto mt-3" for="">{{ $t("email") }}:</label>
  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text" 
  :placeholder="$t('emailPlaceHolder')" />
  <label class="me-auto mt-3" for="">{{ $t("password") }}:</label>
  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="password" />
  <label class="me-auto mt-3" for="">{{ $t("rePassword") }}:</label>
  <input class="border border-gray-300 p-1 rounded w-full mt-2" type="password" >
        <button class=" bg-yellow-400 hover:bg-yellow-500 p-1 rounded w-full mt-3">
  {{ $t("submite") }}
  </button>
</div>
    </div> 
       <UNotifications />
  </section>
</template>

<script setup>
const toast = useToast()
const authStor = useAuth();
const mobileAlert = ref(false);
const mobileNUm = ref();
const loading = ref(false)

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

const getCode = async (num) => {
  if (mobileAlert.value == false) {
    loading.value=true

    await authStor.userDetail(num);
    const otp = await authStor.otp(num);

    if(otp?.isSuccess){
      loading.value=false

}else{
  toast.add({ title:otp?.messages[0]?.item1  })

}
  }
};

const focusNext = (name) => {
  console.log(name);
  document.querySelector("#" + name).focus();
};

const check = async(num, code) => {
  if (code.length == 4) {
    // alert("ok");
    const checkresult = await authStor.checkOtp(num, code);
    console.log(checkresult);
    if(checkresult.isSuccess){
      await authStor.signIn(num, code)
    }else{
      toast.add({ title:checkresult?.messages[0]?.item1  })

    }
    
    //authStor.signIn(num, code);
  }
};
onMounted(() => {
  console.log(authStor);
});
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
