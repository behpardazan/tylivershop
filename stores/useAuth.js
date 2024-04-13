import { defineStore } from "pinia";
// const {public:{baseUrl}} = useRuntimeConfig();

export const useAuth = defineStore("auhStore", {
    state: () => {
        return {
            userData: null,
            userDetailData: null,
            state: {
                login: "2",
                login2tep: "3",
                register: "1",
            }
        };
    },

    actions: {
        //get user status ( login & registe )
        async userDetail(num) {
            try {

                const req = await $fetch("/api/auth/userDetail", {
                    method: "Post",
                    body: {
                        "mobile": num
                    }
                });
                // console.log(req);
                this.userDetailData = req;

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        //get otp code
        async otp(num) {
            try {

                const req = await $fetch("/api/auth/otp", {
                    method: "Post",
                    body: {
                        "mobile": num
                    }
                });
                console.log(req);

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        //get otp code is valid

        async checkOtp(num, code) {
            try {

                const req = await $fetch("/api/auth/checkOtp", {
                    method: "Post",
                    body: {
                        "mobile": num,
                        "code": code
                    }
                });
                console.log(req);
                this.signIn(num, code)

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
        //sign in 

        async signIn(num, code) {
            try {
                const login = await $fetch(('/api/auth/login'), {
                    method: "POST",
                    body: {
                        "mobile": num,
                        "code": code
                    },

                })
                console.log("==== log in ====");
                console.log(login);
                if (login.isSuccess) {
                    this.getCurrentUser()
                    navigateTo("/")

                } else {
                    errors.value = login.messages
                }

            } catch (error) {
                console.log("ERROR:" + error);
                loading.value = false
            }


        },
        async getCurrentUser() {
            // console.log(id);
            try {

                const req = await $fetch("/api/auth/user", {
                    method: "GET",
                });
                console.log(req);
                this.userData = req;

            } catch (error) {
                console.log("ERROR fromcontact store:" + error);
                console.log(error);
            }
        },
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

//1=>register
//2=> onestep login
//3=> tow step
//