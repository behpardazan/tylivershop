<template>
    <div class="min-h-[200px] bg-white absolute right-0 top-[100%] w-[800px] z-50 flex">
    
        <ul class="w-1/4 ">
            <li v-for="item in categoryStore?.data?.list">
                <nuxt-link class="p-2 border-b flex hover:bg-yellow-300 transition-all" 
                           :name="item?.label" 
                           @mouseover="selectedLabel=item?.label"
                           :class="{'bg-yellow-300 font-bold':selectedLabel==item?.label}"
                 :to="'/search/'+item?.label">
                 {{item?.name}}

                 <svg class="ms-auto" :class="{'hidden':selectedLabel != item?.label}" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                 </nuxt-link>
            </li>
        </ul>
        <div class="w-3/4  bg-gray-100 p-1">
           <div class="flex flex-wrap " :class="{'hidden':selectedLabel != item?.label}" v-for="item in categoryStore?.data?.list">
            <ul class="w-1/3 p-1 text-xs text-start" v-for="(element,index) in item?.children">
                <li><nuxt-link :to="'/search/'+element?.label" class="p-1" ><strong>{{ index+1 }}. {{ element?.name }} </strong></nuxt-link></li>
            </ul>
        </div>
        </div>
        
    </div>
</template>

<script setup>
const categoryStore = useCategory()
const selectedLabel = ref('')

onMounted(() => {
    selectedLabel.value = categoryStore?.data?.list[0].label
})

</script>