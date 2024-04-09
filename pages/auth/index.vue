<template>
    <section class="p-2 flex justify-center">
        <div class="auth-form  w-full lg:w-1/3 p-2">
            <img class="w-[300px] h-auto m-auto" src="/img/lock.jpg" alt="عکس صفحه ورود به حساب">
            <div class="getMobile flex items-center flex-col  align-center">
                <h1>{{ $t('login') }}</h1>
                <p class="text-sm text-gray-400">{{ $t('loginMessage') }} </p>

                <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text"
                    :placeholder="$t('mobilePlaceHolder')">
                <button class="bg-yellow-400 hover:bg-yellow-500 p-1
             rounded w-full mt-3">{{ $t('getCode') }}</button>
            </div>
            <div class="getCode flex items-center flex-col  align-center">
                <h1>{{ $t('code') }}</h1>
                <p class="text-sm text-gray-400">{{ $t('codeMessage') }} </p>

                <div class="input-group flex justify-around w-full mt-2">
                    <input class="border border-gray-300 p-1 rounded w-[50px] px-5" 
                        maxlength="1" type="text">
                    <input class="border border-gray-300 p-1 rounded w-[50px] px-5" 
                        maxlength="1" type="text">
                    <input class="border border-gray-300 p-1 rounded w-[50px] px-5" 
                        maxlength="1" type="text">
                    <input class="border border-gray-300 p-1 rounded w-[50px] px-5" 
                        maxlength="1" type="text">
                </div>
                <button class="bg-yellow-400 hover:bg-yellow-500 p-1
             rounded w-full mt-3">{{ $t('submite') }}</button>
            </div>
            <div class="register flex items-center flex-col  align-center">
                <h1>{{ $t('register') }}</h1>
                <p class="text-sm text-gray-400">{{ $t('registerMessage') }} </p>
                <label class="me-auto mt-3" for="">{{ $t('name') }}:</label>
                <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text"
                    :placeholder="$t('namePlaceHolder')">
                    <label class="me-auto mt-3" for="">{{ $t('email') }}:</label>
                <input class="border border-gray-300 p-1 rounded w-full mt-2" type="text"
                    :placeholder="$t('emailPlaceHolder')">
                    <label class="me-auto mt-3" for="">{{ $t('password') }}:</label>
                <input class="border border-gray-300 p-1 rounded w-full mt-2" type="password">
                    <label class="me-auto mt-3" for="">{{ $t('rePassword') }}:</label>
                <input class="border border-gray-300 p-1 rounded w-full mt-2" type="password"
                 ">
                <button class="bg-yellow-400 hover:bg-yellow-500 p-1
             rounded w-full mt-3">{{ $t('submite') }}</button>
            </div>
        </div>
    </section>
</template>
