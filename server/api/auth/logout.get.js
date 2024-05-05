export default defineEventHandler(async(event) => {
    const token = getCookie(event, 'token');

    const { public: { baseUrl, testUrl } } = useRuntimeConfig()


    try {
        const data = await $fetch(`${testUrl}/api/Account/signout`, {
            method: 'post',
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${token}`
            }
        })
        setCookie(event, 'token', '', {

            maxAge: new Date(0),
            path: '/'
        })
        return data;
    } catch (error) {

        console.log("ERROR from nuxt api:" + error);

        return error
    }



})