export default defineEventHandler(async(event) => {
    const { public: { baseUrl } } = useRuntimeConfig()

    console.log("events");
    console.log(getQuery(event).id)

    try {
        const data = await $fetch(`${baseUrl}/api/brand/Id?id=${getQuery(event)?.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            // query: getQuery(event)
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
        console.log("ERROR from nuxt api:" + error);

        return error
    }


    return 'body'
})