export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gender Equality Initiative',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Gender Equality Initiative aims to assist Malaysia as a whole in achieving CEDAW & UPR recommendations by providing capacity building mainly for CSOs/CBOs.',
      },
      { hid: 'keywords', name: 'keywords', content: 'ngo, malaysia, child sexual abuse, advocacy, awareness, child rights' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Gender Equality Initiative'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Gender Equality Initiative aims to assist Malaysia as a whole in achieving CEDAW & UPR recommendations by providing capacity building mainly for CSOs/CBOs.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/static/gei-logo.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Gender Equality Initiative'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gender Equality Initiative'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Gender Equality Initiative aims to assist Malaysia as a whole in achieving CEDAW & UPR recommendations by providing capacity building mainly for CSOs/CBOs.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/static/gei-logo.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/static/gei-logo.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Gender Equality Initiative'
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css',
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/menu',
      '~/components/ui',
      '~/components/cards',
      '~/components/button',
      '~/components/homepage',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/imagemin',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader'),
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    },
  },
}
