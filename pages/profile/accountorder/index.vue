<template>
    <div class="tableContainer ">
                                 <div class="info-box mt-2 tablePro">
                            <strong class="flex items-center content-start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 4C11.245 4.00007 10.5096 4.24044 9.90031 4.6863C9.29102 5.13217 8.83946 5.76039 8.611 6.48L7.811 9H16.189L15.389 6.48C15.1605 5.76039 14.709 5.13217 14.0997 4.6863C13.4904 4.24044 12.755 4.00007 12 4ZM18.287 9L17.295 5.875C16.9383 4.75048 16.2328 3.76872 15.2808 3.07195C14.3288 2.37518 13.1797 1.99959 12 1.99959C10.8203 1.99959 9.67115 2.37518 8.71915 3.07195C7.76715 3.76872 7.0617 4.75048 6.705 5.875L5.713 9H3.348C3.03575 9.00001 2.72784 9.07313 2.44893 9.21351C2.17001 9.35388 1.92784 9.55761 1.7418 9.80839C1.55576 10.0592 1.43102 10.35 1.37757 10.6577C1.32412 10.9653 1.34345 11.2812 1.434 11.58L2.558 15.29L3.946 19.87C4.13269 20.4861 4.51259 21.0258 5.02959 21.4093C5.54659 21.7929 6.17326 22 6.817 22H17.183C17.8266 21.9998 18.453 21.7926 18.9698 21.409C19.4866 21.0255 19.8664 20.4859 20.053 19.87L21.442 15.29L22.566 11.58C22.6566 11.2812 22.6759 10.9653 22.6224 10.6577C22.569 10.35 22.4442 10.0592 22.2582 9.80839C22.0722 9.55761 21.83 9.35388 21.5511 9.21351C21.2722 9.07313 20.9642 9.00001 20.652 9H18.287ZM6.444 11H3.348L4.257 14H8.037L7.627 11H6.444ZM9.646 11L10.055 14H13.945L14.355 11H9.645H9.646ZM16.373 11L15.963 14H19.743L20.652 11H16.373ZM19.137 16H15.69L15.145 20H17.182C17.3966 20 17.6055 19.931 17.7778 19.8031C17.9501 19.6753 18.0768 19.4954 18.139 19.29L19.136 16H19.137ZM13.127 20L13.672 16H10.327L10.873 20H13.127ZM8.854 20L8.309 16H4.863L5.86 19.29C5.92223 19.4954 6.04886 19.6753 6.2212 19.8031C6.39353 19.931 6.60242 20 6.817 20H8.854Z"
                                        fill="black" />
                                </svg>
    
                                   سفارشات</strong>
                            <hr>
                            <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center">
                                <div class="product-counter w-1/12">
                                    <strong>ردیف</strong>
                                </div>
                                <div class="product-counter w-2/12">
                                    <strong>تاریخ</strong>
                                </div>
                                <div class="product-id w-3/12">
                                    <strong> شناسه </strong>
                                </div>
                                <div class="product-name w-1/12">
                                    <strong>   تخقیف </strong>
                                </div>
                                <div class="product-date lg:w-3/12">
                                        <strong>هزینه </strong>
                                    </div> 

                                    <div class="product-date lg:w-2/12">
                                        <strong>وضعیت </strong>
                                    </div> 
                               
                                <!-- <div class="product-details lg:w-1/12">
                                    <strong>
                                        عملیات
                                    </strong>
                                </div> -->
                            </div> 
                            <div class="border border-gray-300 my-2 flex-wrap bg-white rounded flex p-1 items-center" v-for="(item,index) in orederData?.list" :key="item?.id"
                                >
                                <!-- <a  class="product-counter w-2/12 flex justify-center" target="_blank" :href="`/curse/${item?.id}`">
                                    <img :src="showImageBaseUrl+item?.picture?.url" class="w-[50px] h-[50px] object-cover"  alt="">
                                    
                                </a> -->
                                <a  class="product-id w-1/12 flex justify-center">
                                    <span> {{index+1}} </span>
                                </a>
                                <div class="w-2/12 text-center">
                                    <span class="text-sm">{{  moment(item?.createDate, 'YYYY-MM-DD HH:mm:ss').locale('fa').format('YYYY/MM/DD') }}</span>
                                </div>

                                <a  class="product-id w-3/12 flex justify-center">
                                    <span class="text-sm"> {{item?.id}} </span>
                                </a>
                                <a  class="product-name w-1/12 flex justify-center">
                                    <span class="">{{item?.discountPrice}}</span>
                                </a>
                                <div class="product-date w-3/12 flex justify-center">
                                        <span class="">{{item?.paymentPrice.toLocaleString()}}</span>
                                </div>
                                <div class="product-date w-2/12 flex justify-center">
                                        <span class="text-green-700" v-if="item?.isPaid==true">پرداخت شده</span>
                                        <span class="text-red-700" v-else>پرداخت نشده</span>
                                </div>
                                <div class="w-full border p-2 bg-gray-100 border-gray-300 rounded hidden">
                                    <p class="text-sm text-gray-600">این سفارش را <span class="text-gray-800">{{ item?.user?.firstName }}</span>
                                         با شماره موبایل <span  class="text-gray-800">{{ item?.user?.mobile }}</span> دریافت کرد.</p>
                                        <!-- {{ item }} -->
                                    
                                    
                                </div>
                            </div>
                                </div>
                        </div>
    <div class="profile-box address-parent hidden">

        <div class="title">
            <strong> سفارش های من</strong>

        </div>
        <div class="btn-box flex">
            <button name="inserted" :class="{ active: status == 'inserted' }" class="btn " @click="changeStatus">سفارشات ایجاد
                شده</button>
            <button name="success" :class="{ active: status == 'success' }" class="btn " @click="changeStatus"> سفارشات پرداخت
                شده کامل</button>
        </div>
        <div class="profileContainer">
            <div class="info-box mt-2">

                <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center sticky top-[10px]">
                    <!-- <div class="product-counter w-1/12">
                    <strong>ردیف</strong>
                </div> -->
                    <div class="product-img w-3/12">
                        <strong> تاریخ </strong>
                    </div>
                    <div class="product-id w-1/12">
                        <strong> شناسه </strong>
                    </div>
                    <div class="product-name w-3/12">
                        <strong> هزینه سفارش </strong>
                    </div>
                    <div class="product-size w-1/12">
                        <strong> وزن </strong>
                    </div>
                    <div class="product-customer w-2/12">
                        <strong>نام گیرنده </strong>
                    </div>
                    <div class="product-status w-2/12">
                        <strong> وضعیت </strong>
                    </div>
                    <div class="product-date w-2/12">
                        <strong> پرداخت</strong>
                    </div>
                    <div class=" w-2/12" >
                        <strong> سفارشات</strong>
                    </div>
                    <!-- <div class="product-details w-1/12">
                    <strong>
                        عملیات
                    </strong>
                </div> -->
                </div>

                          <div v-if="status == 'inserted'" v-for="item in orders.inserted" :key="item">
                    <div class="info-line my-2 bg-white rounded flex items-center p-1 ">
                        <!-- <div class="product-counter w-1/12">
                    <span>1</span>
                </div> -->
                        <!-- <div class="product-img w-3/12 flex justify-start"> -->
                            <div class="product-date w-3/12">
                            <span >{{ changeDate(item?.Datetime) }}</span>
                        </div>
                        <!-- </div> -->

                        <div class="product-id w-1/12 flex justify-start">
                            <span> {{ item?.Id }} </span>
                        </div>
                        
                        <div class="product-name w-3/12 flex justify-start">
                            <span>{{ item?.Price.toFixed(2) }}</span>
                        </div>
                        <div class="product-size w-1/12 flex justify-start">
                            <span>{{ item?.TotalWeight.toFixed(2) }} گرم</span>
                        </div>
                        <div class="product-customer w-2/12 flex justify-start">
                            <span> {{ item?.AccountAddress.NameFamily }} </span>
                        </div>
                        <div class="product-status w-3/12 flex justify-start">
                            <span> {{ item?.Status.Name }} </span>
                        </div>
                        <div class="product-status w-2/12 flex justify-start">
                            <span> {{ item?.Status.Name }} </span>
                        </div>
                        <div class="w-2/12 flex items-center justify-center" @click="showOrders(item?.Id)">
                            <span class="h-[40px] w-[40px] flex items-center  justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>

                            </span>
                        </div>
                      
                        <!-- <div class="product-details w-1/12">
                    <span @click="getDetail(item?.Id)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.75 12C6.75 12.2298 6.70474 12.4574 6.61679 12.6697C6.52884 12.882 6.39994 13.0749 6.23744 13.2374C6.07493 13.3999 5.88202 13.5288 5.6697 13.6168C5.45738 13.7047 5.22981 13.75 5 13.75C4.77019 13.75 4.54262 13.7047 4.3303 13.6168C4.11798 13.5288 3.92507 13.3999 3.76256 13.2374C3.60006 13.0749 3.47116 12.882 3.38321 12.6697C3.29527 12.4574 3.25 12.2298 3.25 12C3.25 11.5359 3.43437 11.0908 3.76256 10.7626C4.09075 10.4344 4.53587 10.25 5 10.25C5.46413 10.25 5.90925 10.4344 6.23744 10.7626C6.56563 11.0908 6.75 11.5359 6.75 12ZM20.75 12C20.75 12.4641 20.5656 12.9092 20.2374 13.2374C19.9092 13.5656 19.4641 13.75 19 13.75C18.5359 13.75 18.0908 13.5656 17.7626 13.2374C17.4344 12.9092 17.25 12.4641 17.25 12C17.25 11.5359 17.4344 11.0908 17.7626 10.7626C18.0908 10.4344 18.5359 10.25 19 10.25C19.4641 10.25 19.9092 10.4344 20.2374 10.7626C20.5656 11.0908 20.75 11.5359 20.75 12V12ZM12 13.75C12.4641 13.75 12.9092 13.5656 13.2374 13.2374C13.5656 12.9092 13.75 12.4641 13.75 12C13.75 11.5359 13.5656 11.0908 13.2374 10.7626C12.9092 10.4344 12.4641 10.25 12 10.25C11.5359 10.25 11.0908 10.4344 10.7626 10.7626C10.4344 11.0908 10.25 11.5359 10.25 12C10.25 12.4641 10.4344 12.9092 10.7626 13.2374C11.0908 13.5656 11.5359 13.75 12 13.75V13.75Z"
                                fill="black" />
                        </svg>
                    </span>
                </div> -->
                    </div>
                    

                    <div class="orderBox flex-wrap bg-white  items-start" :class='"order"+item?.Id'>
                        <div class="flex flex-wrap w-1/2 border " v-for="el in item?.Childs" :key="el">
                            <p class="w-full storeName">نام فروشگاه:{{ el?.StoreName }}</p>

                            <div class="flex border" v-for="item in el?.AccountOrderProducts" :key="item">
                                <img class="w-1/3 h-[150px]" :src="item.Product.Picture.Url" />

                            <div class=" p-2 w-2/3">
                                <p>وضعیت محصول :{{ item.Code.Name }}</p>

                                <p>نام محصول:{{ item.Product.Name }}</p>
                                <p v-for="pr in item.ViewAccountOrderProductOptions" :key="pr">
                                    {{ pr?.OptionName }}:{{ pr?.OptionValue }}</p>
                                <p>نام گیرنده: {{ el?.AccountAddress.NameFamily }}</p>
                                <p> آدرس:{{ el?.AccountAddress.AddressValue }}</p>

                            </div>
                            </div>
                        </div>
                    </div>



                            </div>
               


           
                    <div v-if="status == 'success'" v-for="item in orders.success" :key="item">
                    <div class="info-line my-2 bg-white rounded flex p-1 items-center">
                        <!-- <div class="product-counter w-1/12">
                    <span>1</span>
                </div> -->
                        <!-- <div class="product-img w-3/12 flex justify-center"> -->
                            <div class="product-date w-3/12 flex justify-start">
                            <span >{{ changeDate(item?.Datetime) }}</span>
                        </div>
                        <!-- </div> -->

                        <div class="product-id w-1/12 flex justify-start">
                            <span> {{ item?.Id }} </span>
                        </div>
                        <div class="product-name w-3/12 flex justify-start">
                            <span>{{ item?.Price.toFixed(2) }}</span>
                        </div>
                        <div class="product-size w-1/12 flex justify-start">
                            <span>{{ item?.TotalWeight.toFixed(2) }} گرم</span>
                        </div>
                        <div class="product-customer w-2/12 flex justify-start">
                            <span> {{ item?.AccountAddress.NameFamily }} </span>
                        </div>
                        <div class="product-status w-2/12 flex justify-start">
                            <span> {{ item?.Status.Name }} </span>
                        </div>
                        <div class="product-date w-2/12 flex justify-start">
                            <span>{{ item?.PaymentType.Name }}</span>
                        </div>
                        <div class="w-2/12 flex items-center justify-center " @click="showOrders(item?.Id)">
                            <span class="h-[40px] w-[40px] items-center justify-start flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>

                            </span>
                             
                        </div>
                        <!-- <div class="product-details w-1/12">
                    <span @click="getDetail(item?.Id)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.75 12C6.75 12.2298 6.70474 12.4574 6.61679 12.6697C6.52884 12.882 6.39994 13.0749 6.23744 13.2374C6.07493 13.3999 5.88202 13.5288 5.6697 13.6168C5.45738 13.7047 5.22981 13.75 5 13.75C4.77019 13.75 4.54262 13.7047 4.3303 13.6168C4.11798 13.5288 3.92507 13.3999 3.76256 13.2374C3.60006 13.0749 3.47116 12.882 3.38321 12.6697C3.29527 12.4574 3.25 12.2298 3.25 12C3.25 11.5359 3.43437 11.0908 3.76256 10.7626C4.09075 10.4344 4.53587 10.25 5 10.25C5.46413 10.25 5.90925 10.4344 6.23744 10.7626C6.56563 11.0908 6.75 11.5359 6.75 12ZM20.75 12C20.75 12.4641 20.5656 12.9092 20.2374 13.2374C19.9092 13.5656 19.4641 13.75 19 13.75C18.5359 13.75 18.0908 13.5656 17.7626 13.2374C17.4344 12.9092 17.25 12.4641 17.25 12C17.25 11.5359 17.4344 11.0908 17.7626 10.7626C18.0908 10.4344 18.5359 10.25 19 10.25C19.4641 10.25 19.9092 10.4344 20.2374 10.7626C20.5656 11.0908 20.75 11.5359 20.75 12V12ZM12 13.75C12.4641 13.75 12.9092 13.5656 13.2374 13.2374C13.5656 12.9092 13.75 12.4641 13.75 12C13.75 11.5359 13.5656 11.0908 13.2374 10.7626C12.9092 10.4344 12.4641 10.25 12 10.25C11.5359 10.25 11.0908 10.4344 10.7626 10.7626C10.4344 11.0908 10.25 11.5359 10.25 12C10.25 12.4641 10.4344 12.9092 10.7626 13.2374C11.0908 13.5656 11.5359 13.75 12 13.75V13.75Z"
                                fill="black" />
                        </svg>
                    </span>
                </div> -->
                    </div>
                    <!-- <div class="bg-white p-2">
                        <p>نام فروشگاه:{{ item?.Childs[0]?.StoreName }}</p>
                        <p>نام محصول:{{ item?.Childs[0]?.AccountOrderProducts[0].Product.Name }}</p>
                        <p v-for="pr in item?.Childs[0]?.AccountOrderProducts[0].ViewAccountOrderProductOptions">
                            {{ pr?.OptionName }}:{{ pr?.OptionValue }}</p>
                        <p>نام گیرنده: {{ item?.Childs[0]?.AccountAddress.NameFamily }}</p>
                        <p> آدرس:{{ item?.Childs[0]?.AccountAddress.AddressValue }}</p>
                    </div> -->

                    <div class="orderBox flex-wrap bg-white  items-start" :class='"order"+item?.Id'>
                        <div class="flex flex-wrap w-1/2 border " v-for="el in item?.Childs" :key="el">
                            <p class="w-full storeName">نام فروشگاه:{{ el?.StoreName }}</p>

                            <div class="flex border" v-for="item in el?.AccountOrderProducts" :key="item">
                                <img class="w-1/3 h-[150px]" :src="item.Product.Picture.Url" />

                            <div class=" p-2 w-2/3">
                                <p>وضعیت محصول :{{ item.Code.Name }}</p>

                                <p>نام محصول:{{ item.Product.Name }}</p>
                                <p v-for="pr in item.ViewAccountOrderProductOptions" :key="pr">
                                    {{ pr?.OptionName }}:{{ pr?.OptionValue }}</p>
                                <p>نام گیرنده: {{ el?.AccountAddress.NameFamily }}</p>
                                <p> آدرس:{{ el?.AccountAddress.AddressValue }}</p>

                            </div>
                            </div>
                        </div>
                    </div>



                </div>
       


            </div>
        </div>


    </div>
