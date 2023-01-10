import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  base: '/create-laravel-project-docs/',
  lang: 'en-US',
  title: 'Create Laravel Project',
  description: 'Starting a new Laravel project was never easier!',

  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 5
    }),
     backToTopPlugin(),
     shikiPlugin({
       theme: 'github-dark'
     })
  ],

  theme: defaultTheme({
    // logoDark: 'https://boonweb.de/img/boonweb-logo-white.webp',
    // logo: 'https://boonweb.de/img/boonweb-logo.webp',

    lastUpdated: true,
    contributors: false,

    themePlugins: {
      backToTop: true,
    },

    colorMode: 'light',

    sidebar: 'auto',
    editLink: false,
    // editLinkText: 'Edit this page on Github',

    repo: 'boonweb/create-laravel-project',
    docsBranch: 'main',

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Getting Started',
        link: '/guide/',
      },
      {
        text: 'BoonWeb GmbH',
        link: 'https://boonweb.de',
      },
    ],
  })
})
