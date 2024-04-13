export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    // const runTimeConfig = useRuntimeConfig();
    const {public:{baseUrl}} = useRuntimeConfig()

    console.log(body);
    try {
        const register = await $fetch(`${baseUrl}/api/Account/signup` , {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        console.log(register);
        if(register.isSuccess){
                setCookie(event, "token", register.data.token, {
                            
                       
                            path: "/",
                        });
                       
        }
     
        return register;
    } catch (error) {
        console.log("ERROR from nuxt api register:"+error);
        return error
    }
})