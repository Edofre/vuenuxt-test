module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuenuxt-test',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Testing Nuxt.js '}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // node.js module but we specify the pre-processor
    {src: '~assets/scss/main.scss', lang: 'sass'},
    {src: '~assets/scss/custom.scss', lang: 'scss'},
    {src: 'font-awesome/scss/font-awesome.scss', lang: 'scss'},

  ],
};
