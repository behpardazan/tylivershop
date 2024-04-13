export default defineEventHandler(async (event) => {
    const {public:{baseUrl}} = useRuntimeConfig()
    const body = await readBody(event);
 console.log(body);
  try {
    const checkOtp = await $fetch(`${baseUrl}/api/Account/CheckOtp`, {
      method: "POST",
      body:  JSON.stringify(body),
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
    });

 

    return checkOtp;
  } catch (error) {
    console.log("ERROR from nuxt api check otp:" + error);

    return error;
  }

  
});
