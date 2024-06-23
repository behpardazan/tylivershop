<template>
<div
    class="block border p-1 dark:text-black text-sm bg-white rounded-lg flex flex-col min-h-[290px]"
  >

    <nuxt-link
    :to="'/pr/' + data?.id + '-' + data?.name?.replaceAll(' ', '-')?.replaceAll('/', '-')">
    <img
      class="min-w-[100px] object-contain w-[100%] h-[170px]"
      :src="showImageBaseUrl + data?.picture?.url"
      :alt="data?.seoPictureAlt"
    />
    <!-- showImageBaseUrl + data?.picture?.url -->
    <p>
      <strong>{{ data?.name }}</strong>
    </p>
    <p class="text-center text-green-600">
      <strong class="text-lg">{{ data?.price.toLocaleString() }} </strong><span class="text-gray-500 text-xs ms-1">تومان</span>
    </p>
    </nuxt-link>
    <div class="functions mt-auto">
      <div v-if="basketCount > 0" class="px-3 count flex justify-between mt-1 items-center">

        <button class="bg-yellow-500 
        p-2 me-4 w-[100px] flex justify-center rounded"
        >
      <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.137a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></svg>
        
          </button>

        <button  @click="changeCount(item?.id,basketCount,'increase')"
         class="bg-green-500 text-white min-w-[30px] w-[30px] h-[30px] 
         rounded-full text-xl">
          +
        </button>

        <span class="p-1 block min-w-[30px] 
        text-center">{{basketCount}}</span>
        <button  @click="changeCount(item?.id,basketCount,'decrease')"
         class="bg-red-500 text-white min-w-[30px] w-[30px] h-[30px] 
         rounded-full text-xl">
          -
        </button>
      </div>
      
      <button @click="add2Basket(data?.id)" v-else class="bg-yellow-500 hover:bg-green-500 text-yellow-950 p-2 w-full rounded flex items-center 
      justify-center">
      <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.137a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m12.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/></svg>
      افزودن به سبد </button>

    
     </div>


  </div> 
</template>

<script setup>
const {
  public: { showImageBaseUrl },
} = useRuntimeConfig();
const toast = useToast()

const cartStore = useCart();
const props=defineProps(["data", "index"]);
const basketCount = ref(0)
const baskeId = useCookie('baskeId')


onMounted(() => {
  // console.log(cartStore?.productIdCount);
  // cartStore?.productIdCount.find(equval);
  // console.log(cartStore?.productIdCount);
 
  setTimeout(() => {
    cartStore?.productIdCount?.forEach(item => {
    // console.log(item?.productId);
    // console.log(props?.data?.id);
    if(item?.productId == props?.data?.id){
    basketCount.value=item?.count;
    // console.log(item?.productId);

  }
  });
  }, 1000);
})

const cart=ref()
const add2Basket = async (id) => {

  console.log(id);

if (!baskeId.value) {
  baskeId.value=""
  cart.value = await cartStore.getCartCount({
    "cartUpdateType": cartStore.cartStatus.add.id,
    "productId": id,
  })

  

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
    "productId": id,
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


const cartchange=ref()
const changeCount = async(id,count,label)=>{
    console.log(id,count,label);
if(label=='increase'){
    cartchange.value = await cartStore?.cartFunction({
      "cartUpdateType": cartStore.cartStatus.add.id,
      "productId": id,
      "uniqueId": baskeId.value,
      "count":count+1
    })
}else{
    cartchange.value = await  cartStore?.cartFunction({
      "cartUpdateType": cartStore.cartStatus.add.id,
      "productId": id,
      "uniqueId": baskeId.value,
      "count":count-1
    })
}

console.log(cart.value);

cart.value = await cartStore?.getCartCount({
      "cartUpdateType": cartStore.cartStatus.getCart.id,
      "uniqueId": baskeId.value,
  })
    

}




</script>
