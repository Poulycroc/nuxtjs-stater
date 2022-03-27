export default {
  ssr: false,

  target: 'static',

  env: {
    BASE_API: process.env.BASE_API || 'http://localhost:9999/api/',
    LANG: process.env.LANG || 'en',
  },

  head: {
    title: 'nuxtjs-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: ['auth'],
  },

  css: ['~/assets/scss/app.scss'],

  plugins: [
    // SERVICES
    '~/services/bus.service',

    // PLUGINS
    '~/plugins/axios',
    '~/plugins/nuxt-client-init',
  ],

  components: false,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [
    require('./initializers/nuxt-i18n'),
    require('./initializers/axios'),
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  auth: {
    localStorage: false,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        maxAge: 10800,
      },
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: 'v1/authorizations',
            method: 'post',
            propertyName: 'data.token',
          },
          user: {
            url: 'v1/authorizations/me',
            method: 'get',
            propertyName: 'user',
          },
          logout: false,
        },
      },
    },
  },

  pwa: {
    manifest: {
      lang: process.env.LANG,
    },
  },

  build: {},
}
