import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useDetails = defineStore("detailsStore", {
    state: () => {
        return {
            data: null,
            branchData: null,
            mobile:null,
            address:null,
            baseDetail:null,
            conection: {
                CategoryLabel: 'conection',
                "sortBy": 1,
                "available": true
            },
            branches: {
                CategoryLabel: 'branches',
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
        async getDetails(state) {
            // console.log(id);
            try {

                const req = await $fetch("/api/detail/detail", {
                    method: "GET",
                    query: state,
                });
                // console.log(req);

                if(state?.CategoryLabel=='branches'){
this.branchData=req;
                }else{
                    this.data = req;

                }
                return req

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async getBaseDetails() {
            // console.log(id);
            try {

                const req = await $fetch("/api/detail/baseDetail", {
                    method: "GET",
                });
                // console.log(req);

                    this.baseDetail = req;

                
                return req

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        async listChecker(name,list){
            if(list?.length > 0){
                list?.forEach(element => {
                    if(element.label == name && name =='mobile'){
                        // console.log(element.value);
                        this.mobile = element.value
                    }
                     if(element.label == name && name =='address'){
                        // console.log(element.value);
                        this.address = element.value
                    }
                });
            }
        }
       
    },
});