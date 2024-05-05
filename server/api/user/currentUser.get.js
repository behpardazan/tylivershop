export default defineEventHandler(async(event)=>{
    const token = getCookie(event,'token');
    const {public:{baseUrl}} = useRuntimeConfig()
    try {
        const data = await $fetch( `${baseUrl}/api/EndUser/CurrentUser` , {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Authorization': `Bearer ${token}`
            }
        })
        
        return data;
    }
    catch (error) {
        // if(error.statusCode == 401){
        //     setCookie(event, 'token', '',{
             
        //         maxAge: new Date(0),
                
        //     })
        // }
        console.log("ERROR from nuxt api:"+error);
        
        return error
    }



})