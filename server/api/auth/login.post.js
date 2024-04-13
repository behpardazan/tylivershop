

export default defineEventHandler(async (event) => {
  const {public:{baseUrl}} = useRuntimeConfig()

  const body = await readBody(event);
 console.log(body);


  try {
    const login = await $fetch(`${baseUrl}/api/Account/signin`, {
        method: "POST",
        body:  JSON.stringify(body),
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
      });
      if(login.isSuccess){
        setCookie(event, "token", login.data.token, {
          // httpOnly: true,
          // secure: true,
          // maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
      });
      
    
      }
     

    return login;
  } catch (error) {
    console.log("ERROR from nuxt api login:" + error);

    return error;
  }

  
});
