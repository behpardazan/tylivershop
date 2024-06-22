<template>
  <section class="faq">
    <div class="container mt-5">
      <div class="titleBox mb-3">
        <h1>مقایسه <strong>{{ product?.name }}</strong></h1>
      </div>
      <div class="seachBox relative z-10">
        <div class=" flex items-center border rounded p-1 bg-gray-300">
            <input placeholder="لطفا نام محصول خود را وارد کنید ..." v-model="query" @keyup="searching()" class="bg-gray-300 border-0"/>
        <svg v-if="products?.list?.length > 0" @click="()=>{products=null;query=''}"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-circle  cursor-pointer" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
<LoadingTinyLoading v-if="loadingsech" class="mx-1" />
        </div>
      
        <ul class=" bg-gray-100 absolute top-[40px] w-full" v-if="products?.list?.length > 0">
            <li @click="addToCompare(item);products=null;query=''" v-for="item in products?.list" class=" cursor-pointer"><span>{{ item?.name }}</span></li>
            
        </ul>
      
      </div>
    </div>
   

    <div class="container compareBox flex flex-wrap mt-3 mb-5">
      <div
        class="compareItem border  border-gray-300 p-2  bg-gray-50 w-1/4"
     
      >
        <div class="item-image">
          <img
            class="rounded w-full lg:h-[200px] object-cover"
          :src="`${showImageBaseUrl}/${product?.picture?.url}`"
            :alt="product?.name"
          />
        </div>
        <!-- <div class="item-title"><span>عنوان</span></div> -->
        <div class="item-info">
          <ul>
            <li class=" flex justify-between" >
              <span class="  font-bold">عنوان</span>
              <span>{{product?.name}}</span>
            </li>
            <li class=" flex justify-between">
              <span class="  font-bold">قیمت</span>
              <span>
                {{ product?.price?.toLocaleString() }} تومان
              </span>
            </li>
            
            <li class=" flex justify-between">
              <span  class="  font-bold">
                وضعیت 
              </span>
              <span>
                {{ product?.status?.value }} 
              </span>
            </li>
            
            
            
           
          </ul>
        </div>
      </div>
      <div
        class="compareItem  relative  border border-gray-300 p-2 bg-white w-1/4"
        v-for="item in compareList"
      >
      <div class=" w-max p-1.5 rounded absolute bg-red-600 top-3 left-3 cursor-pointer"
      @click="deleteItem(item?.id)"  
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
      </svg>
      </div>
        <div class="item-image">
          <img
            class="rounded w-full lg:h-[200px] object-cover"
          :src="`${showImageBaseUrl}/${item?.picture?.url}`"
            :alt="item?.name"
          />
        </div>
        <!-- <div class="item-title"><span>عنوان</span></div> -->
        <div class="item-info">
          <ul>
            <li class=" flex justify-between" >
              <span class="  font-bold">عنوان</span>
              <span>{{item?.name}}</span>
            </li>
            <li class=" flex justify-between">
              <span class="  font-bold">قیمت</span>
              <span>
                {{ item?.price?.toLocaleString() }} تومان
              </span>
            </li>
            
            <li class=" flex justify-between">
              <span  class="  font-bold">
                وضعیت 
              </span>
              <span>
                {{ item?.status?.value }} 
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { useToast } from "vue-toastification";
const route = useRoute()
const product = ref();
const query = ref('');
const queryIds = ref([])
const {
  public: { showImageBaseUrl }
} = useRuntimeConfig();
const time = ref(0);
const products = ref();
// const toast = useToast();
const compareList = ref([])
const loadingsech = ref(false)
const getProduct = async (prId) => {
  try {
    const response = await $fetch("/api/products/productItem", {
      method: "GET",
      query: {
        id: prId,
      },
    });

    if (response.isSuccess) {
     
      return response.data
    }
  
  } catch (error) {
    // console.log(error);
  }
};
function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}
const addToCompare = async (item)=>{
  if(route.query.compareId == undefined ){
    queryIds.value.push(item?.id)
    navigateTo(`/compare?productId=${route?.query.productId}&compareId=${item?.id}`)
   await getCompareItems()
   
  }else{
    let ids =route?.query.compareId.split('-');
    let isRoute = false;
    ids.find((el)=>{
       if(el == item?.id.toString()){
        isRoute = true;
       }
    })
    if(isRoute == false){
       queryIds.value.push(item?.id)

    navigateTo(`/compare?productId=${route?.query.productId}&compareId=${route?.query.compareId}-${item?.id}`)
    await getCompareItems()
    }
   else{
    // toast.warning(" این محصول ذر لیست مقایسه موجود است !", {
    //     position: "top-right",
    //     timeout: 5000,
    //     closeOnClick: true,
    //     pauseOnFocusLoss: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     draggablePercent: 0.6,
    //     showCloseButtonOnHover: false,
    //     hideProgressBar: true,
    //     closeButton: "button",
    //     icon: true,
    //     rtl: false,
    //   });
   }
  }

  // let resIndex= -1;
  //   compareList.value.find((el, index)=>{
  //         console.log(el,index);
  //         if(item.id == el.id){
          
  //           resIndex = index; 
  //            console.log('ooo',resIndex);
  //         }else{
  //           resIndex = -1;
  //         }
  //   });
  //   if(resIndex == -1){
  //     compareList.value.push(item)
  //   }else{
  //     toast.warning(" این محصول ذر لیست مقایسه موجود است !", {
  //       position: "top-right",
  //       timeout: 5000,
  //       closeOnClick: true,
  //       pauseOnFocusLoss: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       draggablePercent: 0.6,
  //       showCloseButtonOnHover: false,
  //       hideProgressBar: true,
  //       closeButton: "button",
  //       icon: true,
  //       rtl: false,
  //     });
  //   }
}
const getCompareItems = ()=>{
  compareList.value = []
  if(queryIds.value.length > 0){
      console.log(queryIds.value,'------------------------');
      
      queryIds.value.forEach(async(element) => {
        console.log(element);
        let pr = await getProduct(element);
        compareList.value.push(pr)
      });
  }else{
    console.log(' =================== ================= نداریم');
  }
  console.log(' ============================ main list' , compareList.value);
}
const searching =async ()=>{
  if(query.value.length > 3){
    await getproducts();
  }
}
const deleteItem = async (id)=>{
    let resIndex= null;
    queryIds.value.find((el, index)=>{
          // console.log(el,index);
          if(id.toString() == el){
           
            resIndex = index;
             console.log('ooo',resIndex);
          }
    });
    console.log('ooo res',resIndex);
    if (resIndex != null) {
      queryIds.value.splice(resIndex, 1); 
      console.log(queryIds.value);
      if( queryIds.value.length > 0){
        navigateTo(`/compare?productId=${route?.query.productId}&compareId=${queryIds.value.join('-')}`)
      }else{
        navigateTo(`/compare?productId=${route?.query.productId}`)
      }
      
      await getCompareItems()
}


}
const getproducts =async ()=>{
  loadingsech.value = true
  try {
    const response = await $fetch("/api/products/products", {
      method: "GET",
      query: {
        CategoryIds: product.value?.categoryId,
        Q:query.value,
        NotId:route.query.productId.split("-")[0]
      },
    });

   
      products.value = response;
      
  
  
  } catch (error) {
    // console.log(error);
    loadingsech.value = false
  }
  loadingsech.value = false
}
onMounted( async ()=>{

  product.value = await getProduct(route.query.productId.split("-")[0])
  if (product.value.duration != null) {
    time.value = toHoursAndMinutes(product.value.duration);
 
  }
  if(route.query.compareId != undefined){
    queryIds.value = route.query.compareId.split('-')
    console.log(queryIds.value , '----------- ------------------');
  }
  await getCompareItems()
})


</script>

<style lang="scss" scoped>
ul {
  li {
    border-top: 1px solid #e2e2e2;
    padding: 5px;
    color: #494949;
   
    span{
       font-size: 14px;
    }
  }
}
.seachBox input:focus{
  box-shadow: unset !important;
  outline: unset !important;
}
</style>
