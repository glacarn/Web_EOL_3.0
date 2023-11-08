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
      htmlAttrs: {
        lang: 'fr'
      },
    }
  },

  vite: {
    assetsInclude: ['**/*.JPEG','**/*.JPG', '**/*.PNG', '**/*.pdf'],
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

  runtimeConfig: {
    public: {
      TAUX_REUSSITE_PREPA: process.env.NUXT_TAUX_REUSSITE_PREPA,
      ANNEE_REUSSITE_PREPA: process.env.NUXT_ANNEE_REUSSITE_PREPA,
      TAUX_POURSUITE_ETUDE_PREPA: process.env.NUXT_TAUX_POURSUITE_ETUDE_PREPA,
      TAUX_INSERTION_PROFESSIONNELLE_PREPA: process.env.NUXT_TAUX_INSERTION_PROFESSIONNELLE_PREPA,
      ANNEE_POURS_INSERT_PREPA: process.env.NUXT_ANNEE_POURS_INSERT_PREPA,

      TAUX_REUSSITE_BTS_INITIAL: process.env.NUXT_TAUX_REUSSITE_BTS_INITIAL,
      ANNEE_REUSSITE_BTS_INITIAL: process.env.NUXT_ANNEE_REUSSITE_BTS_INITIAL,
      TAUX_POURSUITE_ETUDE_BTS_INITIAL: process.env.NUXT_TAUX_POURSUITE_ETUDE_BTS_INITIAL,
      TAUX_INSERTION_PROFESSIONNELLE_BTS_INITIAL: process.env.NUXT_TAUX_INSERTION_PROFESSIONNELLE_BTS_INITIAL,
      ANNEE_POURS_INSERT_BTS_INITIAL: process.env.NUXT_ANNEE_POURS_INSERT_BTS_INITIAL,

      TAUX_REUSSITE_BTS_ALTERNANT: process.env.NUXT_TAUX_REUSSITE_BTS_ALTERNANT,
      ANNEE_REUSSITE_BTS_ALTERNANT: process.env.NUXT_ANNEE_REUSSITE_BTS_ALTERNANT,
      TAUX_POURSUITE_ETUDE_BTS_ALTERNANT: process.env.NUXT_TAUX_POURSUITE_ETUDE_BTS_ALTERNANT,
      TAUX_INSERTION_PROFESSIONNELLE_BTS_ALTERNANT: process.env.NUXT_TAUX_INSERTION_PROFESSIONNELLE_BTS_ALTERNANT,
      ANNEE_POURS_INSERT_BTS_ALTERNANT: process.env.NUXT_ANNEE_POURS_INSERT_BTS_ALTERNANT,

      TAUX_REUSSITE_LICENCE: process.env.NUXT_TAUX_REUSSITE_LICENCE,
      ANNEE_REUSSITE_LICENCE: process.env.NUXT_ANNEE_REUSSITE_LICENCE,
      TAUX_POURSUITE_ETUDE_LICENCE: process.env.NUXT_TAUX_POURSUITE_ETUDE_LICENCE,
      TAUX_INSERTION_PROFESSIONNELLE_LICENCE: process.env.NUXT_TAUX_INSERTION_PROFESSIONNELLE_LICENCE,
      ANNEE_POURS_INSERT_LICENCE: process.env.NUXT_ANNEE_POURS_INSERT_LICENCE,
    }
  }

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