<template>
    <div class="tableContainer ">
                                 <div class="info-box mt-2 tablePro">
                            <strong class="flex items-center content-start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 4C11.245 4.00007 10.5096 4.24044 9.90031 4.6863C9.29102 5.13217 8.83946 5.76039 8.611 6.48L7.811 9H16.189L15.389 6.48C15.1605 5.76039 14.709 5.13217 14.0997 4.6863C13.4904 4.24044 12.755 4.00007 12 4ZM18.287 9L17.295 5.875C16.9383 4.75048 16.2328 3.76872 15.2808 3.07195C14.3288 2.37518 13.1797 1.99959 12 1.99959C10.8203 1.99959 9.67115 2.37518 8.71915 3.07195C7.76715 3.76872 7.0617 4.75048 6.705 5.875L5.713 9H3.348C3.03575 9.00001 2.72784 9.07313 2.44893 9.21351C2.17001 9.35388 1.92784 9.55761 1.7418 9.80839C1.55576 10.0592 1.43102 10.35 1.37757 10.6577C1.32412 10.9653 1.34345 11.2812 1.434 11.58L2.558 15.29L3.946 19.87C4.13269 20.4861 4.51259 21.0258 5.02959 21.4093C5.54659 21.7929 6.17326 22 6.817 22H17.183C17.8266 21.9998 18.453 21.7926 18.9698 21.409C19.4866 21.0255 19.8664 20.4859 20.053 19.87L21.442 15.29L22.566 11.58C22.6566 11.2812 22.6759 10.9653 22.6224 10.6577C22.569 10.35 22.4442 10.0592 22.2582 9.80839C22.0722 9.55761 21.83 9.35388 21.5511 9.21351C21.2722 9.07313 20.9642 9.00001 20.652 9H18.287ZM6.444 11H3.348L4.257 14H8.037L7.627 11H6.444ZM9.646 11L10.055 14H13.945L14.355 11H9.645H9.646ZM16.373 11L15.963 14H19.743L20.652 11H16.373ZM19.137 16H15.69L15.145 20H17.182C17.3966 20 17.6055 19.931 17.7778 19.8031C17.9501 19.6753 18.0768 19.4954 18.139 19.29L19.136 16H19.137ZM13.127 20L13.672 16H10.327L10.873 20H13.127ZM8.854 20L8.309 16H4.863L5.86 19.29C5.92223 19.4954 6.04886 19.6753 6.2212 19.8031C6.39353 19.931 6.60242 20 6.817 20H8.854Z"
                                        fill="black" />
                                </svg>
    
                                علاقه مندی ها</strong>
                            <hr>
                            <div class="info-line my-2 bg-[#d1deff] rounded flex p-1 items-center">
                                <div class="product-counter w-2/12">
                                    <strong>تصویر</strong>
                                </div>
                                <div class="product-id w-1/12">
                                    <strong> شناسه </strong>
                                </div>
                                <div class="product-name w-6/12">
                                    <strong> عنوان  </strong>
                                </div>
                                <div class="product-date lg:w-3/12">
                                        <strong>هزینه </strong>
                                    </div> 
                               
                                <!-- <div class="product-details lg:w-1/12">
                                    <strong>
                                        عملیات
                                    </strong>
                                </div> -->
                            </div>
                            <div class="info-line my-2 bg-white rounded flex p-1 items-center" v-for="item in likedProductList?.list" :key="item?.id"
                                >
                                <NuxtLink class="product-counter w-2/12 flex justify-center"
                                 :to="`/search/${item?.categoryId}/${item?.id}-${item?.name.split(' ').join('-')}`">
                                    <img :src="showImageBaseUrl+item?.picture?.url" class="w-[50px] h-[50px] object-cover"  alt="">
                                    
                                </NuxtLink>
                                <a  class="product-id w-1/12">
                                    <span> {{item?.id}} </span>
                                </a>
                                <a  class="product-name w-6/12 text-center">
                                    <span>{{item?.name}}</span>
                                </a>
                                <div class="product-date lg:w-3/12">
                                        <span>{{item?.price?.toLocaleString()}} تومان</span>
                                </div>
                                
                                <div class="product-details lg:w-1/12">
                                    <svg class="cursor-pointer " @click="deleteLike(item?.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H18V18C18 18.7956 17.6839 19.5587 17.1213 20.1213C16.5587 20.6839 15.7956 21 15 21H9C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18V8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H9V5ZM10 8H8V18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H15C15.2652 19 15.5196 18.8946 15.7071 18.7071C15.8946 18.5196 16 18.2652 16 18V8H10ZM13 6H11V5H13V6ZM10 9C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9ZM14 9C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9Z" fill="black"/>
</svg>

                                </div>
                            </div>
                                </div>
                        </div>

</template>

<script setup>

const {public:{showImageBaseUrl}} = useRuntimeConfig()

const likedProductList= ref()

    onMounted(()=>{
        getLike()
    })
    

        const getLike = async ()=>{
            try {
                const response = await $fetch('/api/product/like', {
                    method: 'GET',
                    
                })
                likedProductList.value = response
            } catch (error) {
                console.log(error);
                // navigateTo("/authorize/login")
            }
        }

const deleteLike = async (id)=>{
            try {
                const response = await $fetch('/api/product/like', {
                    method: 'DELETE',
                    body:{
                        "productId": id,
                    }
                })
                getLike()
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