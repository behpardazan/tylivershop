import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useCategory = defineStore("categoryStore", {
    state: () => {
        return {
            data: null,
        };
    },

    actions: {
        async getCategory() {
            // console.log(id);
            try {

                const req = await $fetch("/api/category/category", {
                    method: "GET",
                    query: {
                        ParentId: 42,
                        Active: true,
                        SortBy: 0
                    },
                });
                console.log(req);
                this.data = req;

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
    },
});