</template>

<script setup>

import moment from 'jalali-moment'

 const orederData= ref()
    onMounted(()=>{
        getOrder()
    })

    const getOrder = async ()=>{
            try {
                const response = await $fetch('/api/productOrder/productOrder', {
                    method: 'GET',
                    
                })
                // console.log("like");
                // console.log(user.value);
                orederData.value = response
            } catch (error) {
                console.log(error);
                // navigateTo("/authorize/login")
            }
        }


//         const showOrdersBox=ref(false);
//          const showOrders = (id)=>{
//               const orderContainer= document.querySelector(`.order${id}`);
//               const orderBox = document.querySelectorAll(".orderBox");
//             //   console.log(orderBox);
//             //   console.log(id);
//             //   for(let i =0; orderBox.length > i ; i++){
//             //          orderBox[i].classList.remove("active");
                     
                
//             //     }
//                 if(showOrdersBox.value == false){
//                     orderContainer.classList.add("active");
//                     showOrdersBox.value=true;
                   
//                 }else{
//                     orderContainer.classList.remove("active");
//                     showOrdersBox.value=false;
//                 }
//          }       
//         let AuthStore;
//         const orders = ref({
//             inserted: {},
//             success: {},
//         });
       
//         const status = ref("success")
//         const changeStatus = (e) => {
//             const elementLabel = e.target.getAttribute("name");
//             status.value = elementLabel;
//             // console.log(elementLabel);
//             // console.log(status.value);

