/* eslint-disable prettier/prettier */
/* eslint-disable */
import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

const config: NuxtConfig = {
  head: {
    title: 'my-app-314003',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyBE9l0lYeb3E8TEV8tSVlJiEumxjsr_46o',
      authDomain: 'my-app-314003.firebaseapp.com',
      projectId: 'my-app-314003',
      storageBucket: 'my-app-314003.appspot.com',
      messagingSenderId: '157656220463',
      appId: '1:157656220463:web:9b2f0973700d8821c457da',
      measurementId: 'G-91L9B2GQ2X',
    },
    onFirebaseHosting: true,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        emulatorPort: isDev && useEmulators ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      functions: {
        emulatorPort: isDev && useEmulators ? 12345 : undefined,
      },
      storage: true,
      database: {
        emulatorPort: isDev && useEmulators ? 9000 : undefined,
      },
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'goToLupasGithub',
            url: 'https://github.com/lupas',
          },
          {
            action: 'goToModuleGithub',
            url: 'https://github.com/nuxt-community/firebase-module',
          },
        ],
        fcmPublicVapidKey:
          'BBjKjior0YPp7ILivDjaM_pFDSAjJwyFBcHyv2tMU6DvnWjy-4TsYztHPaQDiwNv1c2JMx0s41Lf8-p9aNE8Og8',
      },
    },
  },

  modules: ['@nuxtjs/pwa'],
  // plugins: ['~/plugins/lazyMode'],

  build: {},

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: ['testMiddleware'],
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
}
export default config
