import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            itemCount: 0,
            cart: {
                none: {
                    id: 0
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
                    id: 8
                },
                setRebate: {
                    id: 6
                },
                removeRebate: {
                    id: 7
                },
                setOrder: {
                    id: 10
                }
            },
            cart: null
        }
    },
    actions: {

        async getItemCount() {
            try {
                this.loading = true;
                const response = await $fetch('/api/cart/cart', {
                        method: 'POST',
                        body: {
                            "cartUpdateType": 13,
                            "returnCart": true,
                            "userId": 0,
                            "uniqueId": "",
                            "addressId": 0,
                            "rebateCode": "",
                            "deliveryId": 0,
                            "merchantId": 0,
                            "productId": 0

                        }
                    })
                    // console.log("---------------------------------------------- cart ------------------------------------");
                    // console.log(response);
                if (response.isSuccess) {
                    this.itemCount = response.data.itemCount
                    this.cart = response.data
                }
            } catch (error) {
                console.log("error get cart :", error);

            }
        },
        async add2Basket = (status) => {
            loading.value = true;
            console.log(authStore);
            if (authStore.profile) {

                try {
                    const response = await $fetch("/api/cart/cart", {
                        method: "POST",
                        body: status,
                    });
                    console.log("---- cart --------");
                    console.log(response);
                    if (response.isSuccess) {
                        console.log("successfully added");
                        this.cart = response;
                    }
                    // console.log("================= add products cart response ========");
                    // console.log(response);
                } catch (error) {
                    // console.log(error);
                }
            } else {
                toast.error("برای خرید باید ابتدا وارد حساب شوید", {
                    position: "top-right",
                    timeout: 5000,
                });
                navigateTo("/authorize/login");
                authStore.backUrl = route.fullPath;
            }
        };


    },
})