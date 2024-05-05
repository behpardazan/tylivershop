import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const usePost = defineStore("postStore", {
    state: () => {
        return {
            data: null,
            latest: {
                "sortBy": 1,
                "available": true
            },
            latestInBlog: {
                "sortBy": 1,
                "available": true,
                "pageSize": 5
            },


        };
    },

    actions: {
        async getPost(state) {
            // console.log(id);
            try {

                const req = await $fetch("/api/post/post", {
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