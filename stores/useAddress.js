import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useAddress = defineStore("addressStore", {
    state: () => {
        return {
            addressData: null,
        };
    },

    actions: {
        async getAddress() {
            // console.log(id);
            try {

                const req = await $fetch("/api/address/address", {
                    method: "GET",
                });
                console.log(req);
                this.addressData = req;

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async setAddress(body) {
            // console.log(id);
            try {

                const req = await $fetch("/api/address/address", {
                    method: "POST",
                    body:body
                });
                console.log(req);
                this.addressData = req;

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