import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useBanner = defineStore("bannerStore", {
    state: () => {
        return {
            data: null,
            topGif: {
                CategoryLabel: 'ads-banner',
                "sortBy": 1,
                "available": true
            },
            mainSlider: {
                CategoryLabel: 'mainslider',
                "sortBy": 1,
                "available": true
            },
            twoBanner: {
                CategoryLabel: 'towbanner',
                "sortBy": 1,
                "available": true
            },
            singleBanner: {
                CategoryLabel: 'singlebanner',
                "sortBy": 1,
                "available": true
            },
            story: {
                CategoryLabel: 'story',
                "sortBy": 1,
                "available": true
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
        async getBanner(state) {
            // console.log(id);
            try {

                const req = await $fetch("/api/banner/banner", {
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
        async getSearchedProducts(q) {
            // console.log(id);
            try {

                const req = await $fetch("/api/products/products", {
                    method: "GET",
                    query: {
                        "active": true,
                        "inStock": true,
                        "sortBy": 0,
                        "available": true,
                        "pageSize": 7,
                        q: q

                    },
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