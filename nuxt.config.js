
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */

  generate: {
    routes: [
      '/posts/joe',
      '/posts/karl',
      '/posts/jack'
    ]
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  baseURL: "http://192.168.8.141:5000/api/v1"
  },

  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
 },

  toast: {
    position: 'top-right',
    duration: 2000
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/user/login', method: 'post', propertyName:    'token' },
          logout: false,
          user: {url: '/user/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: 'your facebook app id',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email',
        scope: ['public_profile', 'email']
      },
      google: {
        client_id: 'your gcloud oauth app client id'
      },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
      user: '/profile',
      callback:'/'
    }
  }
}
