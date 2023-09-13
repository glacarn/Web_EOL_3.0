// import vuetify from 'vite-plugin-vuetify'
// import { createResolver } from '@nuxt/kit'
// const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  /*
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  */
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  vite: {
    assetsInclude: "**/*.JPG",
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/variables.scss";'
        }
      }
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },
  
/*  hooks: {
    'vite:extendConfig': config => {
      config.plugins.push(
        vuetify({
          autoImport: true,
          styles: { configFile: resolve('./settings.scss') },
        })
      )
    },
  }, 

  sourcemap: {
    server: false,
    client: false,
  },
*/
})