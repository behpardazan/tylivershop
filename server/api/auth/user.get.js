export default defineEventHandler(async(event) => {
    const { public: { baseUrl, testUrl } } = useRuntimeConfig()

    const token = getCookie(event, 'token');
    console.log("server api");
    console.log(`${testUrl}/api/EndUser/CurrentUser`);
    console.log(`Bearer ${token}`)
    try {
        const data = await $fetch(`${baseUrl}/api/EndUser/CurrentUser`, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Authorization': `Bearer ${token}`
            }
        })

        return data;
    } catch (error) {
        // if (error.statusCode == 401) {
        //     setCookie(event, 'token', '', {
        //         httpOnly: true,
        //         secure: true,
        //         maxAge: new Date(0),
        //         path: '/'
        //     })
        // }
        console.log("ERROR from nuxt api:" + error);

        return error
    }



})