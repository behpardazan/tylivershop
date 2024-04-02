<template>
    <!-- <SeoDefualt /> -->
    <Header></Header>
    <slot />
   
    <Footer></Footer>
</template>
<style >


</style>
<script setup>
const isLogin =ref(false);
const getCurrentUser = async ()=>{
        try {
            const response = await $fetch('/api/user/currentUser', {
                method: 'GET',
                
            })

            isLogin.value = response;

            console.log("user.value");
            console.log(isLogin.value);

        } catch (error) {

            console.log(error);
            // navigateTo("/authorize/login")
        }
    }    
    onMounted(async () => {
    // await getCurrentUser();
})
</script>