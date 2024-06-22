import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useProducts = defineStore("productsStore", {
    state: () => {
        return {
            data: null,
            lates: {
                "active": true,
                "inStock": true,
                "sortBy": 0,
                "available": true
            },
            popular: {
                "active": true,
                "inStock": true,
                "sortBy": 10,
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
        async getProducts(state) {
            // console.log(id);
            try {

                const req = await $fetch("/api/products/products", {
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
        async getRelatedProducts(id) {
            // console.log(id);
            try {

                const req = await $fetch("/api/products/relatedProducts", {
                    method: "GET",
                    query: {
                        id: id
                    }
                });
                // console.log(req);
                // this.data = req;
                return req

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async getProductPictures(id) {
            // console.log(id);
            try {

                const req = await $fetch("/api/products/productItemPicture", {
                    method: "GET",
                    query: {
                        ProductId: id
                    }
                });
                // console.log(req);
                // this.data = req;
                return req

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async productFeatureValue(id) {
            // console.log(id);
            try {
                const list = []
                const req = await $fetch("/api/products/productFeatureValue", {
                    method: "GET",
                    query: {
                        ProductId: id
                    }
                });
                // console.log(req);
                // this.data = req;
                let i = 1;
                req.list.forEach(element => {
                    console.log(element);
                    list.push({
                        'ردیف': i,
                        'عنوان': element.name,
                        'مقدار': element.productFeatureValues[0].name
                    })
                    i++;
                });

                return list

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async save(id) {
            // console.log(id);
            try {
                const list = []
                const req = await $fetch("/api/products/like", {
                    method: "Post",
                    body: {
                        ProductId: id
                    }
                });
                // console.log(req);
                // this.data = req;
                let i = 1;
                req.list.forEach(element => {
                    console.log(element);
                    list.push({
                        'ردیف': i,
                        'عنوان': element.name,
                        'مقدار': element.productFeatureValues[0].name
                    })
                    i++;
                });

                return list

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },




    },
});