//         }
// const changeDate = (l)=>{
//     const date = moment(l).locale('fa').format('YYYY/MM/DD')
// return date
// }

//         const getDetail = async (id) => {
//             var config = {
//                 method: 'get',
//                 url: `${import.meta.env.VITE_BASE_URL}accountorder`,
//                 headers: AuthStore.authHeaders,
//                 params: {
//                     orderid: id
//                 }
//             };
//             await axios(config)
//                 .then(function (response) {

//                     if (response.data.Code == 0) {
//                         alert("Eroor 0")
//                     } else if (response.data.Code == 1) {

//                         // historyData.value= response.data;


//                         // console.log("accountorder id")
//                         // console.log(response.data.Value.Childs.AccountOrderProducts);

//                     } else if (response.data.Code == 2) {
//                         alert("Error 2")
//                         navigate('/login');
//                     }
//                     else if (response.data.Code == 3) {
//                         alert("3")
//                         errorStatus.value == true;

//                     }



//                 })
//                 .catch(function (error) {
//                     // console.log("ERROR:" + error);
//                 });
//         }
//         const uploadImage = (orderId) => {
//             // console.log("upload start");
//             const input = document.querySelector(`#paymentdeliver${orderId}`);
//             // console.log(input);
//             // console.log(input.files[0]);
//             // console.log(input.value);

