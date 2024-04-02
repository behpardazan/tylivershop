<template>
    <div class="w-full">
        <div class="mobile pe-1 lg:hidden ">
            <button class="bg-gray-300 rounded rounded-xl flex justify-between items-center w-full p-2 rounded text-lg" @click="isOpen = true">
                <span class="text-sm ms-1">{{ $t('searchIn') }}</span>
                <span class="text-sm me-auto font-bold text-red-500">{{ $t('websiteName') }}</span>

                <UIcon name="i-heroicons-magnifying-glass" />

            </button>
            <div class="fixed bottom-0 right-0 w-full bg-white h-0 
            z-10 transition-all" :class="{ ' h-[100%]': isOpen }">
                <div class="bg-gray-200 p-2 py-3 items-center flex justify-between border-b pb-2 mb-2">
                    <span class="text-sm ms-1">{{ $t('searchIn') }}</span>
                <span class="text-sm me-auto font-bold">{{ $t('websiteName') }}</span>
                    <UButton  class="border-0 shadow-none "  @click="isOpen = false">
                        <UIcon name="i-heroicons-x-mark-solid" />
                        
                    </UButton>
                </div>

                <HeaderSearchAutoComplete @closeSearch="isOpen=false" />

            </div>

        </div>
        <div class="desktop hidden lg:block ps-3">
            <HeaderSearchAutoComplete @closeSearch="isOpen=false" />

        </div>
    </div>
</template>

<script setup>


const isOpen = ref(false)

</script>

<style lang="scss" scoped></style>