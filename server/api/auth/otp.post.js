export default defineEventHandler(async(event) => {
    const body = await readBody(event);
    const { public: { baseUrl, testUrl } } = useRuntimeConfig()

    console.log(body);
    try {
        const response = await $fetch(`${baseUrl}/api/Account/otp`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'accept': '*/*',
                'Accept-Language': 'fa',
                'Content-Type': 'application/json',

            },
        });


        return response;
    } catch (error) {
        console.log("ERROR from nuxt api otp:" + error);

        return error;
    }


});