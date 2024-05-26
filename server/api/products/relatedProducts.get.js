export default defineEventHandler(async(event)=>{
    const {public:{baseUrl}} = useRuntimeConfig()
    console.log("event");
    const query = getQuery(event);
    console.log("rrrrrreeeeeeeeeeeelatedddddddddddddddddddd")
    console.log(`${baseUrl}/api/ProductRelate/${query.id}`)
    try {
        const data = await $fetch(`${baseUrl}/api/ProductRelate/${query.id}` , {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Accept-Language': 'de-DE'
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