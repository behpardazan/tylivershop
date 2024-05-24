export default defineEventHandler(async(event)=>{
    const {public:{baseUrl}} = useRuntimeConfig()
    console.log("event");
    const query = getQuery(event);
    console.log(query);
    const token = getCookie(event,'token');
    try {
        const data = await $fetch(`${baseUrl}/api/Merchant` , {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Authorization': `Bearer ${token}`
            },
           
        })
        
        return data;
    } catch (error) {
        // if(error.statusCode == 401){
        //     setCookie(event, 'token', '',{
        //         httpOnly: true,
        //         secure: true,
        //         maxAge: new Date(0),
        //         path: '/'
        //     })
        // }
        console.log("ERROR from nuxt api:"+error);
        
        return error
    }

})