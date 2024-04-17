import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useStaticPage = defineStore("staticPageStore", {
    state: () => {
        return {
            data: null,
            about: {
                label: "about"
            },

            // popular: {
            //     "active": true,
            //     "notId": 10,
            //     "categoryIds": [
            //         1,
            //         0,
            //         0
            //     ],
            //     "categoryLabels": [
            //         "string"
            //     ],
            //     "isAndCategories": true,
            //     "priceFrom": 1000,
            //     "priceTo": 20000,
            //     "inStock": true,
            //     "pageIndex": 1,
            //     "pageSize": 10,
            //     "q": null,
            //     "sortBy": 10,
            //     "available": true
            // },
        };
    },

    actions: {
        async getBody(state) {
            // console.log(id);
            try {

                const req = await $fetch("/api/staticPage/staticPage", {
                    method: "GET",
                    query: state,
                });
                // console.log(req);
                // this.data = req;
                return req

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },

    },
});