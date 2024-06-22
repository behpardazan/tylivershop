export default defineEventHandler(async(event)=>{
    const {public:{baseUrl}} = useRuntimeConfig()
    console.log("event");
    const token = getCookie(event,'token');
    const body = await readBody(event);
    // console.log(query)
    try {
        const data = await $fetch(`${baseUrl}/api/EndUser/ProductLike` , {
            method: 'POST',
            headers: {
                'Accept': 'text/plain',
                'Authorization': `Bearer ${token}`
            }
           ,
           body:body
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