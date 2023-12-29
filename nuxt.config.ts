// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      base_url: process.env.BASE_URL,
    }
  },
  modules: ['@nuxt/ui',
    '@davestewart/nuxt-scrollbar',
    '@samk-dev/nuxt-vcalendar',
    '@invictus.codes/nuxt-vuetify',
    'nuxt-quasar-ui',
    '@pinia/nuxt', // needed
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      link: [{
        rel: 'preconnect', href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'use-credentials'
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', rel: "stylesheet"
      },
      ],
    }
  },
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
  },
  routeRules: {
    '/api/**': { proxy: { to: "https://nanoauth.internal.nncrtvs.xyz/**" } }
  }

})
