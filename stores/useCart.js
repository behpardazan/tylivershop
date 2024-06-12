import { defineStore } from 'pinia'

export const useCart = defineStore('cartStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            itemCount: 0,
            cartStatus: {
                none: {
                    id: 0//get count (0 or 13)
                },
                add: {
                    id: 1
                },
                delete: {
                    id: 4
                },
                setAddrees: {
                    id: 5
                },
                setMerchant: {
                    id: 9
                },
                setRebate: {
                    id: 7
                },
                removeRebate: {
                    id: 8
                },
                setOrder: {
                    id: 11
                },
                getCartCount: {
                    id: 13
                },
                getCart: {
                    id: 14
                },
                getDelivery: {
                    id: 15
                },
                setDelivery: {
                    id: 6
                }
            },
            cart: null,
            cartCount: 0,
            productIdCount:[],
            deliveryMethod:null
            //if get "code: 1" in result you most login
        }
    },
    actions: {

        async getCartCount (status) {

            try {
                const response = await $fetch("/api/cart/cart", {
                    method: "POST",
                    body: status,
                });
               
                if (response.isSuccess) {
                    // console.log("successfully added");
                    this.cart = response;

                    this.cartCount = response.data.itemCount;
                       


                        response?.data?.cartItems.forEach(element => {
                            this.productIdCount.push({"id":element?.id,"productId":element?.productId,"count": element?.count})
                            
                        });

                        // this.getDelivery()

                }
            } catch (error) {
                // console.log(error);
            }
    } ,
        async getCart (status) {

                try {
                    const response = await $fetch("/api/cart/cart", {
                        method: "POST",
                        body: status,
                    });
                    // console.log("---- cart --------");
                    // console.log(response); 
                    if (response.isSuccess) {
                        return response
                      

                    }
                    // console.log("================= add products cart response ========");
                    // console.log(response);
                } catch (error) {
                    // console.log(error);
                }
        },
        async getDelivery (){
            try {
                const response = await $fetch("/api/cart/cart", {
                    method: "POST",
                    body: {
                        "cartUpdateType": this.cartStatus.getDelivery.id,
                    },
                });
                // console.log("---- cart --------");
                // console.log(response); 
                if (response.isSuccess) {
                    console.log("successfully called");
                    this.deliveryMethod = response;
                    this.getCart({
                        cartUpdateType:this.cartStatus.setDelivery.id,
                        deliveryId:response?.data[0]?.id
                    })
                    return response
                   


                }
                // console.log("================= add products cart response ========");
                // console.log(response);
            } catch (error) {
              
            }
        }


    },
})