//             var formdata = new FormData();
//             formdata.append("image", input.files[0]);
//             let config = {
//                 method: 'post',
//                 maxBodyLength: Infinity,
//                 url: 'https://panel.goldhous.ir/panel/cpr/uploaddoc',
//                 data: formdata
//             };

           

//             axios.request(config)
//                 .then((response) => {


//                     let uploadConf = {
//                 method: 'post',
//                 url: `https://panel.goldhous.ir/api/cpr/accountorderfile?orderid=${parseInt(orderId)}&fileid=${parseInt(response.data.Data.Id)}`,

//                 headers: AuthStore.authHeaders,
                
        
//             };
//                     console.log('image is uploded');
//                     axios.request(uploadConf)
//                         .then(res => {
//                             // console.log("ok ok");
//                             // console.log(res);
//                         })
//                         .catch(err => {
//                             // console.log(err)
//                         })
//                 })
//                 .catch((error) => {
//                     // console.log(error);
//                 });

//         }
     
        
//         onMounted(async () => {
//             AuthStore = useAuthStore();
            
//             var insertConf = {
//                 method: 'get',
//                 url: `${import.meta.env.VITE_BASE_URL}accountorder`,
//                 headers: AuthStore.authHeaders,
//                 params: {
//                     Status: 'ORDER_STATUS_INSERTED'
//                 }
//             };
//             await axios(insertConf)
//                 .then(function (response) {

