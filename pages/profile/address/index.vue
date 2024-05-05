<script>



</script>
<template>
    <div class="profile-box address-parent">
        <button class="btn add-address"
               >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H11V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z"
                    fill="black" style="fill: #09a636;"></path>
            </svg>

            افزودن آدرس جدید
        </button>

        <button class="btn add-address refresh"
                @click="getAddressList" v-show="addAddressStatus==false">
            

            به روز رسانی
        </button>
        <div class="title">
            <strong> آدرس های من</strong>

        </div>

        <AddAddress @cancelingAdd="cancelHandler"  v-if="addAddressStatus==true" />

         <div class="address-box" v-for="item in data" :key="item.name">
               <div class="address_btns ">
                          <n-popconfirm negative-text="خیر" positive-text="بله"
                            @positive-click="deleteAddress(item.ID)" @negative-click="dontDeleteAddress">
                            <template #trigger>
                              <n-button type="error" class="address_delete p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  class="bi bi-trash" viewBox="0 0 16 16">
                                  <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                              </n-button>
                            </template>
                            آدرس مورد نظر حذف شود؟
                          </n-popconfirm>


                        </div>
            <div class="address-item">
                <span>نام گیرنده :</span>
                <span>{{item.NameFamily}} </span>
            </div>
            <div class="address-item">
                <span>شماره تماس :</span>
                <span>{{item.Mobile}} </span>
            </div>
            <div class="address-item">
                <span>کشور محل سکونت :</span>
                <span>{{item.State.Name}} </span>
            </div>
            <div class="address-item">
                <span>استان محل سکونت :</span>
                <span>{{item.State.Name}} </span>
            </div>
            <div class="address-item">
                <span>شهر محل سکونت :</span>
                <span>{{item.City.Name}} </span>
            </div>
            <div class="address-item">
                <span>متن آدرس :</span>
                <span>{{item.AddressValue}}</span>
            </div>
                  
        </div> 
    </div>
</template>

<style lang="scss" scoped>
.address_btns{
    display: flex;
justify-content: flex-end;
}
.address-parent {
    position: relative;

    
    .title {
        padding: 10px 5px;
        border-bottom: 1px solid #3333;
    }

    button.add-address {
        background-color: #262626;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        border-radius: 9px;
        box-shadow: 0px 3px 10px -8px;
        border-bottom: 1px solid #fff;
        font-size: 12px;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;

        &.refresh{
            left: 148px;
width: 100px;
background: #a0a0a0;
height: 45px;
justify-content: center;

        }
    }

    .address-box {
        border: 1px solid #3333;
        background-color: #f9f9f9;
        border-radius: 10px;
        padding: 10px;
        line-height: 33px;
        margin: 10px 0;

        .address-item {
            span {
                &:first-child {
                    color: #848484;
                    margin-left: 10px;
                }
            }
        }
    }
}
@media only screen and (max-width: 600px) {
.address-parent .add-address {
    margin: 5px auto;
    position: static !important;
    min-width: 140px;
    height: 35px !important;
}
}
</style>