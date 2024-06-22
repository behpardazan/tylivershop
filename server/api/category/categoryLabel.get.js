export default defineEventHandler(async(event) => {
    const { public: { baseUrl } } = useRuntimeConfig()

    console.log("eventaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(getQuery(event))

    try {
        const data = await $fetch(`${baseUrl}/api/Category/label/${getQuery(event).catLabel}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
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
        console.log("ERROR from nuxt api:" + error);

        return error
    }


    return 'body'
})