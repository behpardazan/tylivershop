<script setup>
    const categoryStore = useCategory()
    const selectedLabel = ref('')

onMounted(() => {
    selectedLabel.value = categoryStore?.data?.list[0].label
})

</script>

<template>
  <div class="tab flex">
    <ul class="tab-items w-2/5 bg-gray-300 dark:bg-gray-700 h-[calc(100vh-64px)] text-sm">
        <li :class="{'bg-yellow-300 font-bold':selectedLabel == item?.label}" 
        
            v-for="item in categoryStore?.data?.list" @click="selectedLabel=item?.label">
            <div class="p-2 flex border-b boreder-white " to="">{{ item?.name }}
                <nuxt-link :to="'/search/'+item?.label" class="ms-2 text-blue-500" >
                    <sub> (همه)</sub>
                </nuxt-link>
            </div>
        </li>
        
    </ul>
    <div class="tab-content w-3/5">
        <div class="flex flex-col" :class="{'hidden':selectedLabel != item?.label}" v-for="item in categoryStore?.data?.list">
            <ul class=" p-1 text-xs text-start" v-for="(element,index) in item?.children">
                <li><nuxt-link :to="'/search/'+item?.label" class="p-2 flex  " ><strong>{{ index+1 }}. {{ element?.name }} </strong></nuxt-link></li>
            </ul>
        </div>
        </div>
  </div>
</template>


