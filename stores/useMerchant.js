import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useMerchant = defineStore("merchantStore", {
    state: () => {
        return {
            merchantData: null,
        };
    },

    actions: {
        async getMerchant() {
            // console.log(id);
            try {

                const req = await $fetch("/api/cart/merchant", {
                    method: "GET",
                });
                console.log(req);
                this.merchantData = req;

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        // async getCategory() {
        //     // console.log(id);
        //     try {

        //         const req = await $fetch("/api/category/category", {
        //             method: "GET",
        //             query: {
        //                 ParentId: 42,
        //                 Active: true,
        //                 SortBy: 0
        //             },
        //         });
        //         console.log(req);
        //         this.data = req;

        //     } catch (error) {
        //         console.log("ERROR fromcontact store:" + error);
        //         console.log(error);
        //     }
        // },

    },
});

//1=>register
//2=> onestep login
//3=> tow step
//