//                     if (response.data.Code == 0) {
//                         alert("Eroor 0")
//                     } else if (response.data.Code == 1) {

//                         // historyData.value= response.data;
//                         orders.value.inserted = response.data.Value.List

//                         // console.log("accountorder ins")
//                         // console.log(orders.value.inserted);

//                     } else if (response.data.Code == 2) {
//                         alert("Error 2")
//                         navigate('/login');
//                     }
//                     else if (response.data.Code == 3) {
//                         alert("3")
//                         errorStatus.value == true;

//                     }



//                 })
//                 .catch(function (error) {
//                     console.log("ERROR:" + error);
//                 });
//             var successConf = {
//                 method: 'get',
//                 url: `${import.meta.env.VITE_BASE_URL}accountorder`,
//                 headers: AuthStore.authHeaders,
//                 params: {
//                     Status: 'ORDER_STATUS_SUCCESS'
//                 }
//             };
//             await axios(successConf)
//                 .then(function (response) {

//                     if (response.data.Code == 0) {
//                         alert("Eroor 0")
//                     } else if (response.data.Code == 1) {

//                         // historyData.value= response.data;
//                         orders.value.success = response.data.Value.List;
//                         console.log("orrrrrrrder");
//                         console.log(response);

//                     } else if (response.data.Code == 2) {
//                         alert("Error 2")
//                         navigate('/login');
//                     }
//                     else if (response.data.Code == 3) {
//                         alert("3")
//                         errorStatus.value == true;

