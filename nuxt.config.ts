// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  css: ['~/assets/css/main.css'],

    app: {
    head: {
      
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      bodyAttrs: { dir: 'rtl' }

    },
  },
  modules: [
      '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt3-leaflet' 
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
   // vueI18n: './i18n.config.ts', // if you are using custom path, default 
    strategy: 'prefix_except_default',
    defaultLocale: 'fa',
    langDir: './lang',
    locales: [
      // {
      //   code: 'en',
      //   name: 'En',
      //   file: 'en.json'
      // },
      {
        code: 'fa',
        name: 'فا',
        file: 'fa.json'
      },
    ],
    
  },
  runtimeConfig:{
    apiSecret:"zzzzz",
    public:{
      projectName:"تایلیور شاپ",
      
      baseUrl:"https://tylivershop-api.bhptest.ir",
      testUrl:"https://api.aranegarcenter.com",
      imageUploaderUrl:"https://tylivershop-file.bhptest.ir",
      showImageBaseUrl:"https://tylivershop-file.bhptest.ir",
      fileUploaderUrl:"https://api.aranegarcenter.com",
      telegramShare:"https://telegram.me/share/url?url=",
      linkdinShare:"http://www.linkedin.com/shareArticle?mini=true&url=",
      whatsappShare:"https://web.whatsapp.com/send?l=en&text=",

      responseCode:{
        none:0,
        signUp: 1,
        oneFactor:2,
        twoFactor:3,
        locked:4,
        verifyCodeCountError:5

      }
    }
  }
})