//                     }



//                 })
//                 .catch(function (error) {
//                     console.log("ERROR:" + error);
//                 });
//         })
//         onMounted(()=>{
//             console.log("=================");
//             console.log(orders.value);
//         })
</script>

<style lang="scss" scoped>
.tbl_header{
    position: sticky;
    top: 10px;
    z-index: 1000   
}
.orderBox{
    display: none;
}
.active{
    display: flex;
}

.product-img img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.btn-box {
    .btn {
        background-color: #e3e3e3;
        margin: 10px;
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;

        &.active {
            background: linear-gradient(180deg, #0267FF 0%, #003686 100%);
            color: #fff
        }
    }
}

.info-box {
    border: 1px solid #3333;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    line-height: 33px;
    // width: 850px;

    &>div:nth-child(2n){
        .info-line,.orderBox{
            background-color: rgb(221, 221, 221) !important;
        }
        }

    .info-item {
        span {
            &:first-child {
                color: #848484;
                margin-left: 10px;
            }
        }
    }

    .info-line {
        min-height: 50px;
        border: 1px solid #3333;
        transition: 0.2s;

        

        &:hover {
            border-color: #cba12c;
            box-shadow: 0 0 5px -2px #3333;
        }

        & > div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 5px;

            img {
                width: 80px;
                height: 80px;
                border: 1px solid #3333;
            }

            span {
                font-size: 13px;

            }
        }
    }
}

.infoBoxContainer {
    overflow: auto;
}
@media only screen and (max-width: 600px) {
    .btn-box .btn {
        margin: 4px;
        
    }
}
@media only screen and (max-width: 1200px) {
    .profileContainer{
        overflow: auto;
    }   
}

.storeName{
    background: #cba12c;
    padding: 0 15px;
    height: 30px;
    border-radius: 5px;
}
@media only screen and (max-width: 991px) {
    .profileContainer{
        height: 350px;
    }
    .info-box .info-line > div  {
        padding: 0;
    }
}